<template>
    <div
        class="select-area"
        :class="[{
            'mor-select-wrap' : conf.separateEmit,
            'focus-search' : !!data.focusSearch,
            searching : !!data.searching,
            'align-left' : (conf.align === 'left'),
            'align-center' : (conf.align === 'center'),
            'align-right' : (conf.align === 'right'),
            'select-item' : (data.value && data.value.length > 0),
            'is-max' : !!isMax,
            showlist : !!data.showlist,
            'input-group' : !!conf.prepend
        }, sizeClass, stateClass]"
    >
        <div
            class="wrap"
            :class="{
                'showwrap' : (conf.separateEmit && !!data.showlist)
            }"
            :id="'mor-select-wrap-'+uiid"
            @click="_wrapClick"
        >

            <template v-if="conf.multiSelect">
                <morning-multiinput
                    :id="'ui-select-mi-' + uiid"
                    :can-move="conf.canMove"
                    :max="conf.max"
                    :inside-name="conf.insideName"
                    :hide-name="conf.hideName"
                    :state="conf.state"
                    :size="conf.size"
                    key="multi-can-search"

                    v-if="conf.canSearch"

                    @input-focus="_multiinputFocus()"
                    @value-change="_multiinputValueChange()"
                    @input-value-change="_searchKeyChange()"
                ></morning-multiinput>

                <morning-multiinput
                    :id="'ui-select-mi-' + uiid"
                    :can-move="conf.canMove"
                    :max="conf.max"
                    :inside-name="conf.insideName"
                    :hide-name="conf.hideName"
                    :state="conf.state"
                    :size="conf.size"
                    key="multi-no-search"

                    v-else

                    @input-focus="_multiinputFocusNoSearch()"
                    @value-change="_multiinputValueChange()"
                ></morning-multiinput>
            </template>

            <template v-else>
                <template v-if="conf.canSearch">
                    <morning-textinput
                        :id="'ui-select-ti-' + uiid"
                        :align="conf.align"
                        :size="conf.size"
                        @value-change="_searchKeyChange()"
                        @focus="_textinputFocus()"
                        @blur="_textinputBlur()"
                        key="single-can-search"
                    ></morning-textinput>
                </template>

                <div
                    class="selected"
                    v-if="!conf.multiSelect && data.value && data.value.length === 1"
                    v-html="data.selectedContent"
                >
                </div>

                <div
                    class="selected"
                    v-else-if="!!conf.insideName">
                    {{conf.insideName}}
                </div>

                <div
                    class="selected"
                    v-else>
                    &nbsp;
                </div>
            </template>

            <i class="mo-icon mo-icon-dropdown drop"></i>

        </div>

        <morning-popover
            v-if="!conf.separateEmit"
            :ref="'ui-select-popover-'+uiid"
            :class="[
                'mor-select-popover',
                {
                    'no-animation' : !!data.highPerfMode
                }
            ]"

            :target="'#mor-select-wrap-'+uiid"
            placement="bottom"
            trigger="method"
            :auto-reverse="true"
        >

            <select-list
                :conf="conf"
                :data="data"
                :stateClass="stateClass"
                :listStyle="listStyle"
                :_listClick="_listClick"
                :showItemList="showItemList"
                :uiid="uiid"
                :_itemHover="_itemHover"
            ></select-list>

        </morning-popover>

        <select-list
            v-else
            :conf="conf"
            :data="data"
            :stateClass="stateClass"
            :listStyle="listStyle"
            :_listClick="_listClick"
            :showItemList="showItemList"
            :uiid="uiid"
            :_itemHover="_itemHover"
        ></select-list>
    </div>
</template>

<script>
import selectList                   from './select-list.vue';

export default {
    components : {
        'select-list' : selectList
    },
    props : [
        'conf',
        'data',
        'sizeClass',
        'stateClass',
        'listStyle',
        'uiid',
        'isMax',
        '_wrapClick',
        '_multiinputFocus',
        '_multiinputValueChange',
        '_searchKeyChange',
        '_multiinputFocusNoSearch',
        '_textinputFocus',
        '_textinputBlur',
        '_listClick',
        '_itemHover',
        'showItemList'
    ]
};
</script>
