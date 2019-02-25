<template>
    <mor-empty
        :_uiid="uiid"
        :class="[]"

        :image="image"
        :note="note"
    >

        <morning-center class="fill">
            <div class="empty-wrap">

                <component
                    :is="{
                        template : ('<div class=\'empty-image\'>' + conf.image + '</div>')
                    }"
                ></component>
                
                <component
                    :is="{
                        template : ('<div class=\'empty-note\'>' + conf.note + '</div>')
                    }"
                ></component>

                <div class="empty-more">
                    <slot></slot>
                </div>

            </div>
        </morning-center>
        
    </mor-empty>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'empty',
    props : {
        image : {
            type : String,
            default : '<i class="mo-icon mo-icon-drawer-empty"></i>'
        },
        note : {
            type : String,
            default : '暂无数据'
        }
    },
    computed : {
        _conf : function () {

            return {
                image : this.image,
                note : this.note
            };

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {},
    created : function () {},
    mounted : function () {}
};
</script>
