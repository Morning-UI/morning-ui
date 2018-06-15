<template>
    <ul
        :class="{
            'root-menu' : (deep === 0),
            'sub-menu' : deep > 0
        }"
    >
        <li
            v-for="(item, key) in list"

            :class="{
                current : (key === current[deep])
            }"

            @click="to([key])"
        >
            <p
                v-if="item.link"
                @click="_linkTo(item.link, item.newTab)"
            >{{item.name}}</p>

            <p
                v-else
            >{{item.name}}</p>

            <template v-if="item.childs">
                <slot
                    :item="item"
                    :current="current"
                    :deep="deep + 1"
                    :path="path + '/' + item.key"
                    :to="to"
                    :_linkTo="_linkTo"
                ></slot>
            </template>
        </li>
    </ul>
</template>

<script>
export default {
    props : {
        list : Object,
        current : Array,
        path : {
            type : String,
            default : ''
        },
        deep : {
            type : Number,
            default : 0
        },
        to : Function,
        _linkTo : Function
    }
};
</script>