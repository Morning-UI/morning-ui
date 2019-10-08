<template>
    <table class="title-table table co-style" is-title-table>
        <thead v-if="conf.showColName">
            <tr>
                <th
                    v-if="conf.multiSelect && data.titleKeys.length > 0"
                    class="table-checked"
                >
                    <morning-checkbox
                        :list="{checked:''}"
                        :id="'mor-table-row-checked-'+uiid+'-all'"
                        :ref="'mor-table-row-checked-'+uiid+'-all'"
                        :disabledOptions="(rowSetMap[0] && rowSetMap[0].disableSelection) ? ['checked'] : undefined"
                    ></morning-checkbox>
                </th>
                <template v-for="key of data.titleKeys">
                    <th
                        v-if="colSetMap[key] && colSetMap[key].name"
                        v-show="!colSetMap[key] || !colSetMap[key].hide"
                        :key="key"
                    >
                        <component
                            :is="{
                                template : ('<span>' + colSetMap[key].name + '</span>'),
                                data : function () {
                                    return {
                                        context : this.$parent.$parent.$vnode.context
                                    };
                                }
                            }"
                        ></component>
                        <span class="th-sort" v-if="colSetMap[key].sort">
                            <i class="mo-icon mo-icon-sort no" @click="sortCol(key)" v-if="!data.sort[key] || (data.sort[key].type !== 'asc' && data.sort[key].type !== 'desc')"></i>
                            <i class="mo-icon mo-icon-arrow-up asc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'asc'"></i>
                            <i class="mo-icon mo-icon-arrow-down desc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'desc'"></i>
                        </span>
                        <span class="th-filters" v-if="colSetMap[key].filters instanceof Array && colSetMap[key].filters.length > 0">
                            <i class="mo-icon mo-icon-filter-f" :id="'mor-table-filter-'+uiid+'-'+key"></i>
                            <ui-popover :target="'#mor-table-filter-'+uiid+'-'+key" class="mo-table-col-filter" trigger="click" placement="bottom">
                                <ui-checkbox
                                    :ref="'mor-table-filter-'+uiid+'-'+key"
                                    :list="colSetMap[key].filters.reduce((map, { name, matcher }) => ({ ...map, [((matcher instanceof RegExp) ? `RegExp|${matcher.source}|${matcher.flags}` : matcher)]: name }), {})"

                                    @value-change="updateColFilter(key, arguments[0])"
                                ></ui-checkbox>
                                <div class="filter-operate">
                                    <morning-btn size="xs" @emit="filterCol">确认</morning-btn>
                                    <morning-link color="minor" @emit="_cleanFilter(key)">重置</morning-link>
                                </div>
                            </ui-popover>
                        </span>
                    </th>
                    <th
                        v-else
                        v-show="!colSetMap[key] || !colSetMap[key].hide"
                        :key="key"
                    >
                        <span class="th-sort" v-if="colSetMap[key] && colSetMap[key].sort">
                            <i class="mo-icon mo-icon-sort no" @click="sortCol(key)" v-if="!data.sort[key] || (data.sort[key].type !== 'asc' && data.sort[key].type !== 'desc')"></i>
                            <i class="mo-icon mo-icon-arrow-up asc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'asc'"></i>
                            <i class="mo-icon mo-icon-arrow-down desc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'desc'"></i>
                        </span>
                        <span class="th-filters" v-if="colSetMap[key].filters instanceof Array && colSetMap[key].filters.length > 0">
                            <i class="mo-icon mo-icon-filter-f" :id="'mor-table-filter-'+uiid+'-'+key"></i>
                            <ui-popover :target="'#mor-table-filter-'+uiid+'-'+key" class="mo-table-col-filter" trigger="click" placement="bottom">
                                <ui-checkbox
                                    :ref="'mor-table-filter-'+uiid+'-'+key"
                                    :list="colSetMap[key].filters.reduce((map, { name, matcher }) => ({ ...map, [((matcher instanceof RegExp) ? `RegExp|${matcher.source}|${matcher.flags}` : matcher)]: name }), {})"

                                    @value-change="updateColFilter(key, arguments[0])"
                                ></ui-checkbox>
                                <div class="filter-operate">
                                    <morning-btn size="xs" @emit="filterCol">确认</morning-btn>
                                    <morning-link color="minor" @emit="_cleanFilter(key)">重置</morning-link>
                                </div>
                            </ui-popover>
                        </span>
                    </th>
                </template>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(row, line) of data.titleRows"
                :key="line"
                @mouseover="$emit('row-mouseover', line)"
                @mouseout="$emit('row-mouseout', line)"
                @click="$emit('row-click', line)"
            >
                <td
                    v-if="conf.multiSelect && data.titleKeys.length > 0"
                    v-show="(row._matchFilter === true || row._matchFilter === undefined)"
                    class="table-checked"
                >
                    <morning-checkbox
                        :list="{checked:''}"
                        :ref="'mor-table-row-checked-'+uiid+'-'+line"
                        @value-change="_syncRowChecked(line)"
                        :parent="'#mor-table-row-checked-'+uiid+'-all:checked'"
                        :disabledOptions="(rowSetMap[line + 1] && rowSetMap[line + 1].disableSelection) ? ['checked'] : undefined"
                    ></morning-checkbox>
                </td>
                <template v-for="(col, index) of row">
                    <td
                        v-show="(!colSetMap[data.titleKeys[index]] || !colSetMap[data.titleKeys[index]].hide) && (row._matchFilter === true || row._matchFilter === undefined)"
                        :key="index"
                    
                        @click="$emit('cell-click', line, data.normalKeys[index])"
                        @mouseenter="$emit('cell-enter', line, data.normalKeys[index])"
                        @mouseleave="$emit('cell-leave', line, data.normalKeys[index])"
                    >
                        <keep-alive>
                        <component
                            :is="{
                                template : ('<div>' + col + '</div>'),
                                data : function () {
                                    return {
                                        context : this.$parent.$parent.$vnode.context
                                    };
                                }
                            }"
                        ></component>
                        </keep-alive>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props : [
        'conf',
        'data',
        'colSetMap',
        'rowSetMap',
        'sortCol',
        'updateColFilter',
        'filterCol',
        'uiid'
    ],
    methods : {
        _syncRowChecked : function (line) {

            let val = this.$refs[`mor-table-row-checked-${this.uiid}-${line}`][0].get();

            if (val && val[0] === 'checked') {

                this.data.rowChecked[line] = true;
            
            } else {

                this.data.rowChecked[line] = false;

            }

            if (!this.data.rowCheckedChangeLock) {

                this.data.rowCheckedChangeCount++;

            }

        },
        _cleanFilter : function (key) {

            this.$refs[`mor-table-filter-${this.uiid}-${key}`][0].set(undefined);

        }
    },
    mounted : function () {

        this.$watch('data.rowChecked', newVal => {

            let $line;

            for (let line in newVal) {

                if (this.$refs[`mor-table-row-checked-${this.uiid}-${line}`]) {

                    if (this.$refs[`mor-table-row-checked-${this.uiid}-${line}`] instanceof Array) {

                        $line = this.$refs[`mor-table-row-checked-${this.uiid}-${line}`][0];

                    } else {

                        $line = this.$refs[`mor-table-row-checked-${this.uiid}-${line}`];

                    }

                }

                if ($line && newVal[line]) {

                    $line.set(['checked']);

                } else if ($line) {

                    $line.set(undefined);

                }

            }

        }, {
            immediate : true
        });

    }
};
</script>
