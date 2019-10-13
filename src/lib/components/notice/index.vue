<template>
    <mor-notice
        :_uiid="uiid"
        :class="[]"
    >
    </mor-notice>
</template>

<script>
// import PopupManager                 from 'Utils/PopupManager';
// import IndexManager                 from 'Utils/IndexManager';

// const defaultDoneTime = 4000;

export default {
    origin : 'UI',
    name : 'notice',
    // mixins : [PopupManager, IndexManager],
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {},
    mounted : function () {}
};
</script>
