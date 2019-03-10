<template>
    <div
        class="select-list"
        :class="[{
            showlist : !!data.showlist,
            'hide-selected' : conf.hideSelected,
            'mor-select-wrap' : !conf.separateEmit
        }, stateClass]"
    >
        <ul
            class="list"
            :style="listStyle"
            @click="_listClick"
        >
            <template v-for="(index, _index) in showItemList">
                <li
                    :key="_index"
                    :index="index"
                    :class="{
                        hide : data.itemNomathMap[index],
                        hover : +data.hoverIndex === +_index
                    }"
                    :id="'ui-select-tip-'+uiid+'-'+index"
                    @mouseenter="_itemHover(_index)"
                    class="selected"
                    v-html="data.itemNameMap[index] + '<i class=\'mo-select-selected-icon mo-icon mo-icon-check\'></i>'"
                    v-if="data.itemSelectedMap[index]"
                >
                </li>
                <li
                    :key="_index"
                    :index="index"
                    :class="{
                        hide : data.itemNomathMap[index],
                        hover : +data.hoverIndex === +_index
                    }"
                    :id="'ui-select-tip-'+uiid+'-'+index"
                    @mouseenter="_itemHover(_index)"
                    v-html="data.itemNameMap[index]"
                    v-else
                >
                </li>

                <template v-if="conf.itemTip">
                    <morning-tip
                        :key="_index"
                        :target="'#ui-select-tip-'+uiid+'-'+index"
                        :placement="conf.itemTipDirect"
                        class="tips"
                        color="blue"
                    >{{data.itemTipMap[index]}}</morning-tip>
                </template>
            </template>
            <li class="noitem infoitem" :class="{show : data.noMatch || showItemList.length === 0 || data.selectedAll}">
                <morning-empty v-if="conf.canSearch && (conf.dynamicList || showItemList.length === 0)" note="无匹配项目"></morning-empty>
                <!-- <morning-empty v-if="conf.dynamicList && conf.canSearch" note="无匹配项目"></morning-empty> -->
                <morning-empty v-else note="无项目"></morning-empty>
            </li>
            <li class="maxshow infoitem" :class="{show : conf.canSearch && (data.matchList.length > conf.maxShow)}">
                <span>请搜索以显示更多</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : [
        'conf',
        'data',
        'stateClass',
        'listStyle',
        '_listClick',
        'showItemList',
        'uiid',
        '_itemHover'
    ]
};
</script>
