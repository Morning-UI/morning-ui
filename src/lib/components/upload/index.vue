<template>
    <mor-upload
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :item-name="itemName"
        :type="type"
        :accept-type="acceptType"
        :multi="multi"
        :max="max"
        :validate="validate"
        :uploader="uploader"
        :keep-over-limit-file="keepOverLimitFile"
        :keep-origin-name="keepOriginName"
        :allow-url="allowUrl"
        :allow-drag="allowDrag"
        :listType="listType"
        :showList="showList"
        :hidden-max-alert="hiddenMaxAlert"

        @dragover.stop.prevent="_dragover"
        @dragleave="_dragleave"
        @drop.stop.prevent="_drop"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <input
        type="file"
        class="fileinput"
    
        :key="data.inputKey"
        :id="'ui-select-fileinput-' + uiid"
        :accept="conf.acceptType"
        :multiple="conf.multi"
        
        @change="_getFiles"
    />

    <div class="form-body">
        <template v-if="conf.type === 'input'">
            <div class="upload-wrap upload-input">
                <div class="inside-name" v-if="!!conf.insideName">
                    <morning-center class="fill">{{conf.insideName}}</morning-center>
                </div>
                <div class="filelist">
                    <template v-for="(item, index) in data.showFiles">
                        <a
                            class="file-item"
                            target="_blank;"
                            href="javascript:;"
                            :index="index"
                            :key="index"
                            :class="item.classList"

                            @click="_isImage(item) ? _openPreview(item.path) : _openFile(item.path)"
                        >
                            <i
                                class="progress"
                                :class="item.classList"
                                :style="{
                                    width : (item.classList.uploading) ? ((30 + (+item.progress) * 60) + '%') : 'auto'
                                }"
                            ></i>

                            <span>
                                {{item.name}}
                            </span>

                            <i class="mo-icon mo-icon-close remove" @click.prevent.stop="_removeFile(index)"></i>
                            <i class="mo-icon mo-icon-arrow-up uploading" title="上传中"></i>
                            <i class="mo-icon mo-icon-refresh reupload" title="重新上传" @click.prevent.stop="_upload(index)"></i>
                        </a>
                    </template>

                    <label
                        class="upload-file"
                        v-if="conf.state !== 'disabled' && conf.state !== 'readonly' && !ismax"
                        @click="_emitFilePicker"
                        :id="'mor-upload-input-remote-'+uiid"
                    >
                        <i class="mo-icon mo-icon-upload"></i>
                        <span>上传{{conf.itemName}}</span>
                    </label>

                    <morning-popover :target="'#mor-upload-input-remote-'+uiid" v-if="conf.allowUrl">
                        <div class="url-upload-box">
                            <morning-btn :ref="'mor-url-btn-'+uiid" size="xs" color="neutral-2" @emit="_uploadRemoteFile">通过URL上传</morning-btn>
                        </div>
                    </morning-popover>
                </div>
                <div class="ismax-note" v-if="ismax && !conf.hiddenMaxAlert">
                    <morning-center class="fill">最多只能上传{{conf.max}}个文件</morning-center>
                </div>

                <div class="drag-note" :class="{show: data.dragover}"><p><i class="mo-icon mo-icon-upload"></i> 松开鼠标上传</p></div>
            </div>
        </template>

        <template v-else-if="conf.type === 'box'">
            <div class="upload-wrap upload-box">
                <template v-if="data.showFiles.length === 0">
                    <div class="upload-box-con">
                        <label
                            class="upload-file"
                            @click="_emitFilePicker"
                            :id="'mor-upload-box-remote-'+uiid"
                        >
                            <i class="mo-icon mo-icon-upload"></i>
                            <span>上传{{conf.itemName}}</span>
                            <div class="upload-box-note">
                                <morning-center class="fill">{{conf.insideName}}</morning-center>
                            </div>
                        </label>

                        <morning-popover :target="'#mor-upload-box-remote-'+uiid" v-if="conf.allowUrl">
                            <div class="url-upload-box">
                                <morning-btn :ref="'mor-url-btn-'+uiid" size="xs" color="neutral-2" @emit="_uploadRemoteFile">通过URL上传</morning-btn>
                            </div>
                        </morning-popover>
                    </div>
                </template>

                <template v-else>
                    <div
                        v-if="data.showFiles[data.currentPreview]"
                        class="upload-box-preview"
                        :class="data.showFiles[data.currentPreview].classList"
                    >
                        <i
                            class="progress"
                            :class="data.showFiles[data.currentPreview].classList"
                            :style="{
                                width : (data.showFiles[data.currentPreview].classList.uploading) ? ((30 + (+data.showFiles[data.currentPreview].progress) * 60) + '%') : 'auto'
                            }"
                        ></i>

                        <img
                            v-if="
                                data.showFiles[data.currentPreview].status === 'done' &&
                                _isImage(data.showFiles[data.currentPreview])
                            "
                            :src="data.showFiles[data.currentPreview].path" class="upload-box-preview-img" />
                        <div v-else class="upload-box-preview-file">
                            <i class="mo-icon mo-icon-file-o"></i>
                            <span>{{data.showFiles[data.currentPreview].name}}</span>

                            <div class="upload-failed-operate">
                                <i class="mo-icon mo-icon-refresh reupload" title="重新上传" @click.prevent="_upload(data.currentPreview)"></i>
                                <i class="mo-icon mo-icon-close remove" @click.prevent="_removeFile(data.currentPreview)"></i>
                            </div>
                        </div>
                    </div>
                    <div class="upload-box-operate" v-if="conf.state !== 'readonly' && conf.state !== 'disabled' && data.showFiles[data.currentPreview].status === 'done'">
                        <a href="javascript:;" title="打开文件" @click="_isImage(data.showFiles[data.currentPreview]) ? _openPreview(data.showFiles[data.currentPreview].path) : _openFile(data.showFiles[data.currentPreview].path)">
                            <i class="mo-icon mo-icon-fullscreen"></i>
                        </a>
                        <a href="javascript:;" title="上传文件" @click="_emitFilePicker" v-if="!ismax">
                            <i class="mo-icon mo-icon-upload"></i>
                        </a>
                        <a href="javascript:;" title="删除文件" class="del" @click="_removeFile(data.currentPreview)">
                            <i class="mo-icon mo-icon-del"></i>
                        </a>
                        <div class="ismax-note" v-if="ismax && !conf.hiddenMaxAlert"><morning-center class="fill">最多只能上传{{conf.max}}个文件</morning-center></div>
                    </div>
                </template>

                <div class="drag-note" :class="{show: data.dragover}"><p><i class="mo-icon mo-icon-upload"></i> 松开鼠标上传</p></div>
            </div>
            <div class="filelist" v-if="conf.showList && data.showFiles.length > 0" :class="{'thumbnail-list' : conf.listType === 'thumbnail'}">
                <template v-for="(item, index) in data.showFiles">
                    <a
                        class="file-item"
                        target="_blank;"
                        href="javascript:;"
                        :index="index"
                        :key="index"
                        :class="[{
                            current : index === data.currentPreview,
                            thumbnail : conf.listType === 'thumbnail'
                        }, item.classList]"

                        @click="(conf.state === 'readonly' || conf.state === 'disabled') ? (_isImage(item) ? _openPreview(item.path) : _openFile(item.path)) : _switchPreview(index)"
                    >
                        <i
                            class="progress"
                            :class="item.classList"
                            :style="{
                                width : (item.classList.uploading) ? ((30 + (+item.progress) * 60) + '%') : 'auto'
                            }"
                        ></i>

                        <span v-if="conf.listType === 'file'">
                            {{item.name}}
                        </span>

                        <img :src="item.path" v-if="conf.listType === 'thumbnail' && item.status === 'done' && _isImage(item)" />
                        <div class="preview-file" v-else>
                            <i class="mo-icon mo-icon-file-o"></i>
                        </div>

                        <div class="upload-operate">
                            <i class="mo-icon mo-icon-fullscreen openfile" v-if="item.status === 'done'" title="打开文件" @click.prevent.stop="_isImage(item) ? _openPreview(item.path) : _openFile(item.path)"></i>
                            <i class="mo-icon mo-icon-refresh reupload" v-if="item.status === 'fail'" title="重新上传" @click.prevent.stop="_upload(index)"></i>
                            <i class="mo-icon mo-icon-close remove" v-if="item.status === 'done' || item.status === 'fail'" @click.prevent.stop="_removeFile(index)"></i>
                            <i class="mo-icon mo-icon-arrow-up uploading" v-if="item.status === 'uploading'" title="上传中"></i>
                        </div>
                    </a>
                </template>
            </div>
        </template>

        <template v-else-if="conf.type === 'button'">
            <morning-popover :target="'#mor-upload-button-remote-'+uiid" v-if="conf.allowUrl">
                <div class="url-upload-box">
                    <morning-btn :ref="'mor-url-btn-'+uiid" size="xs" color="neutral-2" @emit="_uploadRemoteFile">通过URL上传</morning-btn>
                </div>
            </morning-popover>
            <morning-btn
                color="neutral-1"
                class="upload-file upload-button"
                :state="ismax ? 'disabled' : conf.state"
                :id="'mor-upload-button-remote-'+uiid"
                @emit="_emitFilePicker"
            >
                <i class="mo-icon mo-icon-upload"></i>
                <span v-if="data.dragover">松开鼠标上传</span>
                <span v-else>上传{{conf.itemName}}</span>
            </morning-btn>
            <div class="inside-name" v-if="!!conf.insideName">{{conf.insideName}}</div>
            <div class="inside-name max" v-if="ismax && !conf.hiddenMaxAlert">最多只能上传{{conf.max}}个文件</div>
            <div
                class="filelist"
                v-if="conf.showList && (data.showFiles.length > 0 || !!conf.insideName)"
                :class="{
                    'type-box' : conf.type === 'box',
                    'type-button' : conf.type === 'button',
                    'thumbnail-list' : conf.listType === 'thumbnail'
                }"
            >
                <template v-for="(item, index) in data.showFiles">
                    <a
                        class="file-item"
                        target="_blank;"
                        href="javascript:;"
                        :index="index"
                        :key="index"
                        :class="[{
                            current : index === data.currentPreview,
                            thumbnail : conf.listType === 'thumbnail'
                        }, item.classList]"

                        @click="_isImage(item) ? _openPreview(item.path) : _openFile(item.path)"
                    >
                        <i
                            class="progress"
                            :class="item.classList"
                            :style="{
                                width : (item.classList.uploading) ? ((30 + (+item.progress) * 60) + '%') : 'auto'
                            }"
                        ></i>

                        <span v-if="conf.listType === 'file'">
                            {{item.name}}
                        </span>

                        <img :src="item.path" v-if="conf.listType === 'thumbnail' && item.status === 'done' && _isImage(item)" />
                        <div class="preview-file" v-else>
                            <i class="mo-icon mo-icon-file-o"></i>
                        </div>

                        <div class="upload-operate">
                            <i class="mo-icon mo-icon-fullscreen openfile" v-if="item.status === 'done'" title="打开文件" @click.prevent.stop="_isImage(item) ? _openPreview(item.path) : _openFile(item.path)"></i>
                            <i class="mo-icon mo-icon-refresh reupload" v-if="item.status === 'fail'" title="重新上传" @click.prevent.stop="_upload(index)"></i>
                            <i class="mo-icon mo-icon-close remove" v-if="item.status === 'done' || item.status === 'fail'" @click.prevent.stop="_removeFile(index)"></i>
                            <i class="mo-icon mo-icon-arrow-up uploading" v-if="item.status === 'uploading'" title="上传中"></i>
                        </div>
                    </a>
                </template>
            </div>
        </template>
    </div>

    <morning-dialog
        :ref="'ui-dialog-preview-'+uiid"
        class="ui-dialog-preview"
        :width="'auto'"
        :height="'auto'"
        show-type="center"

        @hide="_previewHide"
    >
        <img
            :src="data.imgPreviewUrl"
            :style="{
                maxWidth : '100%',
                maxHeight : '100%'
            }"
        />
    </morning-dialog>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-upload>
</template>
 
<script>
import axios                       from 'Npm/axios/dist/axios.min.js';
import extend                      from 'extend';

let noopFn = () => {};

export default {
    origin : 'Form',
    name : 'upload',
    props : {
        insideName : {
            type : String,
            default : ''
        },
        itemName : {
            type : String,
            default : ''
        },
        type : {
            type : String,
            default : 'input',
            validator : (value => ['input', 'box', 'button'].indexOf(value) !== -1)
        },
        acceptType : {
            type : String,
            default : ''
        },
        multi : {
            type : Boolean,
            default : false
        },
        max : {
            type : Number,
            default : Infinity
        },
        validate : {
            type : Function,
            default : noopFn
        },
        uploader : {
            type : Function,
            default : undefined
        },
        keepOverLimitFile : {
            type : Boolean,
            default : true
        },
        keepOriginName : {
            type : Boolean,
            default : false
        },
        allowUrl : {
            type : Boolean,
            default : false
        },
        allowDrag : {
            type : Boolean,
            default : false
        },
        listType : {
            type : String,
            default : 'file',
            validator : (value => ['filename', 'thumbnail'].indexOf(value) !== -1)
        },
        showList : {
            type : Boolean,
            default : true
        },
        hiddenMaxAlert : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                itemName : this.itemName,
                type : this.type,
                acceptType : this.acceptType,
                multi : this.multi,
                max : this.max,
                validate : this.validate,
                uploader : this.uploader,
                keepOverLimitFile : this.keepOverLimitFile,
                keepOriginName : this.keepOriginName,
                allowUrl : this.allowUrl,
                allowDrag : this.allowDrag,
                listType : this.listType,
                showList : this.showList,
                hiddenMaxAlert : this.hiddenMaxAlert
            };

        },
        moreClass : function () {

            let classes = {};

            classes['type-upload-box'] = (this.conf.type === 'box');

            return classes;

        },
        ismax : function () {

            if (this.conf.max &&
                this.data.files &&
                this.data.files.length >= this.conf.max) {

                return true;

            }

            return false;

        }
    },
    data : function () {

        return {
            data : {
                inputKey : 0,
                files : [],
                uploadQueue : [],
                uploading : false,
                failNote : '',
                showFiles : [],
                currentPreview : -1,
                fetchRemoteFile : false,
                dragover : false,
                imgPreviewUrl : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                return [];

            }

            value = this._maxFilter(value);

            return value;

        },
        _isImage : function (file) {

            if ((
                file.file && /^image/.test(file.file.type)
            ) || (
                file.path && /\.(png|jpg|jpeg|gif)$/.test(file.path)
            )) {

                return true;

            }

            return false;

        },
        _maxFilter : function (value) {

            if (this.conf.max &&
                value.length > this.conf.max) {

                return value.slice(0, this.conf.max);

            }

            return value;

        },
        _emitFilePicker : function () {

            if (this.conf.state === 'readonly' ||
                this.conf.state === 'disabled' ||
                this.ismax ||
                this.data.fetchRemoteFile) {

                return;

            }

            document.querySelector(`#ui-select-fileinput-${this.uiid}`).click();
        
        },
        _getFiles : function (evt) {

            let files = evt.target.files || evt.dataTransfer.files;
            let len = files.length;

            if (!this.conf.keepOverLimitFile && len > this.conf.max) {

                /* eslint-disable no-alert */
                alert(`最多只能上传${this.conf.max}个文件`);
                /* eslint-enable no-alert */

                return false;

            }

            if (!this.conf.multi && len > 1) {

                len = 1;

            }

            for (let i = 0; i < len; i++) {

                this._addFile(files.item(i));

            }

            this.data.inputKey++;

        },
        _addFile : function (file) {

            let {index} = this._createNewFileObj({
                file,
                uploadnow : true
            });

            if (!/^(http|https|\/\/)/.test(file.path)) {

                this._upload(index);

            }

        },
        _createNewFileObj : function (options) {

            let fileObj = extend(true, {
                file : undefined,
                name : undefined,
                status : 'wait',
                uploadnow : false,
                size : 0,
                data : undefined,
                path : undefined,
                progress : 0,
                classList : {
                    fail : false,
                    uploading : false,
                    uploaded : false,
                    done : false,
                    wait : true,
                    verification : false,
                    failNote : ''
                }
            }, options);

            let index = this.data.files.push(fileObj) - 1;

            if (fileObj.file) {

                fileObj.size = fileObj.file.size;
                fileObj.name = fileObj.file.name;

            } else if (fileObj.path) {

                if (this.conf.keepOriginName) {

                    fileObj.name = options.name || this._getName(fileObj.path);

                } else {

                    fileObj.name = this._getName(fileObj.path);
                
                }

            }

            this._setStatus(index, fileObj.status);

            return {
                index,
                fileObj
            };

        },
        _getName : function (filepath) {

            return filepath.split('/').pop();

        },
        _setStatus : function (index, status) {

            // status include: wait/uploading/done/fail/uploaded
            this.data.files[index].status = status;

            for (let key in this.data.files[index].classList) {

                if (key !== status) {

                    this.data.files[index].classList[key] = false;

                } else {

                    this.data.files[index].classList[key] = true;

                }

            }

        },
        _upload : function (index) {

            this.data.uploadQueue.push(index);
            this._execUploadQueue();

        },
        _execUploadQueue : function () {

            if (this.data.uploading) {

                return;

            }

            this.data.failNote = '';
            this.data.uploading = true;
            this._execUploadOnce();

        },
        _execUploadOnce : function () {

            if (this.data.uploadQueue.length === 0) {

                this.data.uploading = false;

                return;

            }

            let index = this.data.uploadQueue.shift(),
                uploadObj = {
                    onUploadProgress : xhr => {

                        if (xhr &&
                            xhr.upload &&
                            typeof xhr.upload.addEventListener === 'function') {

                            xhr.upload.addEventListener('progress', evt => {

                                this.data.files[index].progress = +(evt.loaded / evt.total) || 0;

                            }, false);

                        }

                    },
                    file : null,
                    name : null
                };

            Promise
                .resolve()
                .then(() => {

                    this._setStatus(index, 'verification');

                    // do not use this.ismax
                    if (this.conf.max && this.data.value.length >= this.conf.max) {

                        return Promise.reject('upload file num is max.');

                    }

                    uploadObj.file = this.data.files[index].file;
                    uploadObj.name = this.data.files[index].name;

                    if (typeof this.conf.validate === 'function') {

                        if (/^image/.test(uploadObj.file.type)) {
                            
                            return this
                                ._getImageWh(uploadObj.file)
                                .then(image => (this.conf.validate(uploadObj.file, {
                                    width : image.width,
                                    height : image.height,
                                    size : uploadObj.file.size
                                })));

                        }

                        return this.conf.validate(uploadObj.file, {
                            size : uploadObj.file.size
                        });

                    }

                    return true;

                })
                .then(result => {

                    if (typeof result === 'string') {

                        this.data.failNote = result;

                        return Promise.reject('file not pass validate.');

                    }

                    this._setStatus(index, 'uploading');

                    if ((!this.conf.uploader || typeof this.conf.uploader !== 'function') &&
                        (this.morning._options.uploader === null || typeof this.morning._options.uploader !== 'function')) {

                        return Promise.reject('file uploader must be a function.');

                    }

                })
                .then(() => {

                    if (typeof this.conf.uploader === 'function') {

                        return this.conf.uploader(uploadObj);

                    }

                    return this.morning._options.uploader(uploadObj);

                })
                .then(result => {

                    if (this.data.uploading === false) {

                        return;

                    }

                    if (result.status) {
                        
                        if (!this.conf.keepOriginName) {

                            this.data.files[index].name = this._getName(result.path);

                        }

                        this.data.files[index].path = result.path;
                        this.data.files[index].data = result.data;
                        this._set(this._fetchValueFromFiles(), true, true);
                        this._setStatus(index, 'uploaded');
                        this._setStatus(index, 'done');
                        this._execUploadOnce();

                    } else {

                        this.data.failNote = result.message || '上传失败';
                        this._setStatus(index, 'fail');
                        this._execUploadOnce();

                    }

                })
                .catch(() => {

                    if (this.data.uploading === false) {

                        return;

                    }

                    this._setStatus(index, 'fail');
                    this._execUploadOnce();

                });

        },
        _getImageWh : function (file) {

            return new Promise(resolve => {

                let reader = new FileReader();

                reader.onload = result => {
                    
                    let image = new Image();

                    if (result) {
                        
                        image.onload = () => {

                            resolve({
                                width : image.width,
                                height : image.height
                            });

                        };
                        
                        image.src = result.target.result;

                    }

                };

                reader.readAsDataURL(file);

            });

        },
        _fetchValueFromFiles : function () {

            let value = [];

            for (let file of this.data.files) {

                if (file.path) {

                    value.push({
                        name : file.name || this._getName(file.path),
                        path : file.path
                    });

                }

            }

            return value;

        },
        _syncFilesFromValue : function () {

            let files = [];
            let values = this.get();

            this.data.files = [];

            if (typeof values !== 'object' ||
                !(values instanceof Array)) {

                return;

            }

            for (let value of values) {

                if (value.path) {

                    this._createNewFileObj({
                        path : value.path,
                        name : value.name,
                        status : 'done'
                    });

                }

            }

            return files;

        },
        _set : function (value, ignoreDisable = false, origin = false) {

            if (this.isUploading() && !origin) {

                return this;

            }

            if (this.conf.state === 'disabled' && !ignoreDisable) {

                this._syncFilesFromValue();
    
                return this;

            }

            let val;

            try {

                val = JSON.parse(value);

            } catch (e) {

                val = value;

            }

            val = this._valueHandler(val);

            if (typeof val === 'object') {

                if (JSON.stringify(val) !== JSON.stringify(this.data.value)) {

                    this.data.value = val;

                }

            } else {

                this.data.value = val;

            }

            if (!origin) {

                this._syncFilesFromValue();

            }

            return this;

        },
        _removeFile : function (index) {

            this.data.files.splice(index, 1);
            this.data.failNote = '';
            this._set(this._fetchValueFromFiles(), true, true);

        },
        _openFile : function (filepath) {

            if (!filepath) {

                return;

            }

            window.open(filepath);

        },
        _switchPreview : function (index) {

            this.data.currentPreview = index;

        },
        _uploadRemoteFile : function () {

            if (!this.conf.allowUrl) {

                return;

            }

            /* eslint-disable no-alert */
            let url = window.prompt('请输入文件链接：');
            /* eslint-enable no-alert */

            this._fetchRemoteFile(url);

        },
        _fetchRemoteFile : function (url) {

            if (typeof url !== 'string') {

                return;

            }

            if (url.search(/^(http|https):\/\//g) !== 0) {
            
                /* eslint-disable no-alert */
                window.alert('链接有误');
                /* eslint-enable no-alert */
            
                return;

            }

            this.data.fetchRemoteFile = true;

            let filename = url.split('?')[0].split('//')[1].split('/').pop();

            if (/#/.test(filename)) {

                filename = filename.split('#')[0];

            }

            url = new URL(url);
            url.searchParams.set('_mor_fetch_img_t', Date.now());

            axios({
                url : url.href,
                method : 'get',
                responseType : 'blob'
            })
                .then(resp => {

                    let file = new File(
                        [resp.data],
                        filename,
                        {
                            type : resp.data.type
                        }
                    );

                    this.data.fetchRemoteFile = false;
                    this._addFile(file);

                })
                .catch(err => {
                    
                    this.data.fetchRemoteFile = false;

                    /* eslint-disable no-alert */
                    window.alert(`网络文件获取失败\n(${err.message})`);
                    /* eslint-enable no-alert */

                });

        },
        _dragover : function () {

            if (!this.conf.allowDrag) {

                return;

            }

            this.data.dragover = true;

        },
        _dragleave : function () {

            if (!this.conf.allowDrag) {

                return;

            }

            this.data.dragover = false;

        },
        _drop : function (evt) {

            if (!this.conf.allowDrag) {

                return;

            }

            this.data.dragover = false;

            let url = evt.dataTransfer.getData('URL');

            if (url) {

                if (this.conf.allowUrl) {

                    this._fetchRemoteFile(url);

                }

            } else {

                this._getFiles(evt);

            }

        },
        _openPreview : function (url) {

            this.data.imgPreviewUrl = url;

        },
        _previewHide : function () {

            this.data.imgPreviewUrl = false;

        },
        uploadUrl : function (url) {
            
            if (!this.conf.allowUrl) {

                return this;

            }

            this._fetchRemoteFile(url);

            return this;

        },
        isUploading : function () {

            return !!this.data.uploading;

        }
    },
    mounted : function () {

        this.set(this.data.value);

        this.$watch('data.fetchRemoteFile', val => {

            if (val) {

                this.$refs[`mor-url-btn-${this.uiid}`].lock();

            } else {

                this.$refs[`mor-url-btn-${this.uiid}`].unlock();

            }

        });

        this.$watch('data.files', () => {

            let files = [];

            for (let item of this.data.files) {

                if (typeof item === 'object') {

                    files.push(item);

                }

            }

            this.data.showFiles = files;
            this.data.currentPreview = files.length - 1;

        }, {
            immediate : true,
            deep : true
        });

        this.$watch('data.imgPreviewUrl', () => {

            let $dialog = this.$refs[`ui-dialog-preview-${this.uiid}`];

            if (this.data.imgPreviewUrl) {

                $dialog.toggle(true);

            } else {

                $dialog.toggle(false);

            }

        });

    }
};
</script>
