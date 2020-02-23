import JSZip                        from 'jszip';
import map                          from 'lodash.map';

export default {
    methods : {
        _readData : function (data) {

            this.G6.Util.traverseTree(data, this._traverseOneNode);
            this.data.graph.read(data);

            setTimeout(() => {

                this.data.graph.layout();
    
                // eslint-disable-next-line no-magic-numbers
                this.$refs['mor-mindmap-zoomslider'].set(this.getZoom() * 100);

            });

        },
        _importDataWalker : function (data, nodeCallback, customWalker) {

            let dataWalker = (currentData, ...args) => {

                for (let item of currentData) {

                    nodeCallback(item, ...args);

                    if (item.children) {

                        if (typeof customWalker === 'function') {

                            customWalker(item.children, dataWalker);

                        } else {

                            dataWalker(item.children);

                        }

                    }

                }

            };

            dataWalker(data);

        },
        _resetImportStatus : function () {

            this.data.currentImportNode = undefined;
            this.data.currentImportMode = undefined;

        },
        _importJSON : function (data) {

            let xmindData;
            let current;

            this._importDataWalker(data, (item, parent) => {

                current = {
                    text : item.text,
                    children : []
                };

                if (item.link) {
                    
                    current.link = item.link;

                }

                if (item.note) {
                    
                    current.note = item.note;

                }

                if (item.mark) {
                    
                    current.mark = item.mark;

                }

                if (item.tag) {
                    
                    current.tag = item.tag;

                }

                this._traverseOneNode(current);

                if (parent === undefined) {

                    xmindData = current;

                } else {

                    parent.push(current);

                }

            }, (children, dataWalker) => {

                if (children && children.length > 0) {

                    dataWalker(children, current.children);

                }

            });

            return xmindData;

        },
        _importXMIND : function (data) {

            let xmindData;
            let current;

            this._importDataWalker(data, (item, parent) => {

                current = {
                    text : item.title,
                    children : []
                };

                if (item.href) {
                    
                    current.link = item.href;

                }

                if (item.notes) {
                    
                    current.note = item.notes.plain.content;

                }

                if (item.markers) {
                    
                    let markList = map(item.markers, 'markerId');

                    for (let index in markList) {

                        markList[index] = markList[index].replace('-', ':');

                    }

                    current.mark = markList;

                }

                if (item.labels) {

                    current.tag = item.labels;

                }

                this._traverseOneNode(current);

                if (parent === undefined) {

                    xmindData = current;

                } else {

                    parent.push(current);

                }

            }, (children, dataWalker) => {

                if (children) {

                    dataWalker(children.attached, current.children);

                }

            });

            return xmindData;

        },
        _importFile : function (file) {

            let nodeId = this.data.currentImportNode;
            let mode = this.data.currentImportMode;

            this.cancelImportFile();

            if (file.file.type === 'application/json') {

                file.file.text().then(text => {
                        
                    this.importFrom('json', text, nodeId, mode);

                });

            } else if (file.file.type === 'application/vnd.xmind.workbook') {

                let zip = new JSZip();
                    
                return zip
                    .loadAsync(file.file)
                    .then(content => content.files['content.json'].async('text'))
                    .then(text => {

                        this.importFrom('xmind', text, nodeId, mode);

                    });

            }

        },
        importFromObject : function (data, nodeId, mode) {

            return this.importFrom('json', data, nodeId, mode);

        },
        importFrom : function (type, data, nodeId, mode = 'replace') {

            let xmindData = {};

            if (type === 'json') {

                if (typeof data === 'string') {
                    
                    data = JSON.parse(data);

                }

                if (!(data instanceof Array)) {

                    data = [data];

                }

                xmindData = this._importJSON(data);

            } else if (type === 'xmind') {

                if (typeof data === 'string') {

                    data = JSON.parse(data);

                }

                xmindData = this._importXMIND([data[0].rootTopic]);

            }

            if (nodeId) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                if (model.children === undefined) {

                    model.children = [];

                }

                if (mode === 'replace') {

                    model.children = [xmindData];

                } else if (mode === 'append') {

                    model.children = model.children.concat([xmindData]);

                } else if (mode === 'prepend') {

                    model.children = [xmindData].concat(model.children);

                }

                this.data.graph.changeData();
                this.data.graph.layout();

            } else {

                xmindData.isRoot = true;
                this._readData(xmindData);

            }

            return this;

        },
        showImportFile : function (nodeId, mode) {

            this.data.currentImportNode = nodeId;
            this.data.currentImportMode = mode;
            this.data.$importDialog.toggle(true);
            this.data.mouseOnCanvas = false;

        },
        cancelImportFile : function () {

            this.data.$importDialog.toggle(false);
            this.data.mouseOnCanvas = true;

        },
    }
};
