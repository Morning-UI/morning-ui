<template>
    <a
        :href="realLink"
        :class="[classes, 'submenu-item', {'has-en-name' : enName}]"
    >
        <span v-if="enName" v-html="enName" class="en-name"></span>
        <span v-html="name" class="name"></span>
        <span class="tag-zone">
            <i class="tag update" v-if="link instanceof Array && link.indexOf('udpate') !== -1"></i>
            <i class="tag new" v-if="link instanceof Array && link.indexOf('new') !== -1"></i>
        </span>
    </a>
</template>

<script>
export default {
    props : {
        name : String,
        category : String,
        link : String,
        classes : String
    },
    computed : {
        realLink : function () {

            if (this.link instanceof Array) {

                return this.link[0];

            }

            return this.link;

        },
        enName : function () {

            if (this.link instanceof Array) {

                return this.link[1];

            }

            return null;

        }
    },
    data : function () {

        return {};

    }
};
</script>

<style lang="less">
.submenu-item {
    &.has-en-name{
        margin: 10px 0;

        .name{
            font-size: 12px;
            color: #818DA9;
        }
    }

    .tag-zone{
        display: block;

        .tag{
            color: #FFF;
            padding: 2px 5px;
            border-radius: 15px;
            font-size: 12px;
            font-style: normal;
            transform: scale(0.7);
            transform-origin: left center;
            display: inline-block;
            margin: 0 0 0 -15px;
            text-indent: 0;
            vertical-align: 1px;
            text-align: center;
            text-transform: uppercase;

            &:first-child{
                margin: 0;
            }
            
            &.new{
                background: #F34562;

                &:before{
                    content: 'new';
                }
            }
            
            &.update{
                background: #41B4D2;

                &:before{
                    content: 'update';
                }
            }
            
            &.done{
                background: #46C235;

                &:before{
                    content: 'done';
                }
            }
            
            &.coming{
                background: #666;

                &:before{
                    content: 'coming';
                }
            }
            
            &.review{
                background: #119100;

                &:before{
                    content: 'CR PASS';
                }
            }

            &.l1{
                opacity: 1;
            }

            &.l2{
                opacity: 0.85;
            }

            &.l3{
                opacity: 0.75;
            }

            &.l4{
                opacity: 0.6;
            }
        }
    }

    .en-name{
        display: inline-block;
        margin-right: 2px;
        font-size: 14px;
        font-weight: normal;
        margin-top: 2px;
        text-indent: 0;
    }
}
</style>
