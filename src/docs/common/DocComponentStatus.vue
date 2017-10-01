<template>
    <div class="doc-status-bar">
        <div class="item"
            :class="{pass: isUnitPass, fail: !isUnitPass}"
            :title="unitTitle"
        >
            <span class="name">Unit Test</span>
            <span class="value">{{unit}} {{unitNote}}</span>
        </div>
        <div class="item"
            :class="{pass: isE2EPass, fail: !isE2EPass}"
            :title="e2eTitle"
        >
            <span class="name">E2E Test</span>
            <span class="value">{{e2e}} {{e2eNote}}</span>
        </div>
        <div class="item"
            :class="[coverageLevel]"
        >
            <span class="name">Coverage</span>
            <span class="value">{{coverage}}</span>
        </div>
    </div>
</template>
 
<script>
export default {
    props : {
        page : String
    },
    computed : {
        isUnitPass : function () {

            return this.unit === 'pass';

        },
        isE2EPass : function () {

            return this.e2e === 'pass';

        }
    },
    data : function () {

        return {
            unit : '-',
            unitNote : '',
            unitTitle : '',
            e2e : '-',
            e2eNote : '',
            e2eTitle : '',
            coverage : '-',
            coverageLevel : '-'
        };

    },
    mounted : function () {

        $.get('/report/test.json', data => {

            let unitAllTest = 0;
            let unitPassTest = 0;
            let unitFailTest = 0;
            let e2eAllTest = 0;
            let e2ePassTest = 0;
            let e2eFailTest = 0;

            for (let item of data.tests) {

                if (/# SKIP/.test(item.name)) {

                    return;

                }

                let unitReg = new RegExp(`unit › components › ${this.page} › `);
                let e2eReg = new RegExp(`e2e › components › ${this.page} › `);

                if (unitReg.test(item.name)) {

                    unitAllTest++;

                }

                if (e2eReg.test(item.name)) {

                    e2eAllTest++;

                }

            }

            for (let item of data.pass) {

                if (/# SKIP/.test(item.name)) {

                    return;

                }

                let unitReg = new RegExp(`unit › components › ${this.page} › `);
                let e2eReg = new RegExp(`e2e › components › ${this.page} › `);

                if (unitReg.test(item.name)) {

                    unitPassTest++;

                }

                if (e2eReg.test(item.name)) {

                    e2ePassTest++;

                }

            }

            for (let item of data.fail) {

                if (/# SKIP/.test(item.name)) {

                    return;

                }

                let unitReg = new RegExp(`unit › components › ${this.page} › `);
                let e2eReg = new RegExp(`e2e › components › ${this.page} › `);

                if (unitReg.test(item.name)) {

                    unitFailTest++;

                }

                if (e2eReg.test(item.name)) {

                    e2eFailTest++;

                }

            }

            if (unitAllTest === 0) {

                this.unit = 'no';

            } else if (unitPassTest === unitAllTest) {

                this.unit = 'pass';

            } else {

                this.unit = 'fail';

            }

            this.unitNote = `(${unitPassTest}/${unitAllTest})`;
            this.unitTitle = `All:${unitAllTest}, Pass:${unitPassTest}, Fail:${unitFailTest}`;

            if (e2eAllTest === 0) {

                this.e2e = 'no';

            } else if (e2ePassTest === e2eAllTest) {

                this.e2e = 'pass';

            } else {

                this.e2e = 'fail';

            }
            
            this.e2eNote = `(${e2ePassTest}/${e2eAllTest})`;
            this.e2eTitle = `All:${e2eAllTest}, Pass:${e2ePassTest}, Fail:${e2eFailTest}`;

        });

        $.get(`/report/coverage/lib/components/${this.page}/index.vue.html`, data => {

            let lineCoverage = data.match(/>([0-9.]+?)% <\/span>(.|\n)+?Statements/);
            let coverageLevel = data.match(/status-line ([a-z]+?)("|')/);

            if (lineCoverage &&
                lineCoverage[1]) {

                this.coverage = `${lineCoverage[1]}%`;

            } else {

                this.coverage = `0%`;

            }

            if (coverageLevel &&
                coverageLevel[1]) {

                this.coverageLevel = coverageLevel[1];

            } else {

                this.coverageLevel = 'no';

            }

        });

    }
};
</script>

<style lang="less">
.doc-status-bar{
    margin-bottom: 20px;
    padding: 4px 0;
    height: 35px;
    transform: scale(0.8);
    transform-origin: left;

    .item{
        display: inline-block;
        font-size: 0;
        margin-right: 10px;

        .name {
            font-size: 12px;
            display: inline-block;
            padding: 2px 8px 2px 12px;
            border-radius: 15px 0 0 15px;
            vertical-align: top;
            background: #F0F0F0;
        }

        .value{
            font-size: 12px;
            display: inline-block;
            padding: 2px 12px 2px 8px;
            border-radius: 0 15px 15px 0;
            background: #45505C;
            color: #FFF;
            vertical-align: top;
            text-transform: uppercase;
        }

        &.pass{
            .value{
                background: #15BC5C;
                color: #FFF;
            }
        }

        &.low,
        &.fail{
            .value{
                background: #DA3939;
                color: #FFF;
            }
        }

        &.medium{
            .value{
                background: #DFAE19;
                color: #FFF;
            }
        }

        &.pass,
        &.high{
            .value{
                background: #15BC5C;
                color: #FFF;
            }
        }
    }
}
</style>
