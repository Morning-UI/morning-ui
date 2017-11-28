<template>
    <table class="title-table">
        <thead v-if="conf.showColName">
            <tr>
                <template v-for="key of data.titleKeys">
                    <th v-if="colSetMap[key] && colSetMap[key].name" :key="key">
                        {{colSetMap[key].name}}
                        <span class="sort" v-if="colSetMap[key].sort">
                            <i class="morningicon no" @click="sortCol(key)" v-if="!data.sort[key] || (data.sort[key].type !== 'asc' && data.sort[key].type !== 'desc')">&#xe651;</i>
                            <i class="morningicon asc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'asc'">&#xe672;</i>
                            <i class="morningicon desc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'desc'">&#xe671;</i>
                        </span>
                    </th>
                    <th v-else :key="key">
                        <span class="sort" v-if="colSetMap[key] && colSetMap[key].sort">
                            <i class="morningicon no" @click="sortCol(key)" v-if="!data.sort[key] || (data.sort[key].type !== 'asc' && data.sort[key].type !== 'desc')">&#xe651;</i>
                            <i class="morningicon asc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'asc'">&#xe672;</i>
                            <i class="morningicon desc" @click="sortCol(key)" v-if="data.sort[key] && data.sort[key].type === 'desc'">&#xe671;</i>
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
            >
                <template v-for="(col, index) of row">
                    <td v-render="{template : col}" :key="index"></td>
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