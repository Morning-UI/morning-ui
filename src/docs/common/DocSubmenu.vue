<template>
    <ul class="submenu">
        <li v-for="(link, name) in currentMenu">

            <template v-if="
                (
                    typeof link === 'string' && (link === '/' + category + '/' + page + '.html') ||
                    link instanceof Array && (link[0] === '/' + category + '/' + page + '.html')
                )
            ">
                <doc-submenu-item
                    v-if="(typeof link === 'string' || link instanceof Array)"
                    :link="link"
                    :name="name"
                    :category="category"
                    :classes="['current']"
                >
                </doc-submenu-item>
                <p class="title" v-else v-html="name"></p>
            </template>
            <template v-else>
                <doc-submenu-item
                    v-if="typeof link === 'string' && link === ''"
                    link="javascript:;"
                    :name="name"
                    :category="category"
                    :classes="['unavailable']"
                >
                </doc-submenu-item>
                <doc-submenu-item
                    v-else-if="(typeof link === 'string' || link instanceof Array)"
                    :link="link"
                    :name="name"
                    :category="category"
                >
                </doc-submenu-item>
                <p class="title" v-else v-html="name"></p>
            </template>
            
        </li>
    </ul>
</template>

<script>
import menuList                     from 'Docs/common/menu.js';
import DocSubmenuItem               from 'Docs/common/DocSubmenuItem.vue';

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

    },
    components : {
        'doc-submenu-item' : DocSubmenuItem
    }
};
</script>

<style lang="less">
.submenu {
    width: 210px;
    display: inline-block;
    vertical-align: top;
    border-right: 1px #EEE solid;
    box-sizing: border-box;
    padding: 20px 10px 20px 0;
    margin: 0;
    list-style: none;
    overflow-y: auto;
    max-height: calc(100vh - 80px);
    position: sticky;
    top: 0;

    &::-webkit-scrollbar{
        width: 5px;
        height: 5px;
        background-color: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb{
        width: 5px;
        height: 5px;
        background: rgba(0, 0, 0, 0);
        border-radius: 4px;
    }

    &:hover::-webkit-scrollbar-thumb{
        background: rgba(0, 0, 0, 0.1);
    }

    li {
        a{
            font-size: 14px;
            color: #4E596B;
            text-decoration: none;
            text-indent: 8px;
            display: inline-block;
            margin: 5px 0;

            &:hover{
                color: #F24865;

                .name{
                    color: #F24865;
                }
            }

            &.current {
                .name,
                .en-name{
                    font-weight: 700;
                    color: #F24865;
                }
            }

            &.unavailable{
                cursor: default;
                color: #A0A0A0;

                &:hover{
                    color: #A0A0A0;
                }
            }
        }

        .title{
            font-size: 18px;
            color: #21252D;
            margin: 20px 0 10px;
        }
    }
}
</style>
