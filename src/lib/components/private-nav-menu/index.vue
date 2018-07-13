<template>
    <mor-private-nav-menu
        :_uiid="uiid"
    >
        <div class="nav-menu-wrap">
            <ul>
                <nav-item></nav-item>
            </ul>
        </div>
    </mor-private-nav-menu>
</template>

<script>
import navItem                      from './item.vue';

export default {
    origin : 'UI',
    private : true,
    name : 'private-nav-menu',
    components : {
        'nav-item' : navItem
    },
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    }
};
</script>

<style lang="less" src="./index.less"></style>
