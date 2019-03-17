<template>
    <mor-private-tree
        :_uiid="uiid"
        :class="[]"

        :tree="tree"
        :parent-path="parentPath"
        :current-node="currentNode"
        :foldable="foldable"
        :can-click="canClick"
        :can-search="canSearch"
        :search-key="searchKey"
        :custom-fold-icon="customFoldIcon"
        :custom-unfold-icon="customUnfoldIcon"
        :custom-leafnode-icon="customLeafnodeIcon"
        :fold-style="foldStyle"
    >

    <ul class="tree-body">
        <template v-for="(item, key) in conf.tree">
            <li
                v-if="typeof item === 'string'"
                class="tree-node"
                :key="key"
                :class="{
                    hide : (conf.canSearch && conf.searchKey !== '' && item.search(conf.searchKey) === -1)
                }"
            >
                <span>
                    <span class="leafnode-icon" v-html="item.icon || leafnodeIcon"></span>
                    <a
                        href="javascript:;"
                        @click.stop="_nodeClick(key)"
                        class="node-name"
                        :class="{
                            current : (conf.currentNode === conf.parentPath.concat([key]).join('/'))
                        }"
                    >
                        {{item}}
                    </a>
                </span>
            </li>

            <li
                v-else
                class="tree-node is-fold"
                :key="key"
                :class="{
                    unfold : (data.unfoldKeys.indexOf(key) !== -1),
                    hide : (conf.canSearch && conf.searchKey !== '' && item.name.search(conf.searchKey) === -1 && data.childPathHitSearch.indexOf(conf.parentPath.concat([key]).join('/')) === -1),
                    disabled : item.disabled
                }"
            >
                <span>
                    <a
                        v-if="conf.foldable && item.children && !item.disabled"
                        href="javascript:;"
                        @click="_nodeFoldSwitch(key)"
                        class="node-switcher"
                    >
                        <span v-if="data.unfoldKeys.indexOf(key) === -1" v-html="unfoldIcon"></span>
                        <span v-else v-html="foldIcon"></span>
                    </a>
                    <a
                        v-else-if="conf.foldable && item.children && item.disabled"
                        href="javascript:;"
                        class="node-switcher"
                    >
                        <span v-if="data.unfoldKeys.indexOf(key) === -1" v-html="unfoldIcon"></span>
                        <span v-else v-html="foldIcon"></span>
                    </a>

                    <span
                        v-if="!item.children"
                        class="leafnode-icon"
                        v-html="item.icon || leafnodeIcon"
                    ></span>

                    <a
                        v-if="!item.disabled"
                        href="javascript:;"
                        @click.stop="_nodeClick(key)"
                        class="node-name"
                        :class="{
                            current : (conf.currentNode === conf.parentPath.concat([key]).join('/'))
                        }"
                    >{{item.name}}</a>
                    <a
                        v-else
                        href="javascript:;"
                        class="node-name"
                        :class="{
                            current : (conf.currentNode === conf.parentPath.concat([key]).join('/'))
                        }"
                    >{{item.name}}</a>
                </span>
                
                <morning-private-tree
                    v-if="item.children"
                    
                    :ref="'mor-tree-subtree-'+uiid+'-'+key"
                    :tree="item.children"
                    :parentPath="conf.parentPath.concat([key])"
                    :currentNode="conf.currentNode"
                    :foldable="conf.foldable"
                    :can-click="conf.canClick"
                    :can-search="conf.canSearch"
                    :search-key="conf.searchKey"
                    :custom-fold-icon="conf.customFoldIcon"
                    :custom-unfold-icon="conf.customUnfoldIcon"
                    :custom-leafnode-icon="conf.customLeafnodeIcon"
                    :fold-style="conf.foldStyle"

                    @hit-search="_syncChildHitSearch"
                    @node-emit="_nodeEmit"
                    @node-fold="_nodeFold"
                    @node-unfold="_nodeUnfold"
                ></morning-private-tree>
            </li>
        </template>
    </ul>

    </mor-private-tree>
</template>
 
<script>
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';

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
        },
        canClick : {
            type : Boolean,
            default : true
        },
        canSearch : {
            type : Boolean,
            default : false
        },
        searchKey : {
            type : String,
            default : ''
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
                parentPath : this.parentPath,
                currentNode : this.currentNode,
                foldable : this.foldable,
                canClick : this.canClick,
                canSearch : this.canSearch,
                searchKey : this.searchKey,
                customFoldIcon : this.customFoldIcon,
                customUnfoldIcon : this.customUnfoldIcon,
                customLeafnodeIcon : this.customLeafnodeIcon,
                foldStyle : this.foldStyle
            };

        },
        foldIcon : function () {

            let icon;

            if (this.conf.foldStyle === 'arrow') {

                icon = '<i class="mo-icon mo-icon-down"></i>';

            } else if (this.conf.foldStyle === 'folder') {

                icon = '<i class="mo-icon mo-icon-folder-open-o"></i>';

            } else if (this.conf.foldStyle === 'symbol') {

                icon = '<i class="mo-icon mo-icon-sub"></i>';

            }

            if (this.conf.customFoldIcon) {

                icon = this.conf.customFoldIcon;

            }

            return icon;

        },
        unfoldIcon : function () {

            let icon;

            if (this.conf.foldStyle === 'arrow') {

                icon = '<i class="mo-icon mo-icon-right"></i>';

            } else if (this.conf.foldStyle === 'folder') {

                icon = '<i class="mo-icon mo-icon-folder-close-o"></i>';

            } else if (this.conf.foldStyle === 'symbol') {

                icon = '<i class="mo-icon mo-icon-add"></i>';

            }

            if (this.conf.customUnfoldIcon) {

                icon = this.conf.customUnfoldIcon;

            }

            return icon;

        },
        leafnodeIcon : function () {

            let icon;

            if (this.conf.foldStyle === 'folder') {

                icon = '<i class="mo-icon mo-icon-file-o"></i>';

            }

            if (this.conf.customLeafnodeIcon) {

                icon = this.conf.customLeafnodeIcon;

            }

            return icon;

        }
    },
    data : function () {

        return {
            data : {
                current : null,
                unfoldKeys : [],
                childPathHitSearch : []
            }
        };

    },
    methods : {
        _nodeClick : function (key) {

            if (!this.conf.canClick) {

                return;

            }

            this.$emit(
                'node-emit',
                [key],
                [this.conf.tree[key]],
                extend(true, [], this.conf.parentPath)
            );

        },
        _nodeEmit : function (path, nodeOptions, bubble) {

            let key = bubble.pop();

            nodeOptions.unshift(this.conf.tree[key]);
            path.unshift(key);

            this.$emit('node-emit', path, nodeOptions, bubble);

        },
        _nodeFold : function (path, nodeOptions, bubble) {

            let key = bubble.pop();

            nodeOptions.unshift(this.conf.tree[key]);
            path.unshift(key);

            this.$emit('node-fold', path, nodeOptions, bubble);

        },
        _nodeUnfold : function (path, nodeOptions, bubble) {

            let key = bubble.pop();

            nodeOptions.unshift(this.conf.tree[key]);
            path.unshift(key);

            this.$emit('node-unfold', path, nodeOptions, bubble);

        },
        _nodeFoldSwitch : function (key, fold) {

            let index = this.data.unfoldKeys.indexOf(key);

            if (fold === undefined) {

                if (index === -1) {

                    this.data.unfoldKeys.push(key);
                    this.$emit(
                        'node-unfold',
                        [key],
                        [this.conf.tree[key]],
                        extend(true, [], this.conf.parentPath)
                    );

                } else {

                    this.data.unfoldKeys.splice(index, 1);
                    this.$emit(
                        'node-fold',
                        [key],
                        [this.conf.tree[key]],
                        extend(true, [], this.conf.parentPath)
                    );

                }

            } else if (fold === false && index === -1) {

                this.data.unfoldKeys.push(key);
                this.$emit(
                    'node-unfold',
                    [key],
                    [this.conf.tree[key]],
                    extend(true, [], this.conf.parentPath)
                );

            } else if (fold === true && index !== -1) {

                this.data.unfoldKeys.splice(index, 1);
                this.$emit(
                    'node-fold',
                    [key],
                    [this.conf.tree[key]],
                    extend(true, [], this.conf.parentPath)
                );

            }

        },
        _syncChildHitSearch : function (childPath, hitKey) {

            if (hitKey !== false) {

                this.data.childPathHitSearch.push(childPath);

            } else {

                let index = this.data.childPathHitSearch.indexOf(childPath);

                if (index > -1) {

                    this.data.childPathHitSearch.splice(index, 1);

                }

            }

            if (this.data.childPathHitSearch.length > 0) {

                this.$emit('hit-search', this.conf.parentPath.join('/'), true);

            } else {

                this.$emit('hit-search', this.conf.parentPath.join('/'), false);

            }

        },
        _foldNode : function (pathArr, fold) {

            let key = pathArr.shift();
            let submenu = this.$refs[`mor-tree-subtree-${this.uiid}-${key}`];

            this._nodeFoldSwitch(key, fold);

            if (pathArr.length > 0 && submenu && submenu[0]) {
                
                submenu[0]._foldNode(pathArr, fold);

            }

        },
        _foldAllNode : function (fold) {

            let item;
            let submenu;

            for (let key of Object.keys(this.conf.tree)) {

                this._nodeFoldSwitch(key, fold);
                item = this.conf.tree[key];

                if (item.children) {
    
                    submenu = this.$refs[`mor-tree-subtree-${this.uiid}-${key}`];

                    if (submenu && submenu[0]) {

                        submenu[0]._foldAllNode(fold);

                    }

                }

            }

        }
    },
    mounted : function () {

        this.$watch('conf.tree', () => {

            let tree = this.conf.tree;
            let item;
            let index;

            for (let key of Object.keys(tree)) {

                item = tree[key];

                if (typeof item === 'object' && item.unfold === true) {

                    this.data.unfoldKeys.push(key);
                    this.data.unfoldKeys = arrayUniq(this.data.unfoldKeys);
                    this.$emit(
                        'node-unfold',
                        [key],
                        [this.conf.tree[key]],
                        extend(true, [], this.conf.parentPath)
                    );

                } else if (item.unfold === false) {

                    index = this.data.unfoldKeys.indexOf(key);

                    if (index > -1) {

                        this.data.unfoldKeys.splice(index, 1);
                        this.$emit(
                            'node-fold',
                            [key],
                            [this.conf.tree[key]],
                            extend(true, [], this.conf.parentPath)
                        );

                    }

                }

            }

        }, {
            immediate : true
        });

        this.$watch('conf.searchKey', () => {

            this.data.childPathHitSearch = [];

            // use next tick, make sure parent's childPathHitSearch is clean.
            this.Vue.nextTick(() => {

                let hitKey = false;
                let item;
                let content;

                for (let key of Object.keys(this.conf.tree)) {

                    item = this.conf.tree[key];

                    if (typeof item === 'string') {

                        content = item;

                    } else {

                        content = item.name;

                    }

                    if (content.search(this.conf.searchKey) !== -1) {

                        hitKey = key;

                        break;

                    }

                }

                this.$emit('hit-search', this.conf.parentPath.join('/'), hitKey);

            });

        });

    }
};
</script>
