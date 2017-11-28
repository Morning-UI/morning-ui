<template>
    <mor-table
        :_uiid="uiid"
        :class="[colorClass, moreClass]"

        :list="list"
        :empty-cell-value="emptyCellValue"
        :title="title"
        :zebra-pattern="zebraPattern"
        :vertical-border="verticalBorder"
        :horizontal-border="horizontalBorder"
        :align="align"
        :show-col-name="showColName"
        :fixed-title-col="fixedTitleCol"
        :col-set="colSet"
        :row-set="rowSet"
        :cell-set="cellSet"
        :export-csv="exportCsv"
        :csv-name="csvName"
        :multi-sort="multiSort"
    >

    <template v-if="conf.title || conf.exportCsv">
        <header>
            <h1 v-if="conf.title">{{conf.title}}</h1>

            <div class="action">
                <morning-btn v-if="conf.exportCsv" color="success" size="xs" @emit="_exportCsv">导出</morning-btn>
            </div>        
        </header>
    </template>

    <table class="wrap">
        <tbody>
            <tr v-if="conf.fixedTitleCol[0] === 'r'">
                <td>
                    <normal-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :sort-col="_sortCol"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                    ></normal-table>
                </td>
                <td>
                    <title-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :sort-col="_sortCol"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                    ></title-table>
                </td>
            </tr>

            <tr v-else>
                <td>
                    <title-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :sort-col="_sortCol"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                    ></title-table>
                </td>
                <td>
                    <normal-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :sort-col="_sortCol"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                    ></normal-table>
                </td>
            </tr>
        </tbody>
    </table>

    </mor-table>
</template>
 
<script>
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';
import sortBy                       from 'lodash.sortby';
import titleTable                   from './title-table.vue';
import normalTable                  from './normal-table.vue';

export default {
    origin : 'UI',
    name : 'table',
    components : {
        'title-table' : titleTable,
        'normal-table' : normalTable
    },
    props : {
        list : {
            type : Array,
            default : (() => [])
        },
        emptyCellValue : {
            type : String,
            default : '-'
        },
        title : {
            type : String,
            default : undefined
        },
        zebraPattern : {
            type : Boolean,
            default : true
        },
        verticalBorder : {
            type : Boolean,
            default : true
        },
        horizontalBorder : {
            type : Boolean,
            default : true
        },
        align : {
            type : String,
            default : 'center',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
        },
        showColName : {
            type : Boolean,
            default : false
        },
        fixedTitleCol : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'right', 'left-fixed', 'right-fixed'].indexOf(value) !== -1)
        },
        colSet : {
            type : Array,
            default : (() => [])
        },
        rowSet : {
            type : Array,
            default : (() => [])
        },
        cellSet : {
            type : Array,
            default : (() => [])
        },
        exportCsv : {
            type : Boolean,
            default : false
        },
        csvName : {
            type : String,
            default : undefined
        },
        multiSort : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                emptyCellValue : this.emptyCellValue,
                title : this.title,
                zebraPattern : this.zebraPattern,
                verticalBorder : this.verticalBorder,
                horizontalBorder : this.horizontalBorder,
                align : this.align,
                showColName : this.showColName,
                fixedTitleCol : this.fixedTitleCol,
                colSet : this.colSet,
                rowSet : this.rowSet,
                cellSet : this.cellSet,
                exportCsv : this.exportCsv,
                csvName : this.csvName,
                multiSort : this.multiSort
            };

        },
        colSetMap : function () {

            let map = {};

            for (let col of this.conf.colSet) {

                map[col.col] = col;

            }

            return map;

        },
        moreClass : function () {

            let classes = {};

            classes[`align-${this.conf.align}`] = true;
            classes[`title-col-${this.conf.fixedTitleCol}`] = true;

            return Object.assign({
                'zebra-pattern' : this.conf.zebraPattern,
                'vertical-border' : this.conf.verticalBorder,
                'horizontal-border' : this.conf.horizontalBorder,
                'has-title-col' : (this.data.titleKeys.length > 0)
            }, classes);

        }
    },
    data : function () {

        return {
            data : {
                normalKeys : [],
                normalRows : [],
                titleKeys : [],
                titleRows : [],
                listDataJson : '[]',
                sort : {},
                sortCol : []
            }
        };

    },
    methods : {
        _refreshTable : function () {

            this._cleanupCell();
            this._fixedTitleCol();
            this._setCol();
            this._setRow();
            this._setCell();

        },
        _sortCol : function (col) {

            let type = 'desc';
            let sortColIndex;

            if (this.data.sort[col] === undefined) {

                if (this.conf.multiSort === false) {
                
                    this.data.sort = {};

                }

                this.data.sort[col] = {
                    type : 'no',
                    origin : {}
                };

            }

            if (this.data.sort[col].type === 'desc') {

                type = 'asc';

            } else if (this.data.sort[col].type === 'asc') {

                type = 'no';

            } else {

                type = 'desc';
                this.data.sort[col].origin = {
                    title : extend([], this.data.titleRows),
                    normal : extend([], this.data.normalRows)
                };

            }

            if (this.conf.multiSort) {

                sortColIndex = this.data.sortCol.indexOf(col);

                if (sortColIndex !== -1) {

                    this.data.sortCol.splice(sortColIndex, 1);
                    
                }

                this.data.sortCol.push(col);

            } else {

                this.data.sortCol = [col];

            }

            this.data.sort[col].type = type;

            this._sort();

        },
        _sort : function () {

            console.log(this.data.sortCol);

            for (let col of this.data.sortCol) {

                let sort = this.data.sort[col];
                let mainType = 'normal';
                let subType = 'title';
                let colIndex;
                let mainRows;
                let newMainRows = [];
                let newSubRows = [];

                if (sort.type === 'asc' ||
                    sort.type === 'desc') {

                    if (this.data.titleKeys.indexOf(col) !== -1) {

                        mainType = 'title';
                        subType = 'normal';

                    }

                    mainRows = extend([], this.data[`${mainType}Rows`]);
                    colIndex = this.data[`${mainType}Keys`].indexOf(col);

                    for (let index in mainRows) {

                        mainRows[index]._sub = this.data[`${subType}Rows`][index];

                    }
        
                    newMainRows = sortBy(mainRows, item => item[colIndex]);

                    if (sort.type === 'desc') {

                        newMainRows.reverse();

                    }

                    for (let row of mainRows) {

                        newSubRows.push(row._sub);

                    }

                    this.data[`${mainType}Rows`] = newMainRows;
                    this.data[`${subType}Rows`] = newSubRows;

                } else if (this.data.sortCol.length === 1) {

                    // cause if sortCol length > 1, this sort item not need to calculate
                    this.data.titleRows = sort.origin.title;
                    this.data.normalRows = sort.origin.normal;

                }

            }

        },
        _cleanupCell : function () {

            let $cells = this.$el.querySelectorAll('td, th');

            for (let $cell of $cells) {

                if ($cell) {

                    $cell.style.width = '';
                    $cell.style.minWidth = '';
                    $cell.style.maxWidth = '';
                    
                    for (let className of $cell.classList.values()) {

                        $cell.classList.remove(className);

                    }

                }

            }

        },
        _setCol : function () {

            for (let set of this.conf.colSet) {

                let colType = 'normal';
                let colIndex = this.data.normalKeys.indexOf(set.col);

                if (colIndex === -1) {

                    colType = 'title';
                    colIndex = this.data.titleKeys.indexOf(set.col);

                }
               
                let $rows = this.$el.querySelector(`.${colType}-table`);

                if ($rows) {

                    $rows = $rows.querySelectorAll('tbody tr, thead tr');

                    for (let $row of $rows) {

                        let $cell = $row.querySelectorAll('td, th')[colIndex];

                        if ($cell && set.width) {

                            $cell.style.width = set.width;

                        }

                        if ($cell && set.minwidth) {

                            $cell.style.minWidth = set.minwidth;

                        }

                        if ($cell && set.maxwidth) {

                            $cell.style.maxWidth = set.maxwidth;

                        }

                        if ($cell && set.align) {

                            $cell.classList.add(`cell-align-${set.align}`);

                        }

                        if ($cell && set.style) {
                        
                            $cell.classList.add(`cell-co-${set.style}`);

                        }

                        if ($cell && set.disabled) {
                        
                            $cell.classList.add(`cell-disabled`);

                        }

                    }

                }

            }

        },
        _fillColSet : function (colset) {

            let result = [];

            for (let item of colset) {

                result.push(extend({
                    col : undefined,
                    name : undefined,
                    width : undefined,
                    minwidth : undefined,
                    maxwidth : undefined,
                    style : undefined,
                    disabled : false,
                    align : undefined,
                    title : false,
                    export : true,
                    sort : false
                }, item));

            }

            return result;

        },
        _setRow : function () {

            for (let set of this.conf.rowSet) {

                let rowIndex = +set.row;
                let $titleRow = this.$el.querySelectorAll(`.title-table tr`);
                let $normalRow = this.$el.querySelectorAll(`.normal-table tr`);

                $titleRow = $titleRow[rowIndex];
                $normalRow = $normalRow[rowIndex];

                if ($titleRow && $normalRow) {

                    let $titleCell = $titleRow.querySelectorAll(`th, td`);
                    let $normalCell = $normalRow.querySelectorAll(`th, td`);
                    let $cells = [];

                    for (let $cell of $titleCell) {

                        $cells.push($cell);

                    }

                    for (let $cell of $normalCell) {

                        $cells.push($cell);

                    }

                    for (let $cell of $cells) {

                        if (set.style) {
                            
                            $cell.classList.add(`cell-co-${set.style}`);

                        }

                        if (set.disabled) {
                            
                            $cell.classList.add(`cell-disabled`);

                        }

                        if (set.align) {

                            $cell.classList.add(`cell-align-${set.align}`);

                        }

                    }

                }

            }

        },
        _fillRowSet : function (colset) {

            let result = [];

            for (let item of colset) {

                result.push(extend({
                    row : undefined,
                    style : undefined,
                    disabled : undefined,
                    align : undefined
                }, item));

            }

            return result;

        },
        _setCell : function () {

            for (let set of this.conf.cellSet) {

                let colType = 'normal';
                let colIndex = this.data.normalKeys.indexOf(set.col);
                let rowIndex = +set.row;

                if (colIndex === -1) {

                    colType = 'title';
                    colIndex = this.data.titleKeys.indexOf(set.col);

                }

                if (colIndex !== -1) {

                    let $cell = this.$el.querySelector(`.${colType}-table`);

                    if (rowIndex === 0) {

                        $cell = $cell.querySelectorAll('thead th');

                    } else {

                        $cell = $cell.querySelectorAll('tbody tr')[rowIndex];
                        $cell = $cell.querySelectorAll('td');

                    }

                    if ($cell.length !== 0 && $cell[colIndex] !== 0) {

                        $cell = $cell[colIndex];

                        if (set.style) {
                            
                            $cell.classList.add(`cell-co-${set.style}`);

                        }

                        if (set.disabled) {
                            
                            $cell.classList.add(`cell-disabled`);

                        }

                        if (set.align) {

                            $cell.classList.add(`cell-align-${set.align}`);

                        }

                    }

                }

            }

        },
        _fillCellSet : function (colset) {

            let result = [];

            for (let item of colset) {

                result.push(extend({
                    row : undefined,
                    col : undefined,
                    style : undefined,
                    disabled : undefined,
                    align : undefined
                }, item));

            }

            return result;

        },
        _toggleTitleCol : function () {

            let $titleTd = this.$el.querySelector('.title-table').parentElement;

            if (this.data.titleKeys.length > 0) {

                $titleTd.style.display = 'table-cell';

            } else {

                $titleTd.style.display = 'none';

            }

        },
        _syncRowHeight : function () {

            let $normalRows = this.$el.querySelectorAll('.normal-table tbody > tr');
            let $titleRows = this.$el.querySelectorAll('.title-table tbody > tr');

            for (let index in $normalRows) {

                if (typeof $titleRows[index] === 'object' &&
                    typeof $normalRows[index] === 'object') {

                    let normalHeight = $normalRows[index].clientHeight;
                    let titleHeight = $titleRows[index].clientHeight;
                    let syncHeight;

                    if (titleHeight > normalHeight) {

                        syncHeight = titleHeight;
                    
                    } else {

                        syncHeight = normalHeight;

                    }

                    $normalRows[index].style.height = `${syncHeight}px`;
                    $titleRows[index].style.height = `${syncHeight}px`;

                }

            }

        },
        _fixedTitleCol : function () {

            let $titleTable = this.$el.querySelector('.title-table');
            let $normalTable = this.$el.querySelector('.normal-table');

            $normalTable.parentElement.style.maxWidth = '';
            $titleTable.parentElement.style.maxWidth = '';
            $normalTable.parentElement.style.overflowX = '';
            $titleTable.parentElement.style.overflowX = '';
            $normalTable.parentElement.style.width = '';
            $titleTable.parentElement.style.width = '';
            $normalTable.parentElement.style.position = '';
            $titleTable.parentElement.style.position = '';
            $normalTable.parentElement.style.left = '';
            $titleTable.parentElement.style.left = '';
            $normalTable.parentElement.style.right = '';
            $titleTable.parentElement.style.right = '';
            $normalTable.style.borderLeft = '';
            $titleTable.style.borderLeft = '';
            $normalTable.style.borderRight = '';
            $titleTable.style.borderRight = '';

            if (!/fixed/.test(this.conf.fixedTitleCol)) {

                return;

            }
            let titleColWidth = $titleTable.clientWidth;
            let elWidth = this.$el.clientWidth;

            $normalTable.parentElement.style.maxWidth = `${elWidth - titleColWidth}px`;
            $normalTable.parentElement.style.overflowX = 'auto';
            
            $titleTable.parentElement.style.width = `${titleColWidth}px`;
            $titleTable.parentElement.style.position = 'absolute';

            if (this.conf.fixedTitleCol === 'left-fixed') {

                $normalTable.style.borderLeft = `${titleColWidth}px rgba(0,0,0,0) solid`;
                $titleTable.parentElement.style.left = 0;

            } else {

                $normalTable.style.borderRight = `${titleColWidth}px rgba(0,0,0,0) solid`;
                $titleTable.parentElement.style.right = 0;

            }

        },
        _rowOver : function (line) {

            let $titleTr = this.$el.querySelectorAll('.title-table tbody tr')[line];
            let $normalTr = this.$el.querySelectorAll('.normal-table tbody tr')[line];

            $titleTr.classList.add('hover');
            $normalTr.classList.add('hover');

        },
        _rowOut : function (line) {

            let $titleTr = this.$el.querySelectorAll('.title-table tbody tr')[line];
            let $normalTr = this.$el.querySelectorAll('.normal-table tbody tr')[line];

            $titleTr.classList.remove('hover');
            $normalTr.classList.remove('hover');

        },
        _exportRows : function (csv, type) {

            let ignoreColIndex = [];

            if (csv[0] === undefined) {

                csv[0] = [];

            }

            if (this.conf.showColName) {

                for (let key of this.data[`${type}Keys`]) {

                    let set = this.colSetMap[key];

                    if (set.export !== false) {

                        if (set &&
                            set.name) {

                            csv[0].push(set.name);

                        } else {

                            csv[0].push('');

                        }

                    }

                }

            }

            for (let index in this.data[`${type}Keys`]) {

                let key = this.data[`${type}Keys`][index];
                let set = this.colSetMap[key];

                if (set && set.export === false) {

                    ignoreColIndex.push(index);

                }

            }

            for (let index in this.data[`${type}Rows`]) {

                let csvIndex = Number(index) + 1;
                let originRow = extend([], this.data[`${type}Rows`][index]);
                let row = [];

                for (let col in originRow) {

                    if (ignoreColIndex.indexOf(col) === -1) {

                        row.push(originRow[col]);
                    
                    }

                }

                if (csv[csvIndex] === undefined) {

                    csv[csvIndex] = [];

                }

                csv[csvIndex] = csv[csvIndex].concat(row);

            }

            return csv;
            
        },
        _exportCsv : function () {

            let csv = [];
            let downloadLink = document.createElement('a');
            let blob;

            if (this.conf.fixedTitleCol[0] === 'r') {

                this._exportRows(csv, 'normal');
                this._exportRows(csv, 'title');

            } else {

                this._exportRows(csv, 'title');
                this._exportRows(csv, 'normal');

            }

            if (csv[0].length === 0) {

                csv.shift();

            }

            for (let index in csv) {

                csv[index] = csv[index].join(',');

            }

            csv = csv.join('\n');

            blob = new Blob([csv]);
            
            downloadLink.style.display = 'none';
            downloadLink.href = URL.createObjectURL(blob);

            if (this.conf.csvName !== undefined) {
    
                downloadLink.download = `${this.conf.csvName}.csv`;

            } else {
                
                downloadLink.download = `${+new Date()}.csv`;

            }

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

        },
        _importList : function (list) {

            let titleRows = [];
            let normalRows = [];
            let titleKeys = [];
            let normalKeys = [];

            list = extend(true, [], list);

            for (let item of list) {

                for (let key of Object.keys(item)) {

                    let set = this.colSetMap[key];

                    if (set &&
                        set.title === true) {

                        titleKeys.push(key);

                    } else {

                        normalKeys.push(key);

                    }

                }

            }

            titleKeys = arrayUniq(titleKeys);
            normalKeys = arrayUniq(normalKeys);

            for (let item of list) {

                let titleCol = [];
                let normalCol = [];

                for (let key of titleKeys) {

                    titleCol.push(item[key] || this.conf.emptyCellValue);

                }

                for (let key of normalKeys) {

                    normalCol.push(item[key] || this.conf.emptyCellValue);

                }

                titleRows.push(titleCol);
                normalRows.push(normalCol);

            }

            this.data.titleKeys = titleKeys;
            this.data.normalKeys = normalKeys;
            this.data.titleRows = titleRows;
            this.data.normalRows = normalRows;
            this.data.listDataJson = JSON.stringify(list);

        }
    },
    mounted : function () {

        this.$watch('conf.list', () => {

            this._importList(this.conf.list);

        }, {
            immediate : true,
            deep : true
        });

        this.$watch('conf.emptyCellValue', () => {

            this._importList(this.conf.list);

        });

        this.Vue.nextTick(() => {

            this.$watch('data.normalRows', () => {

                this.Vue.nextTick(() => {

                    this._syncRowHeight();

                });

            }, {
                immediate : true,
                deep : true
            });

            this.$watch('data.titleRows', () => {

                this.Vue.nextTick(() => {

                    this._syncRowHeight();

                });

            }, {
                immediate : true,
                deep : true
            });

            this.$watch('data.titleKeys', this._toggleTitleCol, {
                immediate : true,
                deep : true
            });

            this.$watch(() => (`${JSON.stringify(this.conf.colSet)}||${JSON.stringify(this.conf.rowSet)}||${JSON.stringify(this.conf.cellSet)}`), () => {

                let fillColSet = this._fillColSet(this.conf.colSet);

                if (JSON.stringify(this.conf.colSet) !== JSON.stringify(fillColSet)) {

                    this.conf.colSet = fillColSet;

                    return;

                }

                let fillRowSet = this._fillRowSet(this.conf.rowSet);

                if (JSON.stringify(this.conf.rowSet) !== JSON.stringify(fillRowSet)) {

                    this.conf.rowSet = fillRowSet;

                    return;

                }

                let fillCellSet = this._fillCellSet(this.conf.cellSet);

                if (JSON.stringify(this.conf.cellSet) !== JSON.stringify(fillCellSet)) {

                    this.conf.cellSet = fillCellSet;

                    return;

                }

                this._importList(this.conf.list);

                this.Vue.nextTick(() => {
                    
                    this._refreshTable();

                });

            }, {
                deep : true,
                immediate : true
            });

            this.$watch('data.listDataJson', () => {

                this.$emit('list-change');

            });

        });

    },
    updated : function () {

        this.Vue.nextTick(() => {

            this._refreshTable();

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
