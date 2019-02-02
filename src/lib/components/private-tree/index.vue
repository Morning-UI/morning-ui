<template>
    <mor-private-tree
        :_uiid="uiid"
        :class="[]"

        :tree="tree"
        :parent-path="parentPath"
        :current-node="currentNode"
        :foldable="foldable"
    >

    <ul class="tree-body">
        <template v-for="(item, key) in conf.tree">
            <li
                v-if="typeof item === 'string'"
                class="tree-node"
            >
                <span>
                    <a
                        href="javascript:;"
                        @click.stop="_nodeClick(key)"
                        class="node-name"
                        :class="{
                            current : (conf.currentNode === conf.parentPath.concat([key]).join('/'))
                        }"
                    >{{item}}</a>
                </span>
            </li>

            <li
                v-else
                class="tree-node"
                :class="{
                    fold : (data.foldKeys.indexOf(key) !== -1)
                }"
            >
                <span>
                    <a
                        v-if="conf.foldable"
                        href="javascript:;"
                        @click="_nodeFoldSwitch(key)"
                        class="node-switcher"
                    >
                        <i class="mo-icon mo-icon-down" v-if="data.foldKeys.indexOf(key) === -1"></i>
                        <i class="mo-icon mo-icon-right" v-else></i>
                    </a>

                    <a
                        href="javascript:;"
                        @click.stop="_nodeClick(key)"
                        class="node-name"
                        :class="{
                            current : (conf.currentNode === conf.parentPath.concat([key]).join('/'))
                        }"
                    >{{item.name}}</a>
                </span>
                
                <morning-private-tree
                    :tree="item.childs"
                    :parentPath="conf.parentPath.concat([key])"
                    :currentNode="conf.currentNode"
                    :foldable="conf.foldable"

                    @node-emit="_nodeEmit"
                ></morning-private-tree>
            </li>
        </template>
    </ul>

    </mor-private-tree>
</template>
 
<script>
export default {
    origin : 'UI',
    private : true,
    name : 'private-tree',
    props : {
        tree : {
            type : Object,
            default : (() => ({}))
        },
        parentPath : {
            type : Array,
            default : (() => ([]))
        },
        currentNode : {
            type : String,
            default : ''
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
                parentPath : this.parentPath,
                currentNode : this.currentNode,
                foldable : this.foldable
            };

        }
    },
    data : function () {

        return {
            data : {
                current : null,
                foldKeys : []
            }
        };

    },
    methods : {
        _nodeClick : function (key) {

            console.log(key);

            let nodePath = this.conf.parentPath.concat([key]);

            this.$emit('node-emit', nodePath);

        },
        _nodeEmit : function (path) {

            this.$emit('node-emit', path);

        },
        _nodeFoldSwitch : function (key) {

            let index = this.data.foldKeys.indexOf(key);

            if (index === -1) {

                this.data.foldKeys.push(key);

            } else {

                this.data.foldKeys.splice(index, 1);

            }

        }
    },
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
