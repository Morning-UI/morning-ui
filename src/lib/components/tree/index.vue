<template>
    <mor-tree
        :_uiid="uiid"
        :class="[moreClass]"

        :tree="tree"
        :foldable="foldable"
        :cable="cable"
        :can-click="canClick"
        :can-search="canSearch"
        :custom-fold-icon="customFoldIcon"
        :custom-unfold-icon="customUnfoldIcon"
        :custom-leafnode-icon="customLeafnodeIcon"
        :fold-style="foldStyle"
    >
    
        <morning-textinput
            v-if="conf.canSearch"
            inside-name="搜索"
            v-model="data.searchKey"
        ></morning-textinput>

        <morning-private-tree
            :ref="'mor-tree-roottree-'+uiid"

            :tree="conf.tree"
            :parent-path="[]"
            :current-node="data.currentNode"
            :foldable="conf.foldable"
            :cable="conf.cable"
            :can-click="conf.canClick"
            :can-search="conf.canSearch"
            :search-key="data.searchKey"
            :custom-fold-icon="conf.customFoldIcon"
            :custom-unfold-icon="conf.customUnfoldIcon"
            :custom-leafnode-icon="conf.customLeafnodeIcon"
            :fold-style="conf.foldStyle"

            @node-emit="_nodeEmit"
            @node-fold="_nodeFold"
            @node-unfold="_nodeUnfold"
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
        },
        cable : {
            type : Boolean,
            default : false
        },
        canClick : {
            type : Boolean,
            default : true
        },
        canSearch : {
            type : Boolean,
            default : false
        },
        customFoldIcon : {
            type : String,
            default : ''
        },
        customUnfoldIcon : {
            type : String,
            default : ''
        },
        customLeafnodeIcon : {
            type : String,
            default : ''
        },
        foldStyle : {
            type : String,
            default : 'arrow',
            validator : (value => ['arrow', 'folder', 'symbol'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                tree : this.tree,
                foldable : this.foldable,
                cable : this.cable,
                canClick : this.canClick,
                canSearch : this.canSearch,
                customFoldIcon : this.customFoldIcon,
                customUnfoldIcon : this.customUnfoldIcon,
                customLeafnodeIcon : this.customLeafnodeIcon,
                foldStyle : this.foldStyle
            };

        },
        moreClass : function () {

            return {
                'has-cabel' : this.conf.cable,
                'can-click' : this.conf.canClick,
                foldable : this.conf.foldable
            };

        }
    },
    data : function () {

        return {
            data : {
                currentNode : '',
                searchKey : ''
            }
        };

    },
    methods : {
        _nodeEmit : function (path) {

            this.data.currentNode = path.join('/');
            this.$emit('node-emit', path);

        },
        _nodeFold : function (path) {

            this.$emit('node-fold', path);

        },
        _nodeUnfold : function (path) {

            this.$emit('node-unfold', path);

        },
        foldNode : function (pathArr, fold) {

            this.$refs[`mor-tree-roottree-${this.uiid}`]._foldNode(pathArr, fold);

            return this;

        },
        foldAllNode : function () {

            this.$refs[`mor-tree-roottree-${this.uiid}`]._foldAllNode(true);

            return this;

        },
        unfoldAllNode : function () {

            this.$refs[`mor-tree-roottree-${this.uiid}`]._foldAllNode(false);

            return this;

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>
