<template>
    <mor-imagemap
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
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
    
    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="form-body">
        <morning-upload
            :inside-name="conf.insideName"
            :max="conf.max"
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
        
        <div class="imagemap-operate" :class="{loading : data.imagesLoading}" v-show="data.imagesLoading || data.images.length > 0" >

            <span v-show="data.imagesLoading">获取图片中...</span>

            <span class="modify-map" v-show="!data.imagesLoading && data.images.length > 0" @click="_openMap">
                <template v-if="conf.state === 'disabled' || conf.state === 'readonly'">
                    <i class="mo-icon mo-icon-imagemap"></i> 查看热区
                </template>
                <template v-else>
                    <i class="mo-icon mo-icon-imagemap"></i> 绘制热区
                </template>
            </span>

        </div>
    </div>

    <morning-dialog
        class="mor-imagemap-map show-no-animate"
        :class="{'imagemap-disabled' : (conf.state === 'disabled' || conf.state === 'readonly')}"
        color="neutral-2"
        width="60%"
        height="90%"
        :auto-close="false"
        :ref="'ui-imagemap-mapdialog-'+uiid"

        @show="_refreshScale"
    >
        <template v-slot:header>
            <div>
                <template v-if="conf.state === 'disabled' || conf.state === 'readonly'">
                    查看热区
                </template>
                <template v-else>
                    绘制热区
                </template>
            </div>
        </template>
    
        <div
            class="maparea"
            :style="{width : mapareaWidth}">
            <div
                class="zonearea"
                :class="{'over-range':data.overRange, 'disable-add-spot':data.disableAddSpot}" @mousedown.left.stop="conf.state !== 'readonly' && _createZone($event)"
            >
                <div
                    v-for="(zone, index) in data.zones"
                    class="zone"
                    :key="index"
                    :zone-id="index"
                    :style="{
                        width: (zone.w * data.scale) + 'px',
                        height: (zone.h * data.scale) + 'px',
                        top: (zone.y * data.scale) + 'px',
                        left: (zone.x * data.scale) + 'px',
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

            <template v-for="(image, index) in data.images">
                <img :src="image.path" :key="index" />
            </template>
        </div>

        <template v-slot:footer>
            <div class="imagemap-dialog-footer">
                <span class="note">
                    鼠标左键拖拽移动热区/调整尺寸，鼠标右键点击编辑数据
                    <br>
                    当前缩放：{{Math.round(data.scale * 100)}}%
                    <morning-link color="info" size="s" @emit="morning.findVM('ui-imagemap-scaledialog-'+uiid).toggle(true)">设置</morning-link>
                </span>
                <div class="operate">
                    <morning-link color="danger" class="clean-allzone-btn" v-if="conf.cleanAllzoneBtn && (conf.state !== 'disabled' && conf.state !== 'readonly')" @emit="_cleanAllzone">清除所有热区</morning-link>
                    <morning-btn color="minor" @emit="morning.findVM('ui-imagemap-mapdialog-'+uiid).toggle(false)">关闭</morning-btn>
                </div>
            </div>
        </template>
        
    </morning-dialog>

    <morning-dialog
        class="mor-imagemap-dialog-zone"
        color="neutral-2"
        width="600px"
        height="90%"
        :ref="'ui-imagemap-zonedialog-'+uiid"
    >
        <template v-slot:header>
            <div>
                编辑热区
            </div>
        </template>

        <morning-tab v-type:block>
            <template v-slot:数据 v-if="$scopedSlots.default || $slots.default">
                <div>
                    <slot :group="'ui-imagemap-data-'+uiid"></slot>
                </div>
            </template>

            <template v-slot:位置>
                <div>
                    <morning-formgroup>
                        <div class="item">
                            <h5 class="title">
                                <morning-center height-fill>Width</morning-center>
                            </h5>
                            <div class="content">
                                <p>仅支持数字</p>
                                <div class="form">
                                    <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="w" :inside-clearable="false" v-model="data.modifyZoneBasic.w"></morning-textinput>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">
                                <morning-center height-fill>Height</morning-center>
                            </h5>
                            <div class="content">
                                <p>仅支持数字</p>
                                <div class="form">
                                    <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="h" :inside-clearable="false" v-model="data.modifyZoneBasic.h"></morning-textinput>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">
                                <morning-center height-fill>Left</morning-center>
                            </h5>
                            <div class="content">
                                <p>仅支持数字</p>
                                <div class="form">
                                    <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="x" :inside-clearable="false" v-model="data.modifyZoneBasic.x"></morning-textinput>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">
                                <morning-center height-fill>Top</morning-center>
                            </h5>
                            <div class="content">
                                <p>仅支持数字</p>
                                <div class="form">
                                    <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="y" :inside-clearable="false" v-model="data.modifyZoneBasic.y"></morning-textinput>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">
                                <morning-center height-fill>Index(层级)</morning-center>
                            </h5>
                            <div class="content">
                                <p>仅支持数字，0表示采用默认层级</p>
                                <div class="form">
                                    <morning-textinput :group="'ui-imagemap-basicset-'+uiid" form-key="i" :inside-clearable="false" v-model="data.modifyZoneBasic.i"></morning-textinput>
                                </div>
                            </div>
                        </div>
                    </morning-formgroup>
                </div>
            </template>
        </morning-tab>

        <template v-slot:footer>
            <div class="imagemap-dialog-footer">
                <div class="operate">
                    <morning-link color="minor" @emit="morning.findVM('ui-imagemap-zonedialog-'+uiid).toggle(false)">取消</morning-link>
                    <morning-btn color="danger" @emit="_removeZone" v-if="conf.state !== 'disabled' && conf.state !== 'readonly'">删除</morning-btn>
                    <morning-btn color="success" @emit="_saveZoneModify" v-if="conf.state !== 'disabled' && conf.state !== 'readonly'">保存</morning-btn>
                </div>
            </div>
        </template>
        
    </morning-dialog>

    <morning-dialog
        class="mor-imagemap-dialog-scale"
        color="neutral-2"
        width="500px"
        height="300px"
        :ref="'ui-imagemap-scaledialog-'+uiid"
    >
        <template v-slot:header>
            <div>
                设置编辑区域缩放
            </div>
        </template>

        <morning-formgroup>
            <div class="item">
                <h5 class="title">
                    <morning-center height-fill>编辑区域缩放</morning-center>
                </h5>
                <div class="content">
                    <p>编辑区域缩放百分比，此设置仅修改编辑区域视觉尺寸，不影响热区真实尺寸</p>
                    <div class="form">
                        <morning-textinput v-model="data.setScale" :inside-clearable="false"></morning-textinput>
                    </div>
                </div>
            </div>
        </morning-formgroup>

        <template v-slot:footer>
            <div class="imagemap-dialog-footer">
                <div class="operate">
                    <morning-link color="minor" @emit="morning.findVM('ui-imagemap-scaledialog-'+uiid).toggle(false)">关闭</morning-link>
                </div>
            </div>
        </template>
        
    </morning-dialog>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-imagemap>
</template>
 
<script>
import extend                       from 'extend';
import Move                         from 'Utils/Move';
import GlobalEvent                  from 'Utils/GlobalEvent';

const num100 = 100;

let noopFn = () => {};

export default {
    origin : 'Form',
    name : 'imagemap',
    mixins : [Move, GlobalEvent],
    props : {
        insideName : {
            type : String,
            default : ''
        },
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
            default : noopFn
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
                insideName : this.insideName,
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

        },
        mapareaWidth : function () {

            let value = this.get();

            if (isNaN(+this.data.setScale) ||
                this.data.setScale === null ||
                (value && value.w === 0) ||
                value === undefined) {

                return `${num100}%`;

            }

            return `${value.w * this.data.setScale / num100}px`;

        },
        zoneMinSize : function () {

            return 4;

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
                disableAddSpot : false,
                scale : 1,
                setScale : null
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
            let areaX = $zonearea.getBoundingClientRect().left;
            let areaY = $zonearea.getBoundingClientRect().top;
            let id;

            id = this.addZone({
                x : this._getRealValue(x - areaX),
                y : this._getRealValue(y - areaY)
            });

            this.Vue.nextTick(() => {

                this._reizeZoneStart(evt, id, 'topleft');

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
            let evtx = this._getRealValue(evt.x);
            let evty = this._getRealValue(evt.y);
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
                w += (evtx - this.data.resizeZoneLastXY.x);

                if (w < this.zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('right', 'left');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (w > -this.zoneMinSize) {

                        zone.w = this.zoneMinSize;
                        zone.x -= zone.w;
                        this.data.resizeZoneLastXY.x = this._getRealValue($zone.getBoundingClientRect().left) - zone.w;

                    } else {

                        zone.w = Math.abs(w);
                        zone.x -= zone.w;
                        this.data.resizeZoneLastXY.x = this._getRealValue($zone.getBoundingClientRect().left) - zone.w;

                    }

                    return;
                
                }

                if ((w + x) >= this._getRealValue($zonearea.clientWidth)) {

                    w = this._getRealValue($zonearea.clientWidth) - x;
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            if (/left/.test(this.data.resizeZoneType)) {

                ox = x;
                ow = w;
                x += (evtx - this.data.resizeZoneLastXY.x);
                w -= (evtx - this.data.resizeZoneLastXY.x);

                if (w < this.zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('left', 'right');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (w > -this.zoneMinSize) {

                        zone.w = this.zoneMinSize;
                        zone.x += ow;
                        this.data.resizeZoneLastXY.x = this._getRealValue($zone.getBoundingClientRect().left) + ow;

                    } else {

                        zone.w = Math.abs(w + ow);
                        zone.x += ow;
                        this.data.resizeZoneLastXY.x = this._getRealValue($zone.getBoundingClientRect().left) + ow;

                    }

                    return;
                
                }

                if (x <= 0) {

                    x = 0;
                    w = ow - (x - ox);
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            if (/bottom/.test(this.data.resizeZoneType)) {

                oh = h;
                h += (evty - this.data.resizeZoneLastXY.y);

                if (h < this.zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('bottom', 'top');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (h > -this.zoneMinSize) {

                        zone.h = this.zoneMinSize;
                        zone.y -= zone.h;
                        this.data.resizeZoneLastXY.y = this._getRealValue($zone.getBoundingClientRect().top) - zone.h;

                    } else {

                        zone.h = Math.abs(h);
                        zone.y -= zone.h;
                        this.data.resizeZoneLastXY.y = this._getRealValue($zone.getBoundingClientRect().top) - zone.h;
                    
                    }

                    return;
                
                }

                if ((h + y) >= this._getRealValue($zonearea.clientHeight)) {

                    h = this._getRealValue($zonearea.clientHeight) - y;
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            if (/top/.test(this.data.resizeZoneType)) {

                oy = y;
                oh = h;
                y += (evty - this.data.resizeZoneLastXY.y);
                h -= (evty - this.data.resizeZoneLastXY.y);

                if (h < this.zoneMinSize) {

                    this._resizeClean();

                    this.data.resizeZoneType = this.data.resizeZoneType.replace('top', 'bottom');
                    this.data.resizeZoneEl.classList.add(`resize-${this.data.resizeZoneType}`);
                    this.data.resizeZoneEl.classList.add('resize');
                    $zonearea.classList.add(`resize-${this.data.resizeZoneType}`);

                    if (h > -this.zoneMinSize) {

                        zone.h = this.zoneMinSize;
                        zone.y += oh;
                        this.data.resizeZoneLastXY.y = this._getRealValue($zone.getBoundingClientRect().top) + oh;

                    } else {

                        zone.h = Math.abs(h + oh);
                        zone.y += oh;
                        this.data.resizeZoneLastXY.y = this._getRealValue($zone.getBoundingClientRect().top) + oh;

                    }

                    return;
                
                }

                if (y <= 0) {

                    y = 0;
                    h = oh - (y - oy);
                    this.data.overRange = true;

                } else {

                    this.data.overRange = false;

                }

            }

            this.data.resizeZoneLastXY.x = evtx;
            this.data.resizeZoneLastXY.y = evty;

            zone.x = x;
            zone.y = y;
            zone.h = h;
            zone.w = w;

        },
        _reizeZoneStart : function (evt, id, type) {

            if (this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                return;

            }

            let $zone = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector(`[zone-id="${id}"]`);
            let evtx = this._getRealValue(evt.x);
            let evty = this._getRealValue(evt.y);

            this.data.resizeZoneEl = $zone;
            this.data.resizeZoneId = id;
            this.data.resizeZoneType = type;
            this.data.resizeZoneLastXY.x = evtx;
            this.data.resizeZoneLastXY.y = evty;

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
            let clientWidth = this._getRealValue($zonearea.clientWidth);
            let clientHeight = this._getRealValue($zonearea.clientHeight);

            if (zone.x < 0) {

                zone.x = 0;

            }

            if (zone.x + zone.w > clientWidth) {

                if (zone.w < clientWidth) {

                    zone.x = clientWidth - zone.w;

                } else if (zone.x < clientWidth) {

                    zone.w = clientWidth - zone.x;

                } else {

                    zone.x = 0;
                    zone.w = clientWidth;

                }

            }

            if (zone.y < 0) {

                zone.y = 0;

            }

            if (zone.y + zone.h > clientHeight) {

                if (zone.h < clientHeight) {

                    zone.y = clientHeight - zone.h;

                } else if (zone.y < clientHeight) {

                    zone.h = clientHeight - zone.y;

                } else {

                    zone.y = 0;
                    zone.h = clientHeight;

                }

            }

            if (zone.w < this.zoneMinSize) {

                zone.w = this.zoneMinSize;

            }

            if (zone.h < this.zoneMinSize) {

                zone.h = this.zoneMinSize;

            }

        },
        _saveZoneModify : function () {

            let id = this.data.modifyZoneId;
            let data = this.morning.getGroup(`ui-imagemap-data-${this.uiid}`);

            this.updateZone(id, {
                w : +this.data.modifyZoneBasic.w,
                h : +this.data.modifyZoneBasic.h,
                x : +this.data.modifyZoneBasic.x,
                y : +this.data.modifyZoneBasic.y,
                i : +this.data.modifyZoneBasic.i,
                data : (Object.keys(data).length === 0) ? undefined : data
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

            if (this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                return;

            }

            setTimeout(() => {
                
                for (let zone of this.data.zones) {

                    this._zoneRangeFilter(zone);

                }

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

            result.images = extend(true, [], this.data.images);
            result.zones = extend(true, [], this.data.zones);
            result.w = this._getRealValue($zonearea.clientWidth);
            result.h = this._getRealValue($zonearea.clientHeight);

            // when images is empty.
            if (!result.images || result.images.length === 0) {

                result.w = 0;
                result.h = 0;

            }

            this._set(result, true);

        },
        _cleanAllzone : function () {

            /* eslint-disable no-alert */
            let result = window.confirm('确认清除所有热区？');
            /* eslint-enable no-alert */

            if (result) {

                this.cleanZones();

            }

        },
        _refreshScale : function () {

            let $zonearea = this.$refs[`ui-imagemap-mapdialog-${this.uiid}`].$el.querySelector('.zonearea');
            let value = this.get();

            if (value &&
                value.w) {

                this.data.scale = $zonearea.clientWidth / value.w;

            } else {

                this.data.scale = 1;

            }

            this._updateMoveRange();

            if (String(this.data.setScale) === 'null') {

                this.data.setScale = Math.round(this.data.scale * num100);

            }

        },
        _getRealValue : function (val) {

            return val / this.data.scale;

        },
        set : function (value) {

            let result = this._set(value);

            this._syncFromValue();

            return result;

        },
        addZone : function (zone) {

            zone = extend({
                w : this.zoneMinSize,
                h : this.zoneMinSize,
                x : 0,
                y : 0,
                i : 0
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

            if (JSON.stringify(this.data.zones[index].data) !== JSON.stringify(zone.data)) {
                
                if (this.data.zones[index].data === undefined) {

                    this.$set(this.data.zones[index], 'data', {});

                }

                this.data.zones[index].data = zone.data;
 
            }

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

        },
        getScale : function () {

            return this.data.scale;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('data.setScale', () => {

            this._refreshScale();

        });

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
                    this._getRealValue(this.Move.current.x),
                    this._getRealValue(this.Move.current.y)
                );

            }

            this.data.overRange = false;
           
        });

    }
};
</script>
