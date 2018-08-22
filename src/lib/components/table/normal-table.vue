<template>
    <table class="normal-table table co-style">
        <thead v-if="conf.showColName">
            <tr>
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
            >
                <template v-for="(col, index) of row">
                    <td
                        v-show="!colSetMap[data.normalKeys[index]] || !colSetMap[data.normalKeys[index]].hide"
                        :key="index"
                        v-render="{template : col}"
                    ></td>
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
        'sortCol'
    ]
};
</script>
