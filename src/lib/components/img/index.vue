<template>
    <i-img
        :_uiid="uiid"
        :class="[]"
    >
    <img
        :src="src"
        :width="width"
        :height="height"
        :alt="alt"
        :title="title"
    />
    <p class="note">
        <slot></slot>
    </p>
    </i-img>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'img',
    props : {
        src : String,
        width : String,
        height : String,
        alt : String,
        title : String
    }
};
</script>

<style lang="less" src="./index.less"></style>
