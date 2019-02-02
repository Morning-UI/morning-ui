<template>
    <mor-tree
        :_uiid="uiid"
        :class="[]"

        :tree="tree"
        :foldable="foldable"
    >

        <morning-private-tree
            :tree="conf.tree"
            :parent-path="[]"
            :current-node="data.currentNode"
            :foldable="conf.foldable"

            @node-emit="_nodeEmit"
        ></morning-private-tree>

    </mor-tree>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'tree',
    props : {
        tree : {
            type : Object,
            default : (() => ({}))
        },
        foldable : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        _conf : function () {

            return {
                tree : this.tree,
                foldable : this.foldable
            };

        }
    },
    data : function () {

        return {
            data : {
                currentNode : ''
            }
        };

    },
    methods : {
        _nodeEmit : function (path) {

            this.data.currentNode = path.join('/');

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
