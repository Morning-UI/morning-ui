<template>
    <i-textinput
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"

        :link="link"
        :js="js"
        :locked="locked"
        :new-tab="newTab"

        @click="_onClick"
    >

    <template v-if="conf.state === 'loading'">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else-if="conf.state === 'processing'">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else>
        <slot></slot>
    </template>
        
    </i-textinput>
</template>
 
<script>
import Form                         from 'Common/form';

export default Form.extend({
    name : 'textinput',
    props : {},
    data : function () {

        return {
            conf : {},
            data : {}
        };

    },
    methods : {},
    mounted : function () {}
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textinput{

    // default statement
    &{
        .si-m;
        .sy-theme;
        .st-normal;
    }

}
</style>
