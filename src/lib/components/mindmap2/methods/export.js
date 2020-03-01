import JSZip                        from 'jszip';
import {MARKS}                      from '../const/marks';

export default {
    methods : {
        _exportDataWalker : function (data, nodeCallback, customWalker) {

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

        },
        _downloadFile : function (dataUrl, suffix) {

            let downloadLink = document.createElement('a');

            downloadLink.style.display = 'none';
            downloadLink.href = dataUrl;
            downloadLink.download = `${+new Date()}.${suffix}`;
            window.document.body.appendChild(downloadLink);
            downloadLink.click();
            window.document.body.removeChild(downloadLink);

        },
        _exportPNG : function () {

            let canvas = this.data.$canvas.querySelector('canvas');

            return canvas.toDataURL('image/png');

        },
        _exportJSON : function (data) {

            let json = [];
            let current = null;

            this._exportDataWalker(data, (item, parent) => {

                current = {
                    text : item.text,
                    children : []
                };

                current.link = item.link;
                current.note = item.note;
                current.mark = item.mark;
                current.tag = item.tag;

                if (parent === undefined) {

                    json.push(current);

                } else {

                    parent.push(current);

                }

            }, (children, dataWalker) => {

                if (children && children.length > 0) {

                    dataWalker(children, current.children);

                }

            });

            return json;
            
        },
        _exportXMIND : function (data) {

            let zip = new JSZip();
            let {
                Workbook,
                Topic,
                Dumper,
                Marker
            } = window;
            let topic;
            let workbook = new Workbook();
            let current = null;

            this._exportDataWalker(data, (item, cid) => {

                current = {
                    title : item.text
                };

                if (item.link) {

                    current.href = item.link;

                }

                if (item.tag) {

                    current.labels = item.tag;

                }

                if (topic === undefined) {

                    topic = new Topic({
                        sheet : workbook.createSheet('sheet title', current.text)
                    });

                } else if (cid) {

                    topic.on(cid).add(current);

                }

                if (item.note) {

                    topic.on(topic.cid()).note(item.note);

                }

                if (item._mark && item._mark.length > 0) {

                    let marker = new Marker();

                    for (let markName of item._mark) {

                        topic.on(topic.cid()).marker(marker[MARKS[markName].markMethod](MARKS[markName].markValue));

                    }

                }

            }, (children, dataWalker) => {

                if (children && children.length > 0) {

                    children.unshift(children.pop());
                    dataWalker(children, topic.cid());

                }

            });

            let dumper = new Dumper({
                workbook
            });
            let files = dumper.dumping();

            for (const file of files) {

                if (file.filename === 'content.json') {

                    file.value = JSON.parse(file.value);

                    if (this.conf.layout === 'LR') {
                    
                        file.value[0].rootTopic.structureClass = 'org.xmind.ui.logic.right';

                    } else if (this.conf.layout === 'RL') {
                    
                        file.value[0].rootTopic.structureClass = 'org.xmind.ui.logic.left';

                    }
                    
                    // else if (this.conf.layout === 'TL') {
                    //     file.value[0].rootTopic.structureClass = 'org.xmind.ui.tree.right';
                    // }

                    file.value = JSON.stringify(file.value);

                }
                
                zip.file(file.filename, file.value);

            }
            
            return zip.generateAsync({
                type : 'blob'
            });

        },
        exportToObject : function (nodeId) {

            let data = [this.data.graph.get('data')];

            if (nodeId) {

                data = [this.data.graph.findById(nodeId).getModel()];

            }

            return this._exportJSON(data);

        },
        downloadFile : function (type, nodeId) {

            let data = [this.data.graph.get('data')];

            if (nodeId) {

                data = [this.data.graph.findById(nodeId).getModel()];

            }

            // type is : xmind,png,json
            let dataResult = this[`_export${type.toUpperCase()}`](data);

            if (type === 'png') {

                this._downloadFile(dataResult, 'png');
            
            } else if (type === 'xmind') {

                dataResult.then(blob => this._downloadFile(URL.createObjectURL(blob), 'xmind'));

            } else if (type === 'json') {
                
                let blob = new Blob([JSON.stringify(dataResult, null, 4)]);

                this._downloadFile(URL.createObjectURL(blob), 'json');

            }

            return this;

        },
    }
};
