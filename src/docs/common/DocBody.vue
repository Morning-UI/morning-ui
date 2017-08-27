<template>
    <div class="body">
        <slot name="subMenu"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.body {
    width: 1100px;
    margin: 0 auto;
}
</style>
