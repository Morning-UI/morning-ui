<template>
    <div>
        <doc-header :category="category"></doc-header>
        <doc-body>
            <doc-submenu :category="category" name="subMenu"></doc-submenu>
        </doc-body>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocBody                      from 'Docs/common/DocBody.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';

export default {
    data : function () {

        return {
            category : 'component'
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-body' : DocBody,
        'doc-submenu' : DocSubmenu
    }
};
</script>

<style lang="less">
@import "~Docs/common/common.less";
</style>
