<template>
    <mor-ol
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </mor-ol>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'ol'
};
</script>
