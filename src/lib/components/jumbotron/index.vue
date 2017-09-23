<template>
    <i-jumbotron
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-jumbotron>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'jumbotron'
});
</script>

<style lang="less" src="./index.less"></style>
