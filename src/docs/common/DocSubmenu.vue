<template>
    <ul class="submenu">
        <li v-for="(link, name) in currentMenu">

            <template v-if="link === '/' + category + '/' + page + '.html'">
                <a
                    v-if="typeof link === 'string'"
                    :href="link"
                    v-html="name"
                    class="current"
                ></a>
                <p class="title" v-else v-html="name"></p>
            </template>
            <template v-else>
                <a
                    v-if="typeof link === 'string' && link !== ''"
                    :href="link"
                    v-html="name"
                ></a>
                <a
                    v-else-if="typeof link === 'string' && link === ''"
                    href="javascript:;"
                    v-html="name"
                    class="unavailable"
                ></a>
                <p class="title" v-else v-html="name"></p>
            </template>
            
        </li>
    </ul>
</template>

<script>
import menuList                     from 'Docs/common/menu.js';

export default {
    props : {
        category : String,
        page : String
    },
    computed : {
        currentMenu : function () {

            return this.menuList[this.category] || {};
        
        }
    },
    data : function () {

        return {
            menuList
        };

    }
};
</script>

<style lang="less">
.submenu {
    width: 160px;
    display: inline-block;
    vertical-align: top;
    border-right: 1px #EEE solid;
    box-sizing: border-box;
    padding: 20px 10px;
    margin: 0;
    list-style: none;

    li {
        
        a{
            font-size: 14px;
            color: #999;
            text-decoration: none;
            text-indent: 8px;
            display: inline-block;
            margin: 3px 0;

            &:hover{
                color: #666;
            }

            &.current {
                color: #333;
                font-weight: 700;
            }

            &.unavailable{
                cursor: default;
                color: #a0a0a0;

                &:hover{
                    color: #a0a0a0;
                }
            }
        }

        .title{
            font-size: 15px;
            color: #333;
            margin: 20px 0 5px;
        }
    }

    .tag{
        color: #FFF;
        padding: 2px 5px;
        border-radius: 15px;
        font-size: 12px;
        font-style: normal;
        transform: scale(0.7);
        transform-origin: left center;
        display: inline-block;
        margin: 0 0 0 3px;
        text-indent: 0;
        vertical-align: 1px;
        text-align: center;
        text-transform: uppercase;
        
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
</style>
