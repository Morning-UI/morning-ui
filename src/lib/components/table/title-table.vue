<template>
    <table class="title-table">
        <thead v-if="conf.showColName">
            <tr>
                <template v-for="key of data.titleKeys">
                    <th v-if="colSetMap[key] && colSetMap[key].name">{{colSetMap[key].name}}</th>
                    <th v-else></th>
                </template>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(row, line) of data.titleRows"
                @mouseover="$emit('row-mouseover', line)"
                @mouseout="$emit('row-mouseout', line)"
            >
                <template v-for="(col, index) of row">
                    <td v-if="colSetMap[data.titleKeys[index]]" v-render="{template : col}"></td>
                    <td v-else v-render="{template : col}"></td>
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