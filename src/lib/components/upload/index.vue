<template>
    <i-upload
        :_uiid="uiid"
        :class="[stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :item-name="itemName"
        :accept-type="acceptType"
        :multi="multi"
        :max="max"
        :allow-url="allowUrl"
        :allow-drag="allowDrag"
        :validate="validate"
        :uploader="uploader"

        @dragover.stop.prevent="_dragover"
        @dragleave="_dragleave"
        @drop.stop.prevent="_drop"
    >

    <input
        type="file"
        class="fileinput"
    
        :key="data.inputKey"
        :id="'ui-select-fileinput-' + uiid"
        :accept="conf.acceptType"
        :multiple="conf.multi"
        @change="_getFiles"
    />

    <div class="filelist">
        <p class="name" v-if="!conf.hideName"><ui-center class="fill">{{conf.formName}}</ui-center></p>

        <div class="filewrap" :class="{hidename:conf.hideName}">
            
            <template v-for="(item, index) in data.files" v-if="typeof item === 'object'">
                <a
                    class="file"
                    target="_blank;"
                    :href="item.path || 'javascript:;'"
                    :index="index"
                    :key="index"
                    :class="item.classList"
                >
                    <i class="progress"></i>
                    <span>
                        {{item.name}}
                    </span>
                    <i class="morningicon remove" @click.prevent="_removeFile(index)">&#xe62e;</i>
                    <i class="morningicon uploading" title="上传中">&#xe672;</i>
                    <i class="morningicon reupload" title="重新上传" @click.prevent="_upload(index)">&#xe68c;</i>
                </a>
            </template>

            <br/>

            <template v-if="conf.allowUrl">
                <label
                    class="add file local"
                    v-if="conf.state !== 'disabled' && !ismax"
                    :for="'ui-select-fileinput-' + uiid"
                >
                    <span>本地上传{{conf.itemName}}</span>
                    <i class="morningicon local">&#xe629;</i>
                </label>
                
                <label
                    class="add file url"
                    :class="{loading: data.fetchRemoteFile}"
                    v-if="conf.state !== 'disabled' && !ismax"
                    @click="_uploadRemoteFile()"
                >
                    <span>URL上传{{conf.itemName}}</span>
                    <i class="morningicon">&#xe704;</i>
                    <i class="morningicon load">&#xe703;</i>
                </label>
            </template>

            <template v-else>
                <label
                    class="add file"
                    v-if="conf.state !== 'disabled' && !ismax"
                    :for="'ui-select-fileinput-' + uiid"
                >
                    <span>上传{{conf.itemName}}</span>
                    <i class="morningicon local">&#xe629;</i>
                </label>
            </template>

            <p class="status" v-if="data.failNote">{{data.failNote}}</p>
            
            <span class="max" v-if="ismax">最多只能上传{{conf.max}}个文件</span>
        </div>

        <div class="drag-note" :class="{show: data.dragover}"><p><i class="morningicon">&#xe629;</i> 松开鼠标上传</p></div>
    </div>

    </i-upload>
</template>
 
<script>
import extend                       from 'extend';
import axios                        from 'axios';

const uploadWaitTime = 100;

export default {
    origin : 'Form',
    name : 'upload',
    props : {
        itemName : {
            type : String,
            default : ''
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
        allowUrl : {
            type : Boolean,
            default : false
        },
        allowDrag : {
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
        }
    },
    computed : {
        moreClass : function () {

            return {
                'allow-url' : this.conf.allowUrl
            };

        },
        ismax : function () {

            if (this.conf.max &&
                this.data.value &&
                this.data.value.length >= this.conf.max) {

                return true;

            }

            return false;

        }
    },
    data : function () {

        return {
            conf : {
                itemName : this.itemName,
                acceptType : this.acceptType,
                multi : this.multi,
                max : this.max,
                allowUrl : this.allowUrl,
                allowDrag : this.allowDrag,
                validate : this.validate,
                uploader : this.uploader
            },
            data : {
                inputKey : 0,
                files : [],
                uploadQueue : [],
                uploading : false,
                fetchRemoteFile : false,
                dragover : false
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
        _maxFilter : function (value) {

            if (this.conf.max &&
                value.length > this.conf.max) {

                return value.slice(0, this.conf.max);

            }

            return value;

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

            axios({
                url,
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
                .catch(() => {
                    
                    this.data.fetchRemoteFile = false;

                    /* eslint-disable no-alert */
                    window.alert('网络文件获取失败');
                    /* eslint-enable no-alert */
    
                });

        },
        _getName : function (filepath) {

            return filepath.split('/').pop();

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

            if (typeof values !== 'object' ||
                !(values instanceof Array)) {

                return;

            }

            this.data.files = [];

            for (let value of values) {

                if (value.path) {

                    this._createNewFileObj({
                        path : value.path,
                        status : 'done'
                    });

                }

            }

            return files;

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

                fileObj.name = this._getName(fileObj.path);

            }

            this._setStatus(index, fileObj.status);

            return {
                index,
                fileObj
            };

        },
        _getFiles : function (evt) {

            let files = evt.target.files || evt.dataTransfer.files;
            let len = files.length;

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

                setTimeout(() => {

                    this._upload(index);

                }, uploadWaitTime);

            }

        },
        _removeFile : function (index) {

            this._set(this._fetchValueFromFiles(), true);
            this.data.files.splice(index, 1);

        },
        _upload : function (index) {

            this.data.uploadQueue.push(index);
            this._execUploadQueue();

        },
        _execUploadOnce : function () {

            if (this.data.uploadQueue.length === 0) {

                this.data.uploading = false;

                return;

            }

            let index = this.data.uploadQueue.shift(),
                uploadObj = {};

            Promise
                .resolve()
                .then(() => {

                    this._setStatus(index, 'verification');

                    if (this.conf.max && this.ismax) {

                        return Promise.reject('upload file num is max.');

                    }

                    uploadObj.file = this.data.files[index].file;
                    uploadObj.name = this.data.files[index].name;

                    if (typeof this.conf.validate === 'function') {

                        return this.conf.validate(uploadObj.file);

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

                        this.data.files[index].path = result.path;
                        this.data.files[index].name = this._getName(result.path);
                        this.data.files[index].data = result.data;
                        this._set(this._fetchValueFromFiles(), true);
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
        _execUploadQueue : function () {

            if (this.data.uploading) {

                return;

            }

            this.data.failNote = '';
            this.data.uploading = true;
            this._execUploadOnce();

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
        set : function (value) {

            this.data.uploading = false;
            this.data.uploadQueue = [];

            let result = this._set(value);

            this._syncFilesFromValue();

            return result;

        },
        uploadUrl : function (url) {
            
            if (!this.conf.allowUrl) {

                return this;

            }

            this._fetchRemoteFile(url);

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.set(this.data.value);

    }
};
</script>

<style lang="less" src="./index.less"></style>
