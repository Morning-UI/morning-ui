<template>
    <mor-imagemap
        :_uiid="uiid"
        :class="[stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :allow-url="allowUrl"
        :allow-drag="allowDrag"
        :multi="multi"
        :validate="validate"
        :uploader="uploader"
        :clean-zone="cleanZone"
        :max="max"
        :forbid="forbid"
    >

    <morning-upload
        :form-name="conf.formName"
        :max="1"
        :allow-url="conf.allowUrl"
        :allow-drag="conf.allowDrag"
        :validate="conf.validate"
        :uploader="conf.uploader"
        accept-type="image/*"
        :ref="'ui-imagemap-upload-'+uiid"

        @value-change="_uploadValueChange"
    ></morning-upload>

    <a href="javascript:;" class="modify-map" v-show="data.images.length > 0" @click="_openMap">
        <i class="morningicon">&#xe6a9;</i> 绘制热区
    </a>

    <morning-dialog
        class="mor-imagemap-dialog-map show-no-animate"
        color="gray"
        width="60%"
        height="90%"
        :ref="'ui-imagemap-mapdialog-'+uiid"
    >
        <header slot="header">绘制热区</header>
    
        <div class="maparea">
            <div class="zonearea" :class="{'over-range':data.overRange}">
                <div
                    class="zone"
                    zone-id="0"
                    style="width:160px;height:60px;z-index:1;top:50px;left:20px;"
                    @mousedown="_moveItemRecord(0)"
                    @drop.stop.prevent="_dropZone"
                >
                    <div class="topleft"></div>
                    <div class="top"></div>
                    <div class="topright"></div>
                    <div class="right"></div>
                    <div class="bottomright"></div>
                    <div class="bottom"></div>
                    <div class="bottomleft"></div>
                    <div class="left"></div>
                </div>

                <div
                    class="zone"
                    zone-id="1"
                    style="width:100px;height:150px;z-index:2;top:30px;left:80px;"
                    @mousedown="_moveItemRecord(1)"
                    @drop.stop.prevent="_dropZone"
                >
                    <div class="topleft"></div>
                    <div class="top"></div>
                    <div class="topright"></div>
                    <div class="right"></div>
                    <div class="bottomright"></div>
                    <div class="bottom"></div>
                    <div class="bottomleft"></div>
                    <div class="left"></div>
                </div>
            </div>

            <template v-for="image in data.images">
                <img :src="image.path" />
            </template>
        </div>

        <footer slot="footer">
            <div>
                <ui-btn color="minor" @emit="morning.findVM('ui-imagemap-mapdialog-'+uiid).toggle(false)">关闭</ui-btn>
            </div>
        </footer>
        
    </morning-dialog>

    <morning-dialog
        class="mor-imagemap-dialog-zone"
        color="gray"
        width="50%"
        height="90%"
        :ref="'ui-imagemap-zonedialog-'+uiid"
    >
        
    </morning-dialog>

    </mor-imagemap>
</template>
 
<script>
import Move                         from 'Utils/Move';

export default {
    origin : 'Form',
    name : 'imagemap',
    mixins : [Move],
    props : {
        allowUrl : {
            type : Boolean,
            default : false
        },
        allowDrag : {
            type : Boolean,
            default : false
        },
        multi : {
            type : Boolean,
            default : false
        },
        validate : {
            type : Function,
            default : () => ({})
        },
        uploader : {
            type : Function,
            default : undefined
        },
        cleanZone : {
            type : Boolean,
            default : true
        },
        max : {
            type : Number,
            default : Infinity
        },
        forbid : {
            type : Array,
            default : () => []
        }
    },
    computed : {
        _conf : function () {

            return {
                allowUrl : this.allowUrl,
                allowDrag : this.allowDrag,
                multi : this.multi,
                validate : this.validate,
                uploader : this.uploader,
                cleanZone : this.cleanZone,
                max : this.max,
                forbid : this.forbid
            };

        }
    },
    data : function () {

        return {
            data : {
                // zoneId : 0,
                images : [],
                moveZoneId : null,
                containerCalibrate : {
                    x : 0,
                    y : 0
                },
                overRange : false,
                autoScrollCheck : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {
            
            return value;

        },
        _openMap : function () {

            this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].toggle(true);

            setTimeout(() => {
            
                this._updateWindowCalibrate();
                this._updateMoveRange();
                this.Move.target = '.zone';
                this.Move.container = '.zonearea';
                this.Move.$root = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el;
                this.Move.delay = 0;
                this.Move.can = true;

            });

        },
        _uploadValueChange : function () {

            this.data.images = this.$refs[`ui-imagemap-upload-${this.uiid}`].get();

        },
        _updateWindowCalibrate : function () {

            let $content = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.content');

            this.Move.windowCalibrate.x = -$content.getBoundingClientRect().x;
            this.Move.windowCalibrate.y = -$content.getBoundingClientRect().y;

        },
        _updateMoveRange : function () {

            let $body = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.body`);

            const scrollBarWidth = 5;
            const bodyPadding = 16;

            this._updateContainerCalibrate();
            this.Move.range = [this.data.containerCalibrate.x, this.data.containerCalibrate.y, $body.offsetWidth - this.data.containerCalibrate.x - scrollBarWidth, $body.offsetHeight - (bodyPadding * 2) + this.data.containerCalibrate.y];

        },
        _updateContainerCalibrate : function () {

            let $container = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.zonearea');
            let $content = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.content');
            let $body = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.body`);
            let containerXy = $container.getBoundingClientRect();
            let contentXy = $content.getBoundingClientRect();

            this.data.containerCalibrate = {
                x : containerXy.x - contentXy.x,
                y : containerXy.y - contentXy.y + $body.scrollTop
            };

        },
        _dropZone : function () {},
        _autoScroll : function () {

            // 1000ms / 60 fps = 16.7
            const checkTime = 17;

            if (this.data.autoScrollCheck) {

                clearTimeout(this.data.autoScrollCheck);

            }

            if (!this.Move.$moveDragItem) {

                return;

            }

            const padding = 16;
            const step = 15;

            let $body = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.body`);
            let $header = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`header`);
            let contentHeight = $body.clientHeight;
            let topLimit = padding;
            let bottomLimit = contentHeight - padding - this.Move.$moveDragItem.offsetHeight;

            if ((this.Move.current.y - $header.clientHeight) <= topLimit) {

                $body.scrollTop -= step;

            }

            if ((this.Move.current.y - $header.clientHeight) >= bottomLimit) {

                $body.scrollTop += step;

            }

            if ((this.Move.current.y - $header.clientHeight) <= topLimit ||
                (this.Move.current.y - $header.clientHeight) >= bottomLimit) {
                
                this.data.autoScrollCheck = setTimeout(() => {

                    this._autoScroll();

                }, checkTime);

            }

        },
        _moveZone : function (id, x, y) {

            let $zone = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.zone[zone-id="${id}"]`);

            if ($zone) {

                $zone.style.left = `${x}px`;
                $zone.style.top = `${y}px`;

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('_moveOnXMin', () => (this.data.overRange = true));
        this.$on('_moveOnYMin', () => (this.data.overRange = true));
        this.$on('_moveOnXMax', () => (this.data.overRange = true));
        this.$on('_moveOnYMax', () => (this.data.overRange = true));
        this.$on('_moveOffXMin', () => (this.data.overRange = false));
        this.$on('_moveOffYMin', () => (this.data.overRange = false));
        this.$on('_moveOffXMax', () => (this.data.overRange = false));
        this.$on('_moveOffYMax', () => (this.data.overRange = false));

        this.$on('_moveChange', () => {

            this._autoScroll();

        });

        this.$on('_moveStarted', () => {

            this.data.moveZoneId = this.Move.$moveDragItem.getAttribute('zone-id');
           
        });

        this.$on('_moveEnded', () => {

            if (this.data.moveZoneId !== null) {

                let $body = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.body`);

                this._moveZone(
                    this.data.moveZoneId,
                    this.Move.current.x - this.data.containerCalibrate.x,
                    this.Move.current.y - this.data.containerCalibrate.y + $body.scrollTop
                );

            }

            this.data.overRange = false;
           
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
