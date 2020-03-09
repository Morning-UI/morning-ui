// import JSZip from 'jszip';
// import map from 'lodash.map';
import {
    traverseOneNode,
}                                   from '../base/utils';

const importDataWalker = (data, nodeCallback, customWalker) => {

    let dataWalker = (currentData, ...args) => {

        for (let item of currentData) {

            nodeCallback(item, ...args);

            if (item.children && item.children.length > 0) {

                if (typeof customWalker === 'function') {

                    customWalker(Object.assign([], item.children), dataWalker);

                } else {

                    dataWalker(item.children);

                }

            }

        }

    };

    dataWalker(data);

};

const importMethods = {
    json : (data, vm) => {

        let xmindData;
        let current;

        importDataWalker(data, (item, parent) => {

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

            if (item._collapsed) {

                current._collapsed = item._collapsed;
                current._collapsedChildren = item.children;

            }

            traverseOneNode.call(vm, current);

            if (parent === undefined) {

                xmindData = current;

            } else {

                parent.push(current);

            }

        }, (children, dataWalker) => {

            if (children && children.length > 0) {

                dataWalker(children, (current._collapsed ? current._collapsedChildren : current.children));

            }

        });

        return xmindData;

    }
};

export default {
    methods: {
        // _importXMIND: function (data) {

        //     let xmindData;
        //     let current;

        //     this._importDataWalker(data, (item, parent) => {

        //         current = {
        //             text: item.title,
        //             children: []
        //         };

        //         if (item.href) {

        //             current.link = item.href;

        //         }

        //         if (item.notes) {

        //             current.note = item.notes.plain.content;

        //         }

        //         if (item.markers) {

        //             let markList = map(item.markers, 'markerId');

        //             for (let index in markList) {

        //                 markList[index] = markList[index].replace('-', ':');

        //             }

        //             current.mark = markList;

        //         }

        //         if (item.labels) {

        //             current.tag = item.labels;

        //         }

        //         this._traverseOneNode(current);

        //         if (parent === undefined) {

        //             xmindData = current;

        //         } else {

        //             parent.push(current);

        //         }

        //     }, (children, dataWalker) => {

        //         if (children) {

        //             dataWalker(children.attached, current.children);

        //         }

        //     });

        //     return xmindData;

        // },
        // _importFile: function (file) {

        //     window.JSZip = JSZip;
        //     let nodeId = this.data.currentImportNode;
        //     let mode = this.data.currentImportMode;

        //     this.cancelImportFile();

        //     if (file.file.type === 'application/json') {

        //         file.file.text().then(text => {

        //             this.importFrom('json', text, nodeId, mode);

        //         });

        //     } else if (file.file.type === 'application/vnd.xmind.workbook') {

        //         let zip = new JSZip();

        //         return zip
        //             .loadAsync(file.file)
        //             .then(content => content.files['content.json'].async('text'))
        //             .then(text => {

        //                 this.importFrom('xmind', text, nodeId, mode);

        //             });

        //     }

        // },
        // showImportFile: function (nodeId, mode) {

        //     this.data.currentImportNode = nodeId;
        //     this.data.currentImportMode = mode;
        //     this.data.$importDialog.toggle(true);
        //     this.data.mouseOnCanvas = false;

        // },
        // cancelImportFile: function () {

        //     this.data.$importDialog.toggle(false);
        //     this.data.mouseOnCanvas = true;

        // },
        // importFromObject: function (data, nodeId, mode) {

        //     return this.importFrom('json', data, nodeId, mode);

        // },
        // type is json,xmind
        importFrom : function (type, data, nodeId, mode = 'replace') {

            let xmindData = {};

            if (type === 'json') {

                if (typeof data === 'string') {

                    data = JSON.parse(data);

                }

                if (!(data instanceof Array)) {

                    data = [data];

                }

                xmindData = importMethods.json(data, this);

            } else if (type === 'xmind') {

                if (typeof data === 'string') {

                    data = JSON.parse(data);

                }

                xmindData = importMethods.xmind([data[0].rootTopic]);

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
                this.data.graph.refreshLayout();

            } else {

                xmindData.isRoot = true;
                this._readData(xmindData);

            }

            return this;

        },
    }
};
