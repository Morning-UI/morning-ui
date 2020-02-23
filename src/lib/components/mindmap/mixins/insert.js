import map                          from 'lodash.map';

export default {
    methods : {
        // 插入同级节点(前)
        insertBeforeNode : function (nodeId, datas) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            datas = this._parseNewNodeData(datas);

            return this.insertSubNode(parentModel.id, datas, indexOfParent);

        },
        // 插入同级节点(后)
        insertAfterNode : function (nodeId, datas) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            datas = this._parseNewNodeData(datas);

            return this.insertSubNode(parentModel.id, datas, indexOfParent + 1);

        },
        // 插入同级节点(最后)
        insertNode : function (nodeId, datas) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            if (model.isRoot) {

                return null;

            }

            let parentModel = node.getInEdges()[0].getSource().getModel();

            datas = this._parseNewNodeData(datas);

            return this.insertSubNode(parentModel.id, datas);

        },
        // 插入子节点
        insertSubNode : function (nodeId, datas, index = -1) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let isSingle = (datas instanceof Array);

            datas = this._parseNewNodeData(datas);

            if (model.children === undefined) {

                model.children = [];

            }

            this._traverseNode(datas);

            if (index > -1) {

                let datas2 = Object.assign([], datas);

                datas2.reverse();

                for (let item of datas2) {
                
                    model.children.splice(index, 0, item);

                }

            } else {

                for (let item of datas) {
                
                    model.children.push(item);

                }

            }

            this.data.graph.changeData();
            this.data.graph.layout();
            
            if (isSingle) {

                return datas[0].id;

            }

            return map(datas, 'id');

        },
        // 插入唯一节点(向后)
        appendUniqueNode : function (nodeId, data) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            data = this._parseNewNodeData(data);
            data = data[0];
            data.children = this._pluckDataFromNodes(model.children);
            this.G6.Util.traverseTree(data, this._traverseOneNode);
            model.children = [data];
            // parentModel.children.splice(nodeIndexOfParent, 1, data);
            this.data.graph.changeData();
            this.data.graph.layout();

            return data.id;

        },
        // 插入唯一节点(向前)
        prependUniqueNode : function (nodeId, data) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            if (model.isRoot) {

                return null;

            }

            let parentModel = node.getInEdges()[0].getSource().getModel();
            let nodeIndexOfParent = parentModel.children.indexOf(model);

            data = this._parseNewNodeData(data);
            data = data[0];
            data.children = this._pluckDataFromNodes([model]);
            this.G6.Util.traverseTree(data, this._traverseOneNode);
            parentModel.children.splice(nodeIndexOfParent, 1, data);
            this.data.graph.changeData();
            this.data.graph.layout();

            return data.id;

        }
    }
};
