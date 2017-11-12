<template>
    <i-table
        :_uiid="uiid"
        :class="[styleClass, moreClass]"

        :list="list"
        :empty-cell-value="emptyCellValue"
        :title="title"
        :zebra-pattern="zebraPattern"
        :vertical-border="verticalBorder"
        :horizontal-border="horizontalBorder"
        :col-align="colAlign"
        :show-col-name="showColName"
        :fixed-title-col="fixedTitleCol"
        :col-set="colSet"
        :export-csv="exportCsv"
        :export-csv-name="exportCsvName"
    >

    <template v-if="conf.title || conf.exportCsv">
        <header>
            <h1 v-if="conf.title">{{conf.title}}</h1>

            <div class="action">
                <morning-btn v-if="conf.exportCsv" success xs @emit="_exportCsv">导出</morning-btn>
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
                        @row-mouseover="_rowOver"
                        @row-mouseout="_rowOut"
                    ></normal-table>
                </td>
                <td>
                    <title-table
                        :conf="conf"
                        :data="data"
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
                    ></title-table>
                </td>
                <td>
                    <normal-table
                        :conf="conf"
                        :data="data"
                    ></normal-table>
                </td>
            </tr>
        </tbody>
    </table>

    </i-table>
</template>
 
<script>
import arrayUniq                    from 'array-uniq';
import titleTable                   from './title-table.vue';
import normalTable                   from './normal-table.vue';


// col-set : [{
//     sort,
//     childs : [{

//     }]
// }]


// fixed-title-col : 'left','right',`left-fixed`,`right-fixed`


// fixed-footer
// fixed-header

// multi-sort

// item-set : [{
//     x,
//     y,
//     style,
//     disabled,
//     align
// }]

// slot:
// header
// footer


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
        colAlign : {
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
            type : Object,
            default : (() => ({}))
        },
        exportCsv : {
            type : Boolean,
            default : false
        },
        exportCsvName : {
            type : String,
            default : undefined
        }
    },
    data : function () {

        return {
            conf : {
                list : this.list,
                emptyCellValue : this.emptyCellValue,
                title : this.title,
                zebraPattern : this.zebraPattern,
                verticalBorder : this.verticalBorder,
                horizontalBorder : this.horizontalBorder,
                colAlign : this.colAlign,
                showColName : this.showColName,
                fixedTitleCol : this.fixedTitleCol,
                colSet : this.colSet,
                exportCsv : this.exportCsv,
                exportCsvName : this.exportCsvName
            },
            data : {
                normalKeys : [],
                normalRows : [],
                titleKeys : [],
                titleRows : []
            }
        };

    },
    computed : {
        moreClass : function () {

            let classes = {};

            classes[`col-align-${this.conf.colAlign}`] = true;
            classes[`title-col-${this.conf.fixedTitleCol}`] = true;

            return Object.assign({
                'zebra-pattern' : this.conf.zebraPattern,
                'vertical-border' : this.conf.verticalBorder,
                'horizontal-border' : this.conf.horizontalBorder,
                'has-title-col' : (this.data.titleKeys.length > 0)
            }, classes);

        }
    },
    methods : {
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

            if (csv[0] === undefined) {

                csv[0] = [];

            }

            if (this.conf.showColName) {

                for (let key of this.data[`${type}Keys`]) {

                    if (this.conf.colSet[key] &&
                        this.conf.colSet[key].name) {

                        csv[0].push(this.conf.colSet[key].name);

                    } else {

                        csv[0].push('');

                    }

                }

            }

            for (let index in this.data[`${type}Rows`]) {

                let csvIndex = Number(index) + 1;

                if (csv[csvIndex] === undefined) {

                    csv[csvIndex] = [];

                }

                csv[csvIndex] = csv[csvIndex].concat(this.data[`${type}Rows`][index]);

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

            if (this.conf.exportCsvName !== undefined) {
    
                downloadLink.download = `${this.conf.exportCsvName}.csv`;

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

            for (let item of list) {

                for (let key of Object.keys(item)) {

                    if (this.conf.colSet[key] &&
                        this.conf.colSet[key].title === true) {

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

        }
    },
    mounted : function () {

        this._importList(this.conf.list);

    }
};
</script>

<style lang="less" src="./index.less"></style>
