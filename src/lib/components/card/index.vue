<template>
    <mor-card
        :_uiid="uiid"
        :class="[colorClass]"
    >
        <div class="card-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </mor-card>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'card'
};
</script>
