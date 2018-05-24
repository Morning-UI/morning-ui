<template>
    <mor-audio
        :_uiid="uiid"
        :class="[]"
    >

    <audio controls>
        <source  src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" type="audio/mpeg" autoplay>
    </audio>
        
    </mor-audio>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'audio',
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
    methods : {}
};
</script>

<style lang="less" src="./index.less"></style>
