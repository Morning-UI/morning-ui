<template>
    <table class="normal-table">
        <thead v-if="conf.showColName">
            <tr>
                <template v-for="key of data.normalKeys">
                    <th v-if="colSetMap[key] && colSetMap[key].name">{{colSetMap[key].name}}</th>
                    <th v-else></th>
                </template>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(row, line) of data.normalRows"
                @mouseover="$emit('row-mouseover', line)"
                @mouseout="$emit('row-mouseout', line)"
            >
                <template v-for="(col, index) of row">
                    <td v-if="colSetMap[data.normalKeys[index]]">{{col}}</td>
                    <td v-else>{{col}}</td>
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