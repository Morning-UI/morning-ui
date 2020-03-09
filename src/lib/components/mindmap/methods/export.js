import JSZip                        from 'jszip';
import {MARKS}                      from '../const/marks';
import {
    pluckDataFromNodes,
    exportGetter,
}                                   from '../base/utils';

const xmindDataWalker = (data, nodeCallback, customWalker) => {

    let dataWalker = (currentData, ...args) => {

        for (let item of currentData) {

            nodeCallback(item, ...args);

            console.log(item);

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

const exportMethods = {
    json : data => pluckDataFromNodes(data, exportGetter),
    png : (data, vm) => {
        
        return new Promise(resolve => {

            let originZoom = vm.getZoom();
            let canvas = vm.data.$canvas.querySelector('canvas');
            let originWidth = canvas.width;
            let originHeight = canvas.height;

            vm.data.screenshotting = true;

            vm.fitView();

            setTimeout(() => {

                let zoom = vm.getZoom();

                canvas.style.width = `${originWidth / zoom / 2}px`;
                canvas.style.height = `${originHeight / zoom / 2}px`;
                canvas.width = originWidth / zoom;
                canvas.height = originHeight / zoom;
                vm.data.graph.render();
                vm.data.graph.refreshLayout();

                setTimeout(() => {

                    resolve(canvas.toDataURL('image/png'));
                    canvas.style.width = `${originWidth / 2}px`;
                    canvas.style.height = `${originHeight / 2}px`;
                    canvas.width = originWidth;
                    canvas.height = originHeight;
                    vm.data.graph.render();
                    vm.data.graph.refreshLayout();
                    vm.fitView();
                    vm.zoom(originZoom);
                    vm.data.screenshotting = false;

                });
                
            });

        });

    },
    xmind : (data, vm) => {

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
        let xmindGetter = Object.assign({
            title : item => item.text,
            href : item => item.link,
            labels : item => item.tag,
            branch : item => item._collapsed ? 'folded' : (undefined),
        }, exportGetter);

        delete xmindGetter.text;
        delete xmindGetter.link;
        delete xmindGetter.tag;
        delete xmindGetter._collapsed;

        data = pluckDataFromNodes(data, xmindGetter);
        xmindDataWalker(data, (item, cid) => {

            current = {
                title : item.title,
                href : item.href,
                labels : item.labels,
                branch : item.branch
            };

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

            if (item.mark && item.mark.length > 0) {

                let marker = new Marker();

                for (let markName of item.mark) {

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

                if (vm.conf.layout === 'LR') {

                    file.value[0].rootTopic.structureClass = 'org.xmind.ui.logic.right';

                }
                
                // else if (vm.conf.layout === 'RL') {

                //     file.value[0].rootTopic.structureClass = 'org.xmind.ui.logic.left';

                // }
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

    }
};

const downloadFile = (dataUrl, suffix) => {

    let downloadLink = document.createElement('a');

    downloadLink.style.display = 'none';
    downloadLink.href = dataUrl;
    downloadLink.download = `${+new Date()}.${suffix}`;
    window.document.body.appendChild(downloadLink);
    downloadLink.click();
    window.document.body.removeChild(downloadLink);

};

export default {
    methods : {
        exportToObject : function (nodeId = 1) {

            let data = [this.data.graph.findById(nodeId).getModel()];

            return exportMethods.json(data);

        },
        downloadFile : function (type, nodeId = 1) {

            // type is : xmind,png,json
            let data = [this.data.graph.findById(nodeId).getModel()];

            Promise
                .resolve(exportMethods[type.toLowerCase()](data, this))
                .then(dataResult => {
                    
                    if (type === 'png') {

                        downloadFile(dataResult, 'png');

                    } else if (type === 'xmind') {

                        downloadFile(URL.createObjectURL(dataResult), 'xmind');

                    } else if (type === 'json') {

                        let blob = new Blob([JSON.stringify(dataResult, null, 4)]);

                        downloadFile(URL.createObjectURL(blob), 'json');

                    }

                });

            return this;

        },
    }
};
