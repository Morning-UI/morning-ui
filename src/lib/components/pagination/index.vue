<template>
    <mor-pagination
        :_uiid="uiid"
        :class="[sizeClass, colorClass, moreClass]"

        :total="total"
        :list="list"
        :page-size="pageSize"
        :page="page"
        :max-show="maxShow"
        :jump-page="jumpPage"
        :type="type"
    >

    <div class="page-content">
        <slot
            :page="data.currentPage"
            :items="data.currentItems"
        ></slot>
    </div>

    <div class="list">
        <template v-if="conf.type === 'normal'">
            <template v-if="data.hideEnd > 0">
                <a href="javascript:;" class="prev" @click="to(data.currentPage - 1)"><i class="mo-icon mo-icon-left"></i></a>
            </template>

            <template v-if="data.hideEnd >= 1">
                <a
                    href="javascript:;"
                    @click="to(1)"
                >
                    1
                </a>
            </template>

            <template v-if="data.hideEnd > 0">
                <a href="javascript:;" class="ignore">...</a>
            </template>

            <template v-for="index in data.len">
                
                <!-- eslint-disable vue/require-v-for-key -->
                <template v-if="(index + data.offset) >= (data.hideEnd) && (index + data.offset) <= (data.hideStart)">
                    <a
                        v-if="data.currentPage === (index + data.offset)"
                        href="javascript:;"
                        class="current"
                    >
                        {{index + data.offset}}
                    </a>
                    
                    <a
                        v-else
                        href="javascript:;"
                        @click="to(index + data.offset)"
                    >
                        {{index + data.offset}}
                    </a>
                </template>
                <!-- eslint-enable vue/require-v-for-key -->

            </template>

            <template v-if="data.hideStart < data.total">
                <a href="javascript:;" class="ignore">...</a>
            </template>

            <template v-if="data.hideStart < data.total">
                <a
                    href="javascript:;"
                    @click="to(data.total)"
                >
                    {{data.total}}
                </a>
            </template>

            <template v-if="data.hideStart < data.total">
                <a href="javascript:;" class="next" @click="to(data.currentPage + 1)"><i class="mo-icon mo-icon-right"></i></a>
            </template>
        </template>

        <template v-else-if="conf.type === 'simple'">
            <a
                href="javascript:;"
                class="prev"
                :class="{
                    'disabled' : data.currentPage <= 1
                }"
                @click="to(data.currentPage - 1)"
            ><i class="mo-icon mo-icon-left"></i></a>
            <div class="page-nav">
                {{data.currentPage}} / {{data.total}}
            </div>
            <a
                href="javascript:;"
                class="next"
                :class="{
                    'disabled' : data.currentPage >= data.total
                }"
                @click="to(data.currentPage + 1)"
            ><i class="mo-icon mo-icon-right"></i></a>
        </template>

        <template v-else>
            <a
                href="javascript:;"
                class="prev"
                :class="{
                    'disabled' : data.currentPage <= 1
                }"
                @click="to(data.currentPage - 1)"
            ><i class="mo-icon mo-icon-left"></i></a>
            <a
                href="javascript:;"
                class="next"
                :class="{
                    'disabled' : data.currentPage >= data.total
                }"
                @click="to(data.currentPage + 1)"
            ><i class="mo-icon mo-icon-right"></i></a>
        </template>

        <div
            class="page-jump"
            v-if="conf.jumpPage && data.total > conf.maxShow"
        >
            <morning-textinput :ref="'ui-select-input-' + uiid" class="page-num" inside-name="页码" :inside-clearable="false"></morning-textinput>
            <i class="mo-icon mo-icon-arrow-right" @click="_jump()"></i>
        </div>
    </div>
        
    </mor-pagination>
</template>
 
<script>
const PAGE_SIZE_DEFAULT = 10;

export default {
    origin : 'UI',
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
        },
        type : {
            type : String,
            default : 'normal',
            validator : (value => ['normal', 'simple', 'mini'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                total : this.total,
                list : this.list,
                pageSize : this.pageSize,
                page : this.page,
                maxShow : this.maxShow,
                jumpPage : this.jumpPage,
                type : this.type
            };

        },
        moreClass : function () {

            return {
                'type-simple' : this.conf.type === 'simple',
                'type-mini' : this.conf.type === 'mini'
            };

        }
    },
    data : function () {

        return {
            data : {
                currentPage : 0,
                currentItems : [],
                hideEnd : 0,
                hideStart : Infinity,
                total : 0,
                offset : 0,
                len : 2
            }
        };

    },
    methods : {
        _setTotal : function () {

            let total = this.data.total;

            if (this.conf.list) {

                if (this.conf.list instanceof Array) {

                    total = Math.ceil(this.conf.list.length / this.conf.pageSize);
                
                } else {

                    total = Math.ceil(Object.keys(this.conf.list).length / this.conf.pageSize);

                }

            } else {

                total = this.conf.total;

            }

            this.data.total = total;

        },
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
                start = this.data.currentPage + Math.floor(this.conf.maxShow / 2),
                len = this.conf.maxShow,
                offset = this.data.currentPage - Math.ceil((len - 1) / 2);

            this.data.hideEnd = end - (start > this.data.total ? (start - this.data.total) - 1 : 0);
            this.data.hideStart = start + (end < 1 ? - end + 1 : 0);

            if (this.data.hideEnd > 0) {

                len -= 1;

            }

            if (this.data.hideStart < this.data.total) {

                len -= 1;

            }

            this.data.len = len;

            if (offset < 0) {

                offset = 0;

            } else if (offset + this.data.len > this.data.total) {

                offset = this.data.total - this.data.len;

            }

            this.data.offset = offset;

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
            
                index = this.data.total + index + 1;
            
            }

            if (index > this.data.total) {
                
                index = this.data.total;
            
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
            
            num = +num || this.data.total;
            
            this.data.total = num;

            return this;

        }
    },
    mounted : function () {

        this.$watch('conf.total', () => {

            this._setTotal();

        });

        this.$watch('conf.list', () => {

            this._setTotal();
            this._refreshCurrentItems();

        }, {
            deep : true
        });

        this.$watch('conf.pageSize', () => {

            this._setTotal();
            this._refreshCurrentItems();

        });

        this.$watch('conf.maxShow', () => {

            this._setMaxshow();

        });

        this.$watch('data.currentPage', () => {
            
            this._refreshCurrentItems();
            this._setMaxshow();
            this.$emit('emit');

        });

        this.$watch('data.total', () => {
            
            if (this.data.total < 1) {

                this.data.total = 1;

                return;

            }

            if (this.data.currentPage > this.data.total) {

                this.to(this.data.total);
            
            }

            this._setMaxshow();

        });

        this._setTotal();
        this._refreshCurrentItems();

        this.$watch('conf.page', () => {
    
            this.to(this.conf.page);
    
        }, {
            immediate : true
        });

    }
};
</script>
