<template>
    <div class="doc-status-bar">
        <div class="item"
            :class="{pass: isUTPass, fail: !isUTPass}"
        >
            <span class="name">Unit Test</span>
            <span class="value">{{unittest}}</span>
        </div>
        <div class="item"
            :class="{pass: isE2EPass, fail: !isE2EPass}"
        >
            <span class="name">E2E Test</span>
            <span class="value">{{e2etest}}</span>
        </div>
        <div class="item">
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
        isUTPass : function () {
            return this.unittest === 'pass';
        },
        isE2EPass : function () {
            return this.e2etest === 'pass';
        }
    },
    data : function () {
        return {
            unittest : '-',
            e2etest : '-',
            coverage : '-'
        };
    },
    mounted : function () {

        $.get(`/coverage/lib/components/${this.page}/index.vue.html`, (data) => {

            let lineCoverage = data.match(/\>([0-9\.]+?)% \<\/span\>(.|\n)+?Statements/);
            let coverageStatus = data.match(/status\-line ([a-z]+?)(\"|\')/);

            if (lineCoverage &&
                lineCoverage[1]) {

                this.coverage = `${lineCoverage[1]}%`;

            } else {

                this.coverage = `0%`;

            }

            if (coverageStatus &&
                coverageStatus[1]) {

                this.unittest = coverageStatus[1];    

                if (this.unittest === 'high') {
                    this.unittest = 'pass';
                }          

            } else {

                this.unittest = 'no';

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
            padding: 2px 5px 2px 10px;
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
            color: #fff;
            vertical-align: top;
            text-transform: uppercase;
        }

        &.pass{
            .value{
                background: #23C455;
                color: #fff;
            }
        }

        &.fail{
            .value{
                background: #EB0E23;
                color: #fff;
            }
        }
    }
}
</style>
