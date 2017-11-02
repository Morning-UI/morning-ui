<template>
    <i-pagination
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"

        :total="total"
        :list="list"
        :page-size="pageSize"
        :page="page"
        :max-show="maxShow"
        :jump-page="jumpPage"
    >

    <div class="page-content">
        <slot
            :page="data.currentPage"
            :items="data.currentItems"
        ></slot>
    </div>

    <div class="pagination">
        <template v-for="index in conf.total">
        
            <template v-if="(data.hideEnd - 1) === index && data.hideEnd !== 1">
                <a href="javascript:;" class="prev" @click="to(data.currentPage - 1)"><i class="morningicon">&#xe696;</i></a>
                <a href="javascript:;" class="ignore">...</a>
            </template>
            
            <template v-if="index >= data.hideEnd && index <= data.hideStart">
                <a
                    v-if="data.currentPage === index"
                    href="javascript:;"
                    class="current">
                    {{index}}
                </a>
                
                <a
                    v-else
                    href="javascript:;"
                    @click="to(index)">
                    {{index}}
                </a>
            </template>

            <template v-if="(data.hideStart + 1) === index && data.hideStart !== conf.total">
                <a href="javascript:;" class="ignore">...</a>
                <a href="javascript:;" class="next" @click="to(data.currentPage + 1)"><i class="morningicon">&#xe695;</i></a>
            </template>

        </template>

        <div
            class="page-jump"
            v-if="conf.jumpPage && conf.total > conf.maxShow"
        >
            <ui-textinput :ref="'ui-select-input-' + uiid" class="page-num" form-name="页码"></ui-textinput>
            <i class="morningicon" @click="_jump()">&#xe6c8;</i>
        </div>
    </div>

</div>

        
    </i-pagination>
</template>
 
<script>
import UI                           from 'Common/ui';

const PAGE_SIZE_DEFAULT = 10;

export default UI.extend({
    name : 'pagination',
    props : {
        total : {
            type : Number,
            default : 1
        },
        list : {
            type : [Object, Array],
            default : undefined
        },
        pageSize : {
            type : Number,
            default : PAGE_SIZE_DEFAULT
        },
        page : {
            type : Number,
            default : 1
        },
        maxShow : {
            type : Number,
            default : 9
        },
        jumpPage : {
            type : Boolean,
            default : true
        }
    },
    data : function () {

        return {
            conf : {
                total : this.total,
                list : this.list,
                pageSize : this.pageSize,
                page : this.page,
                maxShow : this.maxShow,
                jumpPage : this.jumpPage
            },
            data : {
                currentPage : 0,
                currentItems : [],
                hideEnd : 0,
                hideStart : Infinity
            }
        };

    },
    methods : {
        _refreshCurrentItems : function () {

            if (this.conf.list) {

                this.data.currentItems = this.conf.list.slice((this.data.currentPage - 1) * this.conf.pageSize, this.data.currentPage * this.conf.pageSize);
            
            }

        },
        _jump : function () {

            let inputVm = this.morning.findVM(`ui-select-input-${this.uiid}`);
            let jumpPage = +inputVm.get();

            inputVm.set();

            if (typeof jumpPage === 'number' &&
                !isNaN(jumpPage)) {

                this.to(Math.floor(jumpPage));

            }

        },
        _setMaxshow : function () {

            let end = this.data.currentPage - Math.floor(this.conf.maxShow / 2),
                start = this.data.currentPage + Math.floor(this.conf.maxShow / 2);

            this.data.hideEnd = end - (start > this.conf.total ? (start - this.conf.total) - 1 : 0);
            this.data.hideStart = start + (end < 1 ? - end + 1 : 0);

        },
        getPage : function () {

            return this.data.currentPage;

        },
        to : function (index) {

            index = +index;

            if (isNaN(index)) {

                return this;

            }

            // index = (+index === 1) ? 1 : +index || this.data.currentPage;

            if (index < 0) {
            
                index = this.conf.total + index + 1;
            
            }

            if (index > this.conf.total) {
                
                index = this.conf.total;
            
            }

            if (index < 1) {

                index = 1;
            
            }

            this.data.currentPage = index;

            return this;

        },
        next : function (offset = 1) {

            this.to(this.data.currentPage + offset);

            return this;

        },
        prev : function (offset = 1) {

            offset = this.data.currentPage - offset;

            if (offset < 1) {
                
                this.to(1);
    
            } else {

                this.to(offset);

            }

            return this;

        },
        setTotal : function (num) {
        
            if (this.conf.list) {
            
                return this;
            
            }
            
            num = +num || this.conf.total;
            
            if (num < 1) {

                num = 1;

            }
            
            this.conf.total = num;

            this._setMaxshow();

            if (this.data.currentPage > num) {

                this.to(num);
            
            }

            return this;

        }
    },
    mounted : function () {

        if (this.conf.list) {

            if (this.conf.list instanceof Array) {

                this.conf.total = Math.ceil(this.conf.list.length / this.conf.pageSize);
            
            } else {

                this.conf.total = Math.ceil(Object.keys(this.conf.list).length / this.conf.pageSize);

            }

        }

        this.$watch('data.currentPage', () => {
            
            this._refreshCurrentItems();
            this._setMaxshow();
            this.$emit('emit');

        });

        this._refreshCurrentItems();
        this.to(this.conf.page);

    }
});
</script>

<style lang="less" src="./index.less"></style>
