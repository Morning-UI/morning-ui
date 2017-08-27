<template>
    <ul class="submenu">
        <li v-for="(link, name) in menu">
            <a
                v-if="typeof link === 'string'"
                :href="link"
            >{{name}}</a>
            <p class="title" v-else>{{name}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props : {
        menu : Object
    }
};
</script>

<style lang="less">
.submenu {
    width: 200px;
    display: inline-block;
    vertical-align: top;
    border-right: 1px #eee solid;
    box-sizing: border-box;
    padding: 20px 10px;
    margin: 0;
    list-style: none;

    li {
        
        a{
            font-size: 13px;
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
            }
        }

        .title{
            font-size: 14px;
            color: #333;
            margin: 20px 0 5px 0;
        }
    }
}
</style>
