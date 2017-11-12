<template>
    <table class="title-table">
        <thead v-if="conf.showColName">
            <tr>
                <template v-for="key of data.titleKeys">
                    <th
                        v-if="conf.colSet[key] && conf.colSet[key].name"
                        :style="{
                            'width' : conf.colSet[key].width,
                            'min-width' : conf.colSet[key].minwidth,
                            'max-width' : conf.colSet[key].maxwidth,
                        }"
                        :class="{
                            'cell-align-left' : (conf.colSet[key].align === 'left'),
                            'cell-align-center' : (conf.colSet[key].align === 'center'),
                            'cell-align-right' : (conf.colSet[key].align === 'right'),
                        }"
                    >{{conf.colSet[key].name}}</th>
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
                    <td
                        v-if="conf.colSet[data.titleKeys[index]]"
                        :style="{
                            'width' : conf.colSet[data.titleKeys[index]].width,
                            'min-width' : conf.colSet[data.titleKeys[index]].minwidth,
                            'max-width' : conf.colSet[data.titleKeys[index]].maxwidth,
                        }"
                        :class="{
                            'cell-align-left' : (conf.colSet[data.titleKeys[index]].align === 'left'),
                            'cell-align-center' : (conf.colSet[data.titleKeys[index]].align === 'center'),
                            'cell-align-right' : (conf.colSet[data.titleKeys[index]].align === 'right'),
                        }"
                    >{{col}}</td>

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
        'data'
    ]
};
</script>