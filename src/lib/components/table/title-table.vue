<template>
    <table class="title-table">
        <thead v-if="conf.showColName">
            <tr>
                <template v-for="key of data.titleKeys">
                    <th v-if="colSetMap[key] && colSetMap[key].name" :key="key">{{colSetMap[key].name}}</th>
                    <th v-else :key="key"></th>
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
        'colSetMap'
    ]
};
</script>