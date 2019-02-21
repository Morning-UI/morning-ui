<template>
    <mor-dl
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </mor-dl>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'dl'
};
</script>
