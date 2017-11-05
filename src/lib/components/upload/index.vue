<template>
    <i-upload
        :_uiid="uiid"
        :class="[stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :validate="validate"
        :item-name="itemName"
        :multi="multi"
        :max="max"
        :allow-url="allowUrl"
        :value-data="valueData"
    >

    <input
        type="file"
        class="fileinput"

        :id="'ui-select-fileinput-' + uiid"
        :multiple="conf.multi"
        @change="_getFiles"
    />

    <div class="filelist">
        <p class="name" v-if="!conf.hideName"><ui-center class="fill">{{conf.formName}}</ui-center></p>

        <div class="filewrap" :class="{hidename:conf.hideName}">
            
            <template v-for="item in data.files">
                <a
                    class="file"
                    href="javascript:;"
                    target="_blank;"
                    :index="item.index"
                    :class="item.styleList"
                >
                    <i class="progress"></i>
                    <span>
                        {{item.name}}
                    </span>
                    <i class="morningicon remove">&#xe62e;</i>
                    <i class="morningicon uploading" title="上传中">&#xe672;</i>
                    <i class="morningicon reupload" title="重新上传">&#xe68c;</i>
                </a>
            </template>

            <br/>

            <template v-if="conf.allowUrl">
                <label
                    class="add file local"
                    v-if="conf.state !== 'disabled'"
                    :for="'ui-select-fileinput-' + uiid"
                >
                    <span>本地上传{{conf.itemName}}</span>
                    <i class="morningicon">&#xe704;</i>
                </label>
                
                <label
                    class="add file url"
                    v-if="conf.state !== 'disabled'"
                    :for="'ui-select-fileinput-' + uiid"
                >
                    <span>URL上传{{conf.itemName}}</span>
                    <i class="iconfont">&#xe704;</i>
                    <i class="iconfont load">&#xe703;</i>
                </label>
            </template>

            <template v-else>
                <label
                    class="add file"
                    v-if="conf.state !== 'disabled'"
                    :for="'ui-select-fileinput-' + uiid"
                >
                    <span>上传{{conf.itemName}}</span>
                    <i class="morningicon">&#xe704;</i>
                </label>
            </template>

            <p class="status" v-if="Object.keys(conf.validate).length > 0"></p>
            
            <span class="max">最多只能上传{{conf.max}}个文件</span>
        </div>

        <div class="dragNote"><p><i class="iconfont">&#xe606;</i> 松开鼠标上传</p></div>
    </div>

    </i-upload>
</template>
 
<script>
const uploadWaitTime = 100;

export default {
    origin : 'Form',
    name : 'upload',
    props : {
        validate : {
            type : Object,
            default : () => ({})
        },
        itemName : {
            type : String,
            default : ''
        },
        multi : {
            type : Boolean,
            default : false
        },
        max : {
            type : Number,
            default : 1
        },
        allowUrl : {
            type : Boolean,
            default : false
        },
        valueData : {
            type : Object,
            default : () => (['full', 'path'])
        },
    },
    data : function () {

        return {
            conf : {
                validate : this.validate,
                itemName : this.itemName,
                multi : this.multi,
                max : this.max,
                allowUrl : this.allowUrl,
                valueData : this.valueData
            },
            data : {
                index : 0,
                files : {},
                uploadQueue : [],
                uploading : false,
                isMax : false
            }
        };

    },
    computed : {},
    methods : {
        _valueFilter : function () {},
        _getFiles : function (evt) {

            let files = evt.target.files || evt.dataTransfer.files;
            let len = files.length;

            if (!this.conf.multi) {

                len = 1;

            }

            for (let i = 0; i < len; i++) {
                
                this._addFile(files.item(i));

            }

        },
        _addFile : function (file) {

            let index = this.data.index++;

            this.data.files[index] = {
                file : file,
                name : file.name,
                status : 'wait',
                classList : {
                    fail : false,
                    uploading : false,
                    uploaded : false,
                    done : false,
                    wait : true
                },
                index
            };

            if (!/^(http|https|\/\/)/.test(file.path)) {

                setTimeout(() => {

                    // TODO
                    this._upload(index);

                }, uploadWaitTime);

            } else {

                // this._setStatus(index, 'done');
                // this.$.find('.file[index="'+index+'"]').attr('href', file.path);
            
            }

            // if ( this.attr.max && _.size(this.prop.files) >= +this.attr.max ) {
            //     this.$.find('.file.add').hide();
            //     this.$.find('.max').addClass('show');
            //     return;
            // }

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
                $file = this.$el.querySelector(`.file[index="${index}"]`),
                uploadObj = {};

            this._setStatus(index, 'uploading');

            // if ( ['img', 'file'].indexOf(this.attr.mode) === -1 ) {
            //     this._setStatus(index, 'fail');
            //     uploadOne();
            //     return;
            // }

            if (this.conf.max && this.data.isMax) {

                this._setStatus(index, 'fail');
                this._execUploadOnce();

                return;

            }

            // if ( this.attr.mode === 'img' ) {
            //     pushObj.image = this.files[index];
            //     pushObj.quality = +this.attr.lossy;
            // } else {
            //     pushObj.content = this.files[index];
            // }
            uploadObj.file = this.data.files[index].file;

            // TODO LAST

            // this.adapter.push(`${this.attr.mode}@${this.attr.space}`, pushObj)
            // .then(({result, res})=>{
            //     if ( res.status ) {

            //         var list = this.clone(this.prop.value||[]);
            //         list.push({
            //             name : this.prop.files[index].name,
            //             path : this.attr.httpUrl ? result.fullPath : result.fullPath.replace(/(http|https):/, ''),
            //             width: result.meta.width,
            //             height: result.meta.height,
            //             size: result.meta.size
            //         });
            //         !this.blockValue && this._set(list);

            //         if ( this.attr.max && list.length === +this.attr.max ) {
            //             this.$.find('.file.add').hide();
            //             this.$.find('.max').addClass('show');
            //             this.isMax = true;
            //         }

            //         this._setStatus(index, 'uploaded');

            //         this._setStatus(index, 'done');
                    
            //         if ( !this.attr.multi && !_.isEmpty(this.attr.validate) ) {                     
            //             this._validate(this.attr.validate, list[0]);                        
            //         }
                    
            //         this.prop.files[index].path = result.fullPath;
            //         $file.attr('href', result.fullPath);
            //         uploadOne();

            //     } else {
            //         this._setStatus(index, 'fail');
            //         uploadOne();
            //     }
            // });

        },
        _execUploadQueue : function () {

            if (this.data.uploading) {

                return;

            }

            this.data.uploading = true;
            this._execUploadOnce();

        },
        _setStatus : function (index, status) {

            // status include: wait/uploading/done/fail/uploaded
            this.data.files[index].status = status;

            for (let key in this.data.files[index].styleList) {

                if (key !== status) {

                    this.data.files[index].styleList[key] = false;

                } else {

                    this.data.files[index].styleList[key] = true;

                }

            }

            /*eslint-disable */
            // switch(status) {
            //     case 'done':
            //     case 'fail':
            //         let status = _.pluck(_.values(this.prop.files), 'status'),
            //             dones = _.filter(status, (state) => state === 'done' || state === 'fail');

            //         if (dones.length === _.size(this.prop.files)) {
            //             this.st.status = 'done';
            //         }
            //         break;
            //     case 'uploading': 
            //         this.st.status = status;
            //         break;
            // }
            /*eslint-enable */

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
