<template>
    <mor-table
        :_uiid="uiid"
        :class="[sizeClass, colorClass, moreClass]"

        :list="list"
        :empty-cell-value="emptyCellValue"
        :title="title"
        :zebra-pattern="zebraPattern"
        :vertical-border="verticalBorder"
        :horizontal-border="horizontalBorder"
        :align="align"
        :show-col-name="showColName"
        :fixed-title-col="fixedTitleCol"
        :fixed-title-row="fixedTitleRow"
        :title-col-width="titleColWidth"
        :col-set="colSet"
        :row-set="rowSet"
        :cell-set="cellSet"
        :export-csv="exportCsv"
        :csv-name="csvName"
        :custom-sort="customSort"
        :multi-sort="multiSort"
        :highlight-row="highlightRow"
        :highlight-row-background="highlightRowBackground"
        :highlight-row-color="highlightRowColor"
        :multi-select="multiSelect"
        :hover-effect="hoverEffect"
        :loading="loading"
        :loading-note="loadingNote"

        @scroll="_tableScroll"
    >

    <template v-if="conf.title || conf.exportCsv || $slots.header">
        <header>
            <h1 v-if="conf.title">{{conf.title}}</h1>

            <div class="custom-header">
                <slot name="header"></slot>
                <div class="action">
                    <morning-btn v-if="conf.exportCsv" color="success" :size="conf.size" @emit="exportToCsv">导出</morning-btn>
                </div>
            </div>

        </header>
    </template>

    <table class="wrap co-style">
        <tbody>
            <tr v-if="conf.fixedTitleCol[0] === 'r'">
                <td>
                    <normal-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :row-set-map="rowSetMap"
                        :sort-col="_sortCol"
                        :update-col-filter="_updateColFilter"
                        :filter-col="_filterCol"
                        :uiid="uiid"
                        :vm="this"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                        @row-click="_rowClick"
                        @cell-click="_cellClick"
                        @cell-enter="_cellEnter"
                        @cell-leave="_cellLeave"
                        @expand-row="_expandRow"
                    ></normal-table>
                </td>
                <td class="title-td">
                    <title-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :row-set-map="rowSetMap"
                        :sort-col="_sortCol"
                        :update-col-filter="_updateColFilter"
                        :filter-col="_filterCol"
                        :uiid="uiid"
                        :vm="this"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                        @row-click="_rowClick"
                        @cell-click="_cellClick"
                        @cell-enter="_cellEnter"
                        @cell-leave="_cellLeave"
                    ></title-table>
                </td>
            </tr>

            <tr v-else>
                <td class="title-td">
                    <title-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :row-set-map="rowSetMap"
                        :sort-col="_sortCol"
                        :update-col-filter="_updateColFilter"
                        :filter-col="_filterCol"
                        :uiid="uiid"
                        :vm="this"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                        @row-click="_rowClick"
                        @cell-click="_cellClick"
                        @cell-enter="_cellEnter"
                        @cell-leave="_cellLeave"
                    ></title-table>
                </td>
                <td>
                    <normal-table
                        :conf="conf"
                        :data="data"
                        :col-set-map="colSetMap"
                        :row-set-map="rowSetMap"
                        :sort-col="_sortCol"
                        :update-col-filter="_updateColFilter"
                        :filter-col="_filterCol"
                        :uiid="uiid"
                        :vm="this"
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                        @row-click="_rowClick"
                        @cell-click="_cellClick"
                        @cell-enter="_cellEnter"
                        @cell-leave="_cellLeave"
                        @expand-row="_expandRow"
                    ></normal-table>
                </td>
            </tr>

            <tr v-if="(data.normalRows.length === 0 && data.titleRows.length === 0) || data.filterColIsEmpty">
                <td class="no-data" colspan="2" v-if="data.titleKeys.length > 0">
                    <morning-empty></morning-empty>
                </td>
                <td class="no-data" v-else>
                    <morning-empty></morning-empty>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="load-mask" v-if="conf.loading">
        <morning-load :done-time="false" size="xl" :note="conf.loadingNote"></morning-load>
    </div>

    </mor-table>
</template>
 
<script>
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';
import sortBy                       from 'lodash.sortby';
import map                          from 'lodash.map';
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
        fixedTitleRow : {
            type : Boolean,
            default : false
        },
        titleColWidth : {
            type : Number,
            default : 0
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
        customSort : {
            type : Boolean,
            default : false
        },
        multiSort : {
            type : Boolean,
            default : false
        },
        highlightRow : {
            type : Boolean,
            default : false
        },
        highlightRowBackground : {
            type : String,
            default : 'default'
        },
        highlightRowColor : {
            type : String,
            default : 'default'
        },
        multiSelect : {
            type : Boolean,
            default : false
        },
        hoverEffect : {
            type : Boolean,
            default : true
        },
        loading : {
            type : Boolean,
            default : false
        },
        loadingNote : {
            type : String,
            default : '数据加载中...'
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
                fixedTitleRow : this.fixedTitleRow,
                titleColWidth : this.titleColWidth,
                colSet : this.colSet,
                rowSet : this.rowSet,
                cellSet : this.cellSet,
                exportCsv : this.exportCsv,
                csvName : this.csvName,
                customSort : this.customSort,
                multiSort : this.multiSort,
                highlightRow : this.highlightRow,
                highlightRowBackground : this.highlightRowBackground,
                highlightRowColor : this.highlightRowColor,
                multiSelect : this.multiSelect,
                hoverEffect : this.hoverEffect,
                loading : this.loading,
                loadingNote : this.loadingNote
            };

        },
        colSetMap : function () {

            let setmap = {};

            for (let col of this.conf.colSet) {

                setmap[col.col] = col;

            }

            return setmap;

        },
        rowSetMap : function () {

            let setmap = {};

            for (let row of this.conf.rowSet) {

                setmap[row.row] = row;

            }

            return setmap;

        },
        moreClass : function () {

            let classes = {};

            classes[`align-${this.conf.align}`] = true;
            classes[`title-col-${this.conf.fixedTitleCol}`] = true;

            return Object.assign({
                'ts-zp' : this.conf.zebraPattern,
                'vertical-border' : this.conf.verticalBorder,
                'horizontal-border' : this.conf.horizontalBorder,
                'has-title-col' : (this.data.titleKeys.length > 0),
                'no-hover-effect' : !this.conf.hoverEffect
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
                rowExpand : [],
                rowExpandOpen : [],
                hasRowExpand : false,
                listDataJson : '[]',
                sort : {},
                sortCol : [],
                rowChecked : {},
                rowCheckedChangeCount : 0,
                rowCheckedChangeLock : false,
                initedSetCol : false,
                colFilters : {},
                filterColIsEmpty : false
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
            this._initSetCol();

        },
        _sortCol : function (col) {

            let type = 'desc';
            let sortColIndex;
            let colSetMap = this.colSetMap[col];

            if (this.data.sort[col] === undefined) {

                if (this.conf.multiSort === false) {
                
                    this.data.sort = {};

                }

                if (
                    (colSetMap.sortmode === 'desc asc' || colSetMap.sortmode === 'asc desc') &&
                    this.conf.multiSort
                ) {

                    this.Vue.set(this.data.sort, col, {
                        type : 'no',
                        origin : {}
                    });

                    // 这里用反向的，因为后续逻辑会做一次切换
                    if (colSetMap.sortmode === 'desc asc') {

                        this.data.sort[col].type = 'asc';

                    } else if (colSetMap.sortmode === 'asc desc') {

                        this.data.sort[col].type = 'desc';

                    }

                } else {

                    this.Vue.set(this.data.sort, col, {
                        type : 'no',
                        origin : {}
                    });

                }

            }

            if (
                (colSetMap.sortmode === 'desc asc' || colSetMap.sortmode === 'asc desc') &&
                this.conf.multiSort
            ) {
                
                if (this.data.sort[col].type === 'desc') {

                    type = 'asc';

                } else {

                    type = 'desc';
                    this.data.sort[col].origin = {
                        title : extend([], this.data.titleRows),
                        normal : extend([], this.data.normalRows)
                    };

                }

            } else if (
                (colSetMap.sortmode === 'no asc' || colSetMap.sortmode === 'no desc') &&
                this.conf.multiSort
            ) {

                if (this.data.sort[col].type === 'no') {

                    if (colSetMap.sortmode === 'no asc') {
                        
                        type = 'asc';

                    } else {
                        
                        type = 'desc';

                    }

                    this.data.sort[col].origin = {
                        title : extend([], this.data.titleRows),
                        normal : extend([], this.data.normalRows)
                    };

                } else {

                    type = 'no';

                }

            } else if (this.data.sort[col].type === 'desc') {

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

            if (!this.conf.customSort) {

                this._sort();

            }
    
            this.$emit('col-sort', col, this.data.sort[col].type);

        },
        _sort : function () {

            let nosortCols = 0;
            let lastCol;

            for (let col of this.data.sortCol) {

                let sort = this.data.sort[col];
                let mainType = 'normal';
                let subType = 'title';
                let colIndex;
                let mainRows;
                let newMainRows = [];
                let newSubRows = [];

                lastCol = col;

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

                    newMainRows = sortBy(mainRows, item => {
                    
                        let val = item[colIndex];
                    
                        // 处理HTML标签
                        if (/<[a-zA-Z-]+>/.test(val)) {
                    
                            let divEle = document.createElement('div');
                    
                            divEle.innerHTML = val;
                            val = divEle.innerText;
                    
                        }
                    
                        // 处理百分比的情况
                        if (/^[\d.]+%$/.test(val)) {
                    
                            val = +val.replace(/%$/, '');
                    
                        }
                    
                        // 尝试转换成数字
                        if (!isNaN(+val)) {
                    
                            val = Number(val);
                    
                        }
                    
                        return val;
                    
                    });

                    if (sort.type === 'desc') {

                        newMainRows.reverse();

                    }

                    for (let row of newMainRows) {

                        newSubRows.push(row._sub);

                    }

                    this.data[`${mainType}Rows`] = newMainRows;
                    this.data[`${subType}Rows`] = newSubRows;

                } else if (this.data.sortCol.length === 1) {

                    // cause if sortCol length > 1, this sort item not need to calculate
                    this.data.titleRows = sort.origin.title;
                    this.data.normalRows = sort.origin.normal;

                } else {

                    nosortCols++;

                }

            }

            if (nosortCols === this.data.sortCol.length) {
                    
                this.data.titleRows = this.data.sort[lastCol].origin.title;
                this.data.normalRows = this.data.sort[lastCol].origin.normal;

            }

        },
        _filter : function () {

            let firstFilter = true;

            for (let line in this.data.normalRows) {

                this.data.normalRows[line]._matchFilter = null;
                this.data.titleRows[line]._matchFilter = null;

            }

            for (let col in this.data.colFilters) {

                let filters = this.data.colFilters[col];
                let mainType = 'normal';
                let subType = 'title';
                let mainRows;
                let subRows;
                let colIndex;
                let matchFilter = {};

                if (this.data.titleKeys.indexOf(col) !== -1) {

                    mainType = 'title';
                    subType = 'normal';

                }

                mainRows = this.data[`${mainType}Rows`];
                subRows = this.data[`${subType}Rows`];
                colIndex = this.data[`${mainType}Keys`].indexOf(col);

                for (let filter of filters) {

                    for (let line in mainRows) {
                        
                        let val = mainRows[line][colIndex];

                        if (
                            (
                                typeof filter === 'string' &&
                                val.indexOf(filter) !== -1
                            ) || (
                                filter instanceof RegExp &&
                                filter.test(val)
                            )
                        ) {

                            matchFilter[line] = true;

                        }

                    }

                }

                if (filters.length === 0) {

                    for (let line in mainRows) {

                        matchFilter[line] = true;

                    }

                }

                for (let line in mainRows) {

                    if (firstFilter) {

                        mainRows[line]._matchFilter = (matchFilter[line] || false);
                        subRows[line]._matchFilter = (matchFilter[line] || false);

                    } else {

                        mainRows[line]._matchFilter = Boolean(mainRows[line]._matchFilter && matchFilter[line]);
                        subRows[line]._matchFilter = Boolean(subRows[line]._matchFilter && matchFilter[line]);

                    }

                }

                firstFilter = false;

                // this.data[`${mainType}Rows`] = newMainRows;
                // this.data[`${subType}Rows`] = newSubRows;

            }

            if (map(this.data.normalRows, '_matchFilter').indexOf(true) === -1) {

                this.data.filterColIsEmpty = true;

            } else {

                this.data.filterColIsEmpty = false;

            }

            this._forceUpdateTable();

        },
        _forceUpdateTable : function () {

            for (let $childTable of this.$children) {

                if ($childTable.$el.getAttribute('is-title-table') !== null ||
                    $childTable.$el.getAttribute('is-normal-table') !== null) {

                    $childTable.$forceUpdate();

                }

            }

            this.$forceUpdate();

        },
        _cleanupCell : function () {

            let $cells = this.$el.querySelectorAll('td:not(.no-data), th');

            for (let $cell of $cells) {

                if ($cell) {

                    $cell.style.width = '';
                    $cell.style.minWidth = '';
                    $cell.style.maxWidth = '';
                    
                    for (let className of $cell.classList.values()) {

                        if (/^(cell-align-|cco-|cell-disabled)/.test(className)) {
    
                            $cell.classList.remove(className);

                        }

                    }

                }

            }

        },
        _initSetCol : function () {

            if (this.data.initedSetCol) {

                return;

            }

            this.data.initedSetCol = true;

            this.Vue.nextTick(() => {

                for (let set of this.conf.colSet) {

                    if (set.sortmode !== 'normal') {

                        this._sortCol(set.col);

                    }

                }

            });

        },
        _setCol : function () {

            for (let set of this.conf.colSet) {

                let colType = 'normal';
                let colIndex = this.data.normalKeys.indexOf(set.col);

                if (colIndex === -1) {

                    colType = 'title';
                    colIndex = this.data.titleKeys.indexOf(set.col);

                }

                if (this.conf.multiSelect) {

                    colIndex++;

                }
               
                let $rows = this.$el.querySelector(`.${colType}-table`);

                if ($rows) {

                    $rows = $rows.querySelectorAll('tbody tr:not(.expand-row), thead tr');

                    for (let $row of $rows) {

                        let $cell = $row.querySelectorAll('td.content-td, th.content-th')[colIndex];

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
                        
                            $cell.classList.add(`cco-${this._getColorShortName(set.style)}`);

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
                    hide : false,
                    export : true,
                    sort : false,
                    sortmode : 'normal',
                    filters : [],
                    pos : 0
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
                            
                            $cell.classList.add(`cco-${this._getColorShortName(set.style)}`);

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

                if (this.conf.multiSelect) {

                    colIndex++;

                }

                if (colIndex !== -1) {

                    let $cell = this.$el.querySelector(`.${colType}-table`);

                    if (rowIndex === 0) {

                        $cell = $cell.querySelectorAll('thead th');

                    } else {

                        $cell = $cell.querySelectorAll('tbody tr:not(.expand-row)')[rowIndex];
                        $cell = $cell.querySelectorAll('td.content-td');

                    }

                    if ($cell.length !== 0 && $cell[colIndex] !== 0) {

                        $cell = $cell[colIndex];

                        if (set.style) {
                            
                            $cell.classList.add(`cco-${this._getColorShortName(set.style)}`);

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

            if (this.data.titleKeys.length === 0) {

                return;

            }

            let $normalRows = this.$el.querySelectorAll('.normal-table tbody > tr:not(.expand-row)');
            let $titleRows = this.$el.querySelectorAll('.title-table tbody > tr:not(.expand-row)');

            for (let index in $normalRows) {

                if (typeof $titleRows[index] === 'object' &&
                    typeof $normalRows[index] === 'object') {

                    // reset row height, then get row real height
                    $normalRows[index].style.height = 'auto';
                    $titleRows[index].style.height = 'auto';

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
            let $wrapTable = this.$el.querySelector('.wrap');

            $normalTable.parentElement.style.maxWidth = '';
            $titleTable.parentElement.style.maxWidth = '';
            // $normalTable.parentElement.style.overflowX = '';
            // $titleTable.parentElement.style.overflowX = '';
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
            $wrapTable.style.width = '';
            
            let titleColWidth = $titleTable.clientWidth;
            let elWidth = this.$el.clientWidth;

            if (/fixed/.test(this.conf.fixedTitleCol)) {

                $normalTable.parentElement.style.maxWidth = `${elWidth - titleColWidth}px`;
                // $normalTable.parentElement.style.overflowX = 'auto';
                
                $titleTable.parentElement.style.width = `${titleColWidth}px`;
                $titleTable.parentElement.style.position = 'absolute';

                if (this.conf.fixedTitleCol === 'left-fixed') {

                    $normalTable.style.borderLeft = `${titleColWidth}px rgba(0,0,0,0) solid`;
                    $titleTable.parentElement.style.left = 0;

                } else {

                    $normalTable.style.borderRight = `${titleColWidth}px rgba(0,0,0,0) solid`;
                    $titleTable.parentElement.style.right = 0;

                }

                this.Vue.nextTick(() => {

                    $wrapTable.style.width = `${$normalTable.offsetWidth}px`;

                });

            }

            if (this.conf.titleColWidth) {

                $titleTable.parentElement.style.width = `${this.conf.titleColWidth}px`;
                $normalTable.parentElement.style.maxWidth = `${elWidth - this.conf.titleColWidth}px`;
                $titleTable.style.tableLayout = 'fixed';
                $titleTable.style.width = `${this.conf.titleColWidth}px`;

                if (this.conf.fixedTitleCol === 'left-fixed') {

                    $normalTable.style.borderLeft = `${this.conf.titleColWidth}px rgba(0,0,0,0) solid`;

                } else if (this.conf.fixedTitleCol === 'right-fixed') {

                    $normalTable.style.borderRight = `${this.conf.titleColWidth}px rgba(0,0,0,0) solid`;

                }

            } else {

                $titleTable.style.tableLayout = 'auto';
                $titleTable.style.width = 'auto';

            }

        },
        _rowOver : function (line) {

            let $titleTr = this.$el.querySelectorAll('.title-table tbody tr:not(.expand-row)')[line];
            let $normalTr = this.$el.querySelectorAll('.normal-table tbody tr:not(.expand-row)')[line];

            $titleTr.classList.add('hover');
            $normalTr.classList.add('hover');

        },
        _rowOut : function (line) {

            let $titleTr = this.$el.querySelectorAll('.title-table tbody tr:not(.expand-row)')[line];
            let $normalTr = this.$el.querySelectorAll('.normal-table tbody tr:not(.expand-row)')[line];

            $titleTr.classList.remove('hover');
            $normalTr.classList.remove('hover');

        },
        _rowClick : function (line) {

            this.setHighlightRow(line);

        },
        _csvEncode : function (str) {

            str = String(str);

            if (/(<|>)/.test(str)) {
                
                let div = document.createElement('div');

                div.innerHTML = str;
                str = div.innerText;

            }

            return `"${str.replace(/\n/g, '\r').replace(/"/g, '""')}"`;

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

                            csv[0].push(this._csvEncode(set.name));

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

                if (this.data[`${type}Rows`][index]._matchFilter === true || this.data[`${type}Rows`][index]._matchFilter === undefined) {

                    let csvIndex = Number(index) + 1;
                    let originRow = extend([], this.data[`${type}Rows`][index]);
                    let row = [];
                    
                    for (let col in originRow) {

                        if (col !== '_matchFilter' &&
                            ignoreColIndex.indexOf(col) === -1) {

                            row.push(this._csvEncode(originRow[col]));

                        }

                    }

                    if (csv[csvIndex] === undefined) {

                        csv[csvIndex] = [];

                    }

                    csv[csvIndex] = csv[csvIndex].concat(row);

                }

            }

            return csv;
            
        },
        exportToCsv : function () {

            let csv = [];
            let downloadLink = document.createElement('a');
            let blob;
            let bomBlob = new Buffer('\xEF\xBB\xBF', 'binary');

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

            blob = new Blob([bomBlob, csv]);

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

            return this;

        },
        _importList : function (list) {

            let titleRows = [];
            let normalRows = [];
            let titleKeys = [];
            let normalKeys = [];
            let rowExpand = [];
            let rowExpandOpen = [];

            list = extend(true, [], list);

            // if list is empty, and has conf.colSet, use colSet generate keys.
            if (list.length === 0) {

                for (let key in this.colSetMap) {

                    let set = this.colSetMap[key];

                    if (set.title === true) {

                        titleKeys.push({
                            key,
                            pos : set.pos
                        });

                    } else if (set) {

                        normalKeys.push({
                            key,
                            pos : set.pos
                        });

                    } else {

                        normalKeys.push({
                            key,
                            pos : 0
                        });

                    }

                }

            } else {

                for (let item of list) {

                    for (let key of Object.keys(item)) {

                        // __expand is special key
                        if (key !== '__expand') {

                            let set = this.colSetMap[key];

                            if (set &&
                                set.title === true) {

                                titleKeys.push({
                                    key,
                                    pos : set.pos
                                });

                            } else if (set) {

                                normalKeys.push({
                                    key,
                                    pos : set.pos
                                });

                            } else {

                                normalKeys.push({
                                    key,
                                    pos : 0
                                });

                            }

                        }

                    }

                }

            }

            titleKeys = sortBy(titleKeys, item => item.pos);
            normalKeys = sortBy(normalKeys, item => item.pos);
            titleKeys = map(titleKeys, 'key');
            normalKeys = map(normalKeys, 'key');
            titleKeys = arrayUniq(titleKeys);
            normalKeys = arrayUniq(normalKeys);

            for (let item of list) {

                let titleCol = [];
                let normalCol = [];

                for (let key of titleKeys) {

                    if (item[key] === undefined) {

                        titleCol.push(this.conf.emptyCellValue);

                    } else {
                        
                        titleCol.push(item[key]);

                    }

                }

                for (let key of normalKeys) {

                    if (item[key] === undefined) {

                        normalCol.push(this.conf.emptyCellValue);

                    } else {
                        
                        normalCol.push(item[key]);

                    }

                }

                titleRows.push(titleCol);
                normalRows.push(normalCol);
                rowExpand.push(item.__expand);
                rowExpandOpen.push(false);

            }

            this.data.titleKeys = titleKeys;
            this.data.normalKeys = normalKeys;
            this.data.titleRows = titleRows;
            this.data.normalRows = normalRows;
            this.data.listDataJson = JSON.stringify(list);
            this.data.rowExpand = rowExpand;
            this.data.rowExpandOpen = rowExpandOpen;

            let uniqRowExpand = arrayUniq(rowExpand);

            if (uniqRowExpand.length === 1 && uniqRowExpand[0] === undefined) {
                
                this.data.hasRowExpand = false;

            } else {

                this.data.hasRowExpand = true;

            }

        },
        _expandRow : function (row) {

            let open = extend([], this.data.rowExpandOpen);

            if (open[row] !== undefined) {

                open[row] = !open[row];

            }

            this.data.rowExpandOpen = open;

        },
        _tableScroll : function (evt) {

            let $titleTable = this.$el.querySelector('.title-table');
            let $header = this.$el.querySelector('header');
            
            $titleTable.style.transform = `translateX(${evt.srcElement.scrollLeft}px)`;

            if ($header) {
    
                $header.style.transform = `translateX(${evt.srcElement.scrollLeft}px)`;

            }

            if (this.conf.fixedTitleRow) {

                let $normalHeader = this.$el.querySelector('.normal-table > thead');
                let $titleHeader = this.$el.querySelector('.title-table > thead');
                
                $normalHeader.style.transform = `translateY(${evt.srcElement.scrollTop}px)`;
                $titleHeader.style.transform = `translateY(${evt.srcElement.scrollTop}px)`;

            }

        },
        _cellClick : function (line, key) {

            this.$emit('cell-click', Number(line), key);

        },
        _cellEnter : function (line, key) {

            this.$emit('cell-enter', Number(line), key);

        },
        _cellLeave : function (line, key) {

            this.$emit('cell-leave', Number(line), key);

        },
        _setCustomHighlightRow : function ($tr) {

            if (this.conf.highlightRowBackground !== 'default') {

                let $nextTr = $tr.nextElementSibling;

                for (let $td of $tr.children.valueOf()) {

                    $td.style.setProperty('background-color', this.conf.highlightRowBackground);
                    $td.style.setProperty('border-color', this.conf.highlightRowBackground, 'important');
                    $td.style.setProperty('color', this.conf.highlightRowColor);

                }

                if ($nextTr) {

                    for (let $td of $nextTr.children.valueOf()) {

                        $td.style.setProperty('border-top-color', this.conf.highlightRowBackground, 'important');

                    }

                }

            }

        },
        _cleanCustomHighlightRow : function ($tr) {

            let $nextTr = $tr.nextElementSibling;

            for (let $td of $tr.children.valueOf()) {

                $td.style.removeProperty('background-color');
                $td.style.removeProperty('border-color');
                $td.style.removeProperty('color');

            }

            if ($nextTr) {

                for (let $td of $nextTr.children.valueOf()) {

                    $td.style.removeProperty('border-top-color');

                }

            }

        },
        _updateColFilter : function (colKey, matchers) {

            matchers = matchers.map(value => {

                if (/^RegExp\|/.test(value)) {

                    value = value.split('|');

                    return new RegExp(value[1], value[2]);

                }

                return value;

            });

            this.data.colFilters[colKey] = matchers;

        },
        _filterCol : function () {

            this._filter();

        },
        getHighlightRow : function () {

            if (!this.conf.highlightRow) {

                return -1;

            }

            let $lastClickNormalTr = this.$el.querySelector('.normal-table tbody tr.last-click');
            let $normalTr = this.$el.querySelectorAll('.normal-table tbody tr:not(.expand-row)');

            return Array.from($normalTr).indexOf($lastClickNormalTr);

        },
        setHighlightRow : function (rowNum) {

            if (!this.conf.highlightRow) {

                return this;

            }

            let lastRow = this.getHighlightRow();

            this.cleanHighlightRow();

            let $titleTr = this.$el.querySelectorAll('.title-table tbody tr:not(.expand-row)')[rowNum];
            let $normalTr = this.$el.querySelectorAll('.normal-table tbody tr:not(.expand-row)')[rowNum];

            if ($titleTr) {

                $titleTr.classList.add('last-click');
                this._setCustomHighlightRow($titleTr);

            }

            if ($normalTr) {

                $normalTr.classList.add('last-click');
                this._setCustomHighlightRow($normalTr);

            }

            if (Number(lastRow) !== Number(rowNum)) {
                
                this.$emit('highlight-row-change');

            }

            return this;

        },
        cleanHighlightRow : function () {

            let $lastClickTitleTr = this.$el.querySelector('.title-table tbody tr.last-click');
            let $lastClickNormalTr = this.$el.querySelector('.normal-table tbody tr.last-click');

            if ($lastClickTitleTr) {
                
                $lastClickTitleTr.classList.remove('last-click');
                this._cleanCustomHighlightRow($lastClickTitleTr);

            }

            if ($lastClickNormalTr) {
                
                $lastClickNormalTr.classList.remove('last-click');
                this._cleanCustomHighlightRow($lastClickNormalTr);

            }

            return this;

        },
        getCheckedRows : function () {

            let result = [];

            for (let line of Object.keys(this.data.rowChecked)) {

                if (this.data.rowChecked[line]) {

                    result.push(+line);

                }

            }

            return result;

        },
        setCheckedRows : function (rows) {

            let checkedRows = {};

            for (let line of Object.keys(this.data.rowChecked)) {

                checkedRows[line] = false;

            }

            if (rows instanceof Array) {

                for (let line of rows) {

                    checkedRows[line] = true;

                }

            }

            this.data.rowChecked = checkedRows;

            return this;

        },
        checkedAllRows : function () {

            let checkedRows = {};

            for (let line in this.data.normalRows) {

                checkedRows[line] = true;

            }

            this.data.rowChecked = checkedRows;

            return this;

        },
        uncheckAllRows : function () {

            return this.setCheckedRows();

        }
    },
    mounted : function () {

        this.$watch('data.rowChecked', () => {

            this.data.rowCheckedChangeLock = true;
            this.data.rowCheckedChangeCount++;

            this.Vue.nextTick(() => {

                this.data.rowCheckedChangeLock = false;

            });

        });

        this.$watch('data.rowCheckedChangeCount', () => {

            this.$emit('checked-row-change');

        });

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

                this._refreshTable();
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
