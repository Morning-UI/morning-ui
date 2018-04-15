<template>
    <mor-imagemap
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :allow-url="allowUrl"
        :allow-drag="allowDrag"
        :multi="multi"
        :validate="validate"
        :uploader="uploader"
        :clean-zone="cleanZone"
        :clean-allzone-btn="cleanAllzoneBtn"
        :max="max"
        :max-spot="maxSpot"
    >

    <morning-upload
        :form-name="conf.formName"
        :max="conf.max"
        :hide-name="conf.hideName"
        :multi="conf.multi"
        :allow-url="conf.allowUrl"
        :allow-drag="conf.allowDrag"
        :validate="conf.validate"
        :uploader="conf.uploader"
        :state="conf.state"
        accept-type="image/*"
        :ref="'ui-imagemap-upload-'+uiid"

        @value-change="_uploadValueChange"
    ></morning-upload>
    
    <div class="operate" :class="{loading : data.imagesLoading}" v-show="data.imagesLoading || data.images.length > 0" >

        <span v-show="data.imagesLoading">获取图片中...</span>

        <span class="modify-map" v-show="!data.imagesLoading && data.images.length > 0" @click="_openMap">
            <template v-if="conf.state === 'disabled'">
                <i class="morningicon">&#xe6a9;</i> 查看热区
            </template>
            <template v-else>
                <i class="morningicon">&#xe6a9;</i> 绘制热区
            </template>
        </span>

    </div>

    <morning-dialog
        class="mor-imagemap-dialog-map show-no-animate"
        :class="{'imagemap-disabled' : conf.state === 'disabled'}"
        color="gray"
        width="60%"
        height="90%"
        :auto-close="false"
        :ref="'ui-imagemap-mapdialog-'+uiid"
    >
        <header slot="header">
            <template v-if="conf.state === 'disabled'">
                查看热区
            </template>
            <template v-else>
                绘制热区
            </template>
        </header>
    
        <div class="maparea">
            <div class="zonearea" :class="{'over-range':data.overRange, 'disable-add-spot':data.disableAddSpot}" @mousedown.left.stop="_createZone($event)">
                <div
                    v-for="(zone, index) in data.zones"
                    class="zone"
                    :zone-id="index"
                    :style="{
                        width: zone.w+'px',
                        height: zone.h+'px',
                        top: zone.y+'px',
                        left: zone.x+'px',
                        'z-index' : (zone.i || (index + 1))
                    }"
                    @mousedown="_moveItemRecord(index)"
                    @drop.stop.prevent="_dropZone"
                    @contextmenu.prevent.stop="_openZoneModify(index)"
                >
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'topleft')" class="topleft"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'top')" class="top"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'topright')" class="topright"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'right')" class="right"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'bottomright')" class="bottomright"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'bottom')" class="bottom"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'bottomleft')" class="bottomleft"></div>
                    <div @mousedown.left.stop="_reizeZoneStart($event, index, 'left')" class="left"></div>
                </div>
            </div>

            <template v-for="image in data.images">
                <img :src="image.path" />
            </template>
        </div>

        <footer slot="footer">
            <span>鼠标左键拖拽移动热区/调整尺寸，鼠标右键点击编辑数据</span>
            <div>
                <morning-link color="danger clean-allzone-btn" v-if="conf.cleanAllzoneBtn && (conf.state !== 'disabled')" @emit="_cleanAllzone">清除所有热区</morning-link>
                <morning-btn color="minor" @emit="morning.findVM('ui-imagemap-mapdialog-'+uiid).toggle(false)">关闭</morning-btn>
            </div>
        </footer>
        
    </morning-dialog>

    <morning-dialog
        class="mor-imagemap-dialog-zone"
        color="gray"
        width="600px"
        height="90%"
        :ref="'ui-imagemap-zonedialog-'+uiid"
    >
        <header slot="header">
            编辑热区
        </header>

        <morning-tab class="block">
            <div slot="数据" v-if="$scopedSlots.default || $slots.default">
                <slot :group="'ui-imagemap-data-'+uiid"></slot>
            </div>

            <div slot="位置">
                <morning-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <morning-center class="fill">Width</morning-center>
                        </h5>
                        <div class="content">
                            <p>仅支持数字</p>
                            <div class="form">
                                <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="w" v-model="data.modifyZoneBasic.w"></morning-textinput>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h5 class="title">
                            <morning-center class="fill">Height</morning-center>
                        </h5>
                        <div class="content">
                            <p>仅支持数字</p>
                            <div class="form">
                                <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="h" v-model="data.modifyZoneBasic.h"></morning-textinput>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h5 class="title">
                            <morning-center class="fill">Left</morning-center>
                        </h5>
                        <div class="content">
                            <p>仅支持数字</p>
                            <div class="form">
                                <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="x" v-model="data.modifyZoneBasic.x"></morning-textinput>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h5 class="title">
                            <morning-center class="fill">Top</morning-center>
                        </h5>
                        <div class="content">
                            <p>仅支持数字</p>
                            <div class="form">
                                <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="y" v-model="data.modifyZoneBasic.y"></morning-textinput>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h5 class="title">
                            <morning-center class="fill">Index(层级)</morning-center>
                        </h5>
                        <div class="content">
                            <p>仅支持数字，0表示采用默认层级</p>
                            <div class="form">
                                <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="i" v-model="data.modifyZoneBasic.i"></morning-textinput>
                            </div>
                        </div>
                    </div>
                </morning-formgroup>
            </div>
        </morning-tab>

        <footer slot="footer">
            <div>
                <morning-link color="minor" @emit="morning.findVM('ui-imagemap-zonedialog-'+uiid).toggle(false)">取消</morning-link>
                <morning-btn color="danger" @emit="_removeZone" v-if="conf.state !== 'disabled'">删除</morning-btn>
                <morning-btn color="success" @emit="_saveZoneModify" v-if="conf.state !== 'disabled'">保存</morning-btn>
            </div>
        </footer>
        
    </morning-dialog>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-imagemap>
</template>
 
<script>
import extend                       from 'extend';
import Move                         from 'Utils/Move';
import GlobalEvent                  from 'Utils/GlobalEvent';

const zoneMinSize = 4;

export default {
    origin : 'Form',
    name : 'imagemap',
    mixins : [Move, GlobalEvent],
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
        cleanAllzoneBtn : {
            type : Boolean,
            default : true
        },
        max : {
            type : Number,
            default : 1
        },
        maxSpot : {
            type : Number,
            default : Infinity
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
                cleanAllzoneBtn : this.cleanAllzoneBtn,
                max : this.max,
                maxSpot : this.maxSpot
            };

        }
    },
    data : function () {

        return {
            data : {
                inited : false,
                uploadValueSet : false,
                syncing : false,
                zoneId : 0,
                images : [],
                imagesLoading : false,
                moveZoneId : null,
                // containerCalibrate : {
                //     x : 0,
                //     y : 0
                // },
                overRange : false,
                autoScrollCheck : null,
                // resizing : false,
                resizeZoneId : null,
                resizeZoneEl : null,
                resizeZoneType : null,
                resizeZoneLastXY : {
                    x : 0,
                    y : 0
                },
                zones : [],
                modifyZoneId : null,
                modifyZoneBasic : {},
                modifyZoneData : undefined,
                disableAddSpot : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                value === null ||
                Object.prototype.toString.call(value) !== '[object Object]' ||
                typeof value.images !== 'object' ||
                typeof value.zones !== 'object' ||
                !(value.images instanceof Array) ||
                !(value.zones instanceof Array) ||
                typeof value.w !== 'number' ||
                typeof value.h !== 'number') {

                value = {
                    images : [],
                    zones : [],
                    w : 0,
                    h : 0
                };

            }

            if (this.conf.maxSpot &&
                value &&
                value.zones &&
                value.zones.length > this.conf.maxSpot) {

                value.zones = value.zones.slice(0, this.conf.maxSpot);

            }

            return value;

        },
        _createZone : function (evt) {

            if (this.conf.state === 'disabled' ||
                this.data.disableAddSpot === true) {

                return;

            }

            if (evt.srcElement.classList.value.split(' ').indexOf('zonearea') === -1) {

                return;

            }

            let x = evt.x;
            let y = evt.y;
            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.zonearea');
            let areaX = $zonearea.getBoundingClientRect().x;
            let areaY = $zonearea.getBoundingClientRect().y;
            let id;

            id = this.addZone({
                x : x - areaX,
                y : y - areaY
            });

            this.Vue.nextTick(() => {

                this._reizeZoneStart(evt, id, 'bottomright');

            });

        },
        _resizeZoneMove : function (evt) {

            let zone = this.data.zones[this.data.resizeZoneId];
            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.zonearea`);
            let $zone = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`[zone-id="${this.data.resizeZoneId}"]`);
            let x = +zone.x;
            let y = +zone.y;
            let w = +zone.w;
            let h = +zone.h;
            let ox,
                oy,
                ow,
                oh;

            this._resizeClean();

            this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
            this.data.resizeZoneEl.classList.add('resize');
            $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

            if (/right/.test(this.data.resizeZoneType)) {

                ow = w;
                w += (evt.x - this.data.resizeZoneLastXY.x);

                if (w < zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('right', 'left');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (w > -zoneMinSize) {

                        zone.w = zoneMinSize;
                        zone.x -= zone.w;
                        this.data.resizeZoneLastXY.x = $zone.getBoundingClientRect().x - zone.w;

                    } else {

                        zone.w = Math.abs(w);
                        zone.x -= zone.w;
                        this.data.resizeZoneLastXY.x = $zone.getBoundingClientRect().x - zone.w;

                    }

                    return;
                
                }

                if ((w + x) > $zonearea.clientWidth) {

                    w = $zonearea.clientWidth - x;
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            if (/left/.test(this.data.resizeZoneType)) {

                ox = x;
                ow = w;
                x += (evt.x - this.data.resizeZoneLastXY.x);
                w -= (evt.x - this.data.resizeZoneLastXY.x);

                if (w < zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('left', 'right');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (w > -zoneMinSize) {

                        zone.w = zoneMinSize;
                        zone.x += ow;
                        this.data.resizeZoneLastXY.x = $zone.getBoundingClientRect().x + ow;

                    } else {

                        zone.w = Math.abs(w + ow);
                        zone.x += ow;
                        this.data.resizeZoneLastXY.x = $zone.getBoundingClientRect().x + ow;

                    }

                    return;
                
                }

                if (x < 0) {

                    x = 0;
                    w = ow - (x - ox);
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            if (/bottom/.test(this.data.resizeZoneType)) {

                oh = h;
                h += (evt.y - this.data.resizeZoneLastXY.y);

                if (h < zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('bottom', 'top');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (h > -zoneMinSize) {

                        zone.h = zoneMinSize;
                        zone.y -= zone.h;
                        this.data.resizeZoneLastXY.y = $zone.getBoundingClientRect().y - zone.h;

                    } else {

                        zone.h = Math.abs(h);
                        zone.y -= zone.h;
                        this.data.resizeZoneLastXY.y = $zone.getBoundingClientRect().y - zone.h;
                    
                    }

                    return;
                
                }

                if ((h + y) > $zonearea.clientHeight) {

                    h = $zonearea.clientHeight - y;
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            if (/top/.test(this.data.resizeZoneType)) {

                oy = y;
                oh = h;
                y += (evt.y - this.data.resizeZoneLastXY.y);
                h -= (evt.y - this.data.resizeZoneLastXY.y);

                if (h < zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('top', 'bottom');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (h > -zoneMinSize) {

                        zone.h = zoneMinSize;
                        zone.y += oh;
                        this.data.resizeZoneLastXY.y = $zone.getBoundingClientRect().y + oh;

                    } else {

                        zone.h = Math.abs(h + oh);
                        zone.y += oh;
                        this.data.resizeZoneLastXY.y = $zone.getBoundingClientRect().y + oh;

                    }

                    return;
                
                }

                if (y < 0) {

                    y = 0;
                    h = oh - (y - oy);
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            this.data.resizeZoneLastXY.x = evt.x;
            this.data.resizeZoneLastXY.y = evt.y;

            zone.x = x;
            zone.y = y;
            zone.h = h;
            zone.w = w;

        },
        _reizeZoneStart : function (evt, id, type) {

            if (this.conf.state === 'disabled') {

                return;

            }

            let $zone = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`[zone-id="${id}"]`);

            this.data.resizeZoneEl = $zone;
            this.data.resizeZoneId = id;
            this.data.resizeZoneType = type;
            this.data.resizeZoneLastXY.x = evt.x;
            this.data.resizeZoneLastXY.y = evt.y;

            this._globalEventAdd('mousemove', '_resizeZoneMove');
            this._globalEventAdd('mouseup', '_resizeZoneStop');

        },
        _resizeClean : function () {
            
            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.zonearea');
            
            this.data.resizeZoneEl.classList.remove('resize-top');
            this.data.resizeZoneEl.classList.remove('resize-bottom');
            this.data.resizeZoneEl.classList.remove('resize-left');
            this.data.resizeZoneEl.classList.remove('resize-right');
            this.data.resizeZoneEl.classList.remove('resize-topleft');
            this.data.resizeZoneEl.classList.remove('resize-topright');
            this.data.resizeZoneEl.classList.remove('resize-bottomleft');
            this.data.resizeZoneEl.classList.remove('resize-bottomright');
            this.data.resizeZoneEl.classList.remove('resize');

            $zonearea.classList.remove('resize-top');
            $zonearea.classList.remove('resize-bottom');
            $zonearea.classList.remove('resize-left');
            $zonearea.classList.remove('resize-right');
            $zonearea.classList.remove('resize-topleft');
            $zonearea.classList.remove('resize-topright');
            $zonearea.classList.remove('resize-bottomleft');
            $zonearea.classList.remove('resize-bottomright');

        },
        _resizeZoneStop : function (evt) {

            evt.stopPropagation();

            this._resizeClean();

            this._globalEventRemove('mousemove', '_resizeZoneMove');
            this._globalEventRemove('mouseup', '_resizeZoneStop');

            this.data.overRange = false;

        },
        _zoneRangeFilter : function (zone) {

            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.zonearea`);

            if (zone.x < 0) {

                zone.x = 0;

            }

            if (zone.x + zone.w > $zonearea.clientWidth) {

                if (zone.w < $zonearea.clientWidth) {

                    zone.x = $zonearea.clientWidth - zone.w;

                } else if (zone.x < $zonearea.clientWidth) {

                    zone.w = $zonearea.clientWidth - zone.x;

                } else {

                    zone.x = 0;
                    zone.w = $zonearea.clientWidth;

                }

            }

            if (zone.y < 0) {

                zone.y = 0;

            }

            if (zone.y + zone.h > $zonearea.clientHeight) {

                if (zone.h < $zonearea.clientHeight) {

                    zone.y = $zonearea.clientHeight - zone.h;

                } else if (zone.y < $zonearea.clientHeight) {

                    zone.h = $zonearea.clientHeight - zone.y;

                } else {

                    zone.y = 0;
                    zone.h = $zonearea.clientHeight;

                }

            }

            if (zone.w < zoneMinSize) {

                zone.w = zoneMinSize;

            }

            if (zone.h < zoneMinSize) {

                zone.h = zoneMinSize;

            }

        },
        _saveZoneModify : function () {

            let id = this.data.modifyZoneId;

            this.updateZone(id, {
                w : +this.data.modifyZoneBasic.w,
                h : +this.data.modifyZoneBasic.h,
                x : +this.data.modifyZoneBasic.x,
                y : +this.data.modifyZoneBasic.y,
                i : +this.data.modifyZoneBasic.i,
                data : this.morning.getGroup(`ui-imagemap-data-${this.uiid}`)
            });

            this.$refs[`ui-imagemap-zonedialog-${this.uiid}`].toggle(false);

        },
        _removeZone : function () {

            this.removeZone(this.data.modifyZoneId);
            this.$refs[`ui-imagemap-zonedialog-${this.uiid}`].toggle(false);

        },
        _openZoneModify : function (id) {

            let zone = this.data.zones[id];

            this.data.modifyZoneId = id;
            this.data.modifyZoneBasic = {
                w : zone.w,
                h : zone.h,
                x : zone.x,
                y : zone.y,
                i : zone.i
            };
            this.morning.cleanGroup(`ui-imagemap-data-${this.uiid}`);
            this.morning.setGroup(`ui-imagemap-data-${this.uiid}`, zone.data || {});
            this.$refs[`ui-imagemap-zonedialog-${this.uiid}`].toggle(true);

        },
        _openMap : function () {

            this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].toggle(true);

            if (this.conf.state === 'disabled') {

                return;

            }

            setTimeout(() => {
                
                for (let zone of this.data.zones) {

                    this._zoneRangeFilter(zone);

                }

                this._updateMoveRange();
                this.Move.target = '.zone';
                this.Move.scrollContainer = '.body';
                this.Move.container = '.zonearea';
                this.Move.$root = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el;
                this.Move.delay = 0;
                this.Move.type = 'absolute';
                this.Move.can = true;

            });

        },
        _uploadValueChange : function () {

            let upload = this.$refs[`ui-imagemap-upload-${this.uiid}`];

            if (!this.data.inited) {

                return;

            }

            if (upload.isUploading()) {

                return;

            }

            let images = upload.get();
            let loadList = [];

            if (this.conf.cleanZone && !this.data.uploadValueSet) {

                this.cleanZones();

            }

            this.data.imagesLoading = true;

            for (let image of images) {

                let imgEle = new Image();

                imgEle.src = image.path;

                loadList.push(new Promise(resolve => {
                
                    imgEle.addEventListener('load', resolve);

                }));

            }

            Promise
                .all(loadList)
                .then(() => {

                    this.data.imagesLoading = false;
                    this.data.images = images;

                });

        },
        _updateMoveRange : function () {

            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`.zonearea`);
            
            this.Move.range = [0, 0, $zonearea.clientWidth, $zonearea.clientHeight];

        },
        _dropZone : function () {},
        _moveZone : function (id, x, y) {

            let zone = this.data.zones[id];

            if (zone) {

                zone.x = x;
                zone.y = y;

            }

        },
        _syncFromValue : function () {

            let value = this.get();

            this.data.syncing = true;

            if (typeof value === 'object' &&
                value !== null) {

                this.data.images = value.images || [];
                this.data.zones = value.zones || [];

            } else {

                this.data.images = [];
                this.data.zones = [];

            }

            this.Vue.nextTick(() => {

                this.data.syncing = false;

            });

        },
        _syncFromZoneImage : function () {

            if (this.data.syncing) {

                return;

            }

            let result = {};
            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.zonearea');

            result.images = this.data.images;
            result.zones = this.data.zones;
            result.w = $zonearea.clientWidth;
            result.h = $zonearea.clientHeight;

            // when images is empty.
            if (!result.images || result.images.length === 0) {

                result.w = 0;
                result.h = 0;

            }

            this._set(result, true);

        },
        _cleanAllzone : function () {

            let result = window.confirm('确认清除所有热区？');

            if (result) {

                this.cleanZones();

            }

        },
        set : function (value) {

            let result = this._set(value);

            this._syncFromValue();

            return result;

        },
        addZone : function (zone) {

            zone = extend({
                w : zoneMinSize,
                h : zoneMinSize,
                x : 0,
                y : 0,
                i : 0,
                data : undefined
            }, zone);

            this._zoneRangeFilter(zone);

            let index = this.data.zones.push(zone);

            return index - 1;

        },
        removeZone : function (index) {

            this.data.zones.splice(index, 1);

            return this;

        },
        updateZone : function (index, zone) {

            zone.w = +zone.w;
            zone.h = +zone.h;
            zone.x = +zone.x;
            zone.y = +zone.y;
            zone.i = +zone.i || 0;

            extend(true, this.data.zones[index], zone);

            this._zoneRangeFilter(this.data.zones[index]);

            if (this.data.zones[index].i < 1) {

                this.data.zones[index].i = 0;

            }

            if (this.data.zones[index].data === undefined) {

                delete this.data.zones[index].data;

            }

            return this;

        },
        cleanZones : function () {

            this.data.zones = [];

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('data.zones', () => {

            if (this.conf.maxSpot &&
                this.data &&
                this.data.zones &&
                this.data.zones.length >= this.conf.maxSpot) {

                this.data.disableAddSpot = true;

            } else {

                this.data.disableAddSpot = false;

            }

            this._syncFromZoneImage();

        }, {
            deep : true
        });

        this.$watch('data.images', (newValue, oldValue) => {

            if (JSON.stringify(newValue) === JSON.stringify(oldValue)) {

                return;

            }

            this._syncFromZoneImage();
            this.data.uploadValueSet = true;
            this.$refs[`ui-imagemap-upload-${this.uiid}`]._set(this.data.images, true);
            this.Vue.nextTick(() => {

                this.data.uploadValueSet = false;

            });

        }, {
            deep : true
        });

        this.set(this.data.value);

        this.Vue.nextTick(() => {

            this.data.inited = true;

        });

        this.$on('_moveOnXMin', () => (this.data.overRange = true));
        this.$on('_moveOnYMin', () => (this.data.overRange = true));
        this.$on('_moveOnXMax', () => (this.data.overRange = true));
        this.$on('_moveOnYMax', () => (this.data.overRange = true));
        this.$on('_moveOffXMin', () => (this.data.overRange = false));
        this.$on('_moveOffYMin', () => (this.data.overRange = false));
        this.$on('_moveOffXMax', () => (this.data.overRange = false));
        this.$on('_moveOffYMax', () => (this.data.overRange = false));

        this.$on('_moveStarted', () => {

            this.data.moveZoneId = this.Move.$moveDragItem.getAttribute('zone-id');
           
        });

        this.$on('_moveEnded', () => {

            if (this.data.moveZoneId !== null) {

                this._moveZone(
                    this.data.moveZoneId,
                    this.Move.current.x,
                    this.Move.current.y
                );

            }

            this.data.overRange = false;
           
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
