<template>
    <table class="normal-table">
        <thead v-if="conf.showColName">
            <tr>
                <template v-for="key of data.normalKeys">
                    <th v-if="colSetMap[key] && colSetMap[key].name" :key="key">{{colSetMap[key].name}}</th>
                    <th v-else :key="key"></th>
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
                    <td v-if="colSetMap[data.normalKeys[index]]" :key="index" v-render="{template : col}"></td>
                    <td v-else :key="index" v-render="{template : col}"></td>
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
        'colSetMap'
    ]
};
</script>