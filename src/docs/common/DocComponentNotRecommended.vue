<template>
    <div>
        <ui-alert title="不推荐使用" type="warning" show-icon can-close>
            注意：此组件已不推荐(自{{date}}起)使用，可能会在未来的版本中被废弃。请尽量避免在新的场景中使用。
            <br>
            替代方案：{{plan}}
        </ui-alert>
        <br>
    </div>
</template>
 
<script>
export default {
    props : {
        date : String,
        plan : String
    },
    data : function () {

        return {};

    },
    mounted : function () {}
};
</script>

<style lang="less">
.doc-not-recommended{

}
</style>
