<template>
    <table class="normal-table table co-style">
            <thead v-if="conf.showColName">
                <tr>
                    <th
                        v-if="conf.multiSelect && data.titleKeys.length === 0"
                        class="table-checked"
                    >
                        <morning-checkbox :list="{checked:''}" :id="'mor-table-row-checked-'+uiid+'-all'" :ref="'mor-table-row-checked-'+uiid+'-all'"></morning-checkbox>
                    </th>
                    <template v-for="key of data.normalKeys">
                        <th
                            v-if="colSetMap[key] && colSetMap[key].name"
                            v-show="!colSetMap[key] || !colSetMap[key].hide"
                            :key="key"
                        >
                            {{colSetMap[key].name}}
                            <span class="th-sort" v-if="colSetMap[key].sort">
                                <i class="mo-icon mo-icon-sort no" @click="sortCol(key)" v-if="!data.sort[key] || (data.sort[key].type !== 'asc' && data.sort[key].type !== 'desc')"></i>
                                <i class="mo-icon mo-icon-arrow-up asc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'asc'"></i>
                                <i class="mo-icon mo-icon-arrow-down desc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'desc'"></i>
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
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, line) of data.normalRows"
                    :key="line"
                    @mouseover="$emit('row-mouseover', line)"
                    @mouseout="$emit('row-mouseout', line)"
                    @click="$emit('row-click', line)"
                >
                    <td
                        v-if="conf.multiSelect && data.titleKeys.length === 0"
                        class="table-checked"
                    >
                        <morning-checkbox :list="{checked:''}" :ref="'mor-table-row-checked-'+uiid+'-'+line" @value-change="_syncRowChecked(line)" :parent="'#mor-table-row-checked-'+uiid+'-all:checked'"></morning-checkbox>
                    </td>
                    <template v-for="(col, index) of row">
                        <td
                            v-show="!colSetMap[data.normalKeys[index]] || !colSetMap[data.normalKeys[index]].hide"
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
        'sortCol',
        'uiid',

    ],
    methods : {
        _syncRowChecked : function (line) {

            let val = this.$refs[`mor-table-row-checked-${this.uiid}-${line}`][0].get();

            if (val && val[0] === 'checked') {

                this.data.rowChecked[line] = true;
            
            } else {

                this.data.rowChecked[line] = false;

            }

        }
    },
    mounted : function () {

        this.$watch('data.rowChecked', newVal => {

            for (let line in newVal) {

                if (newVal[line]) {

                    this.$refs[`mor-table-row-checked-${this.uiid}-${line}`].set(['checked']);

                } else {

                    this.$refs[`mor-table-row-checked-${this.uiid}-${line}`].set(undefined);

                }

            }

        }, {
            immediate : true
        });

    }
};
</script>
