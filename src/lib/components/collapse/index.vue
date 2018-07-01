<template>
    <mor-collapse
        :_uiid="uiid"
        :class="[]"
    
        :shows="shows"
        :max-show="maxShow"
    >

        <ul class="collapse-ul">
            <template v-for="item in data.list">
                <li 
                    class="menu"
                    :class="{
                        show : (data.showKeys.indexOf(item.key) !== -1)
                    }"
                    :item-key="item.key"
                    v-html="item.title + '<i class=\'mo-collapse-icon mo-icon mo-icon-right\'></i>'"
                    @click="_onClick(item.key)"
                ></li>
                <li
                    class="content"
                    :class="{
                        show : (data.showKeys.indexOf(item.key) !== -1)
                    }"
                    :item-key="item.key"
                >
                    <div class="content-wrap">
                        <slot :name="item.key"></slot>
                    </div>
                </li>
            </template>
        </ul>

    </mor-collapse>
</template>
 
<script>
import extend                       from 'extend';

const animateTime = 160;

export default {
    origin : 'UI',
    name : 'collapse',
    props : {
        shows : {
            type : Array,
            default : (() => [])
        },
        maxShow : {
            type : Number,
            default : Infinity
        }
    },
    computed : {
        _conf : function () {

            return {
                shows : this.shows,
                maxShow : this.maxShow
            };

        }
    },
    data : function () {

        return {
            data : {
                list : [],
                showKeys : [],
                keyTimeout : {}
            }
        };

    },
    methods : {
        _refreshList : function () {

            let keys = Object.keys(this.$slots);
            let list = [];

            for (let key of keys) {

                list.push({
                    key,
                    title : this.$slots[key][0].data.attrs.title
                });

            }

            this.data.list = list;
            this.data.showKeys = extend([], this.conf.shows);


        },
        _onClick : function (key) {

            this.switch(key);

        },
        _showHeightAnimate : function (key) {

            let $content = this.$el.querySelector(`.content[item-key="${key}"]`);
            let contentHeight = 0;
            let nowHeight = 0;

            if ($content) {

                nowHeight = $content.clientHeight;
                $content.removeAttribute('style');

                this.Vue.nextTick(() => {
                
                    contentHeight = $content.clientHeight;
                    $content.style.height = `${nowHeight}px`;

                    setTimeout(() => {
                    
                        $content.style.transition = `height ${animateTime/1000}s`;
                        $content.style.height = `${contentHeight}px`;

                    });

                });

            }

        },
        _hideHeightAnimate : function (key) {
            
            let $content = this.$el.querySelector(`.content[item-key="${key}"]`);
            let contentHeight = 0;

            if ($content) {

                $content.style.display = 'block';

                this.Vue.nextTick(() => {

                    contentHeight = $content.clientHeight;
                    $content.style.height = `${contentHeight}px`;

                    setTimeout(() => {

                        $content.style.transition = `height ${animateTime/1000}s`;
                        $content.style.height = '0px';
                    
                    }, );
                    

                });

            }

        },
        _closeOverMax : function () {

            if (this.data.showKeys.length > this.conf.maxShow) {

                this.close(this.data.showKeys[0]);
                this._closeOverMax();

            }

        },
        open : function (key) {

            if (this.data.showKeys.indexOf(key) !== -1) {

                return this;

            }

            let $content = this.$el.querySelector(`.content[item-key="${key}"]`);

            this.data.showKeys.push(key);
            this._showHeightAnimate(key);

            clearTimeout(this.data.keyTimeout[key]);

            this.data.keyTimeout[key] = setTimeout(() => {

                $content.removeAttribute('style');

            }, animateTime);
            
            this.$emit('open', key);  

            return this;

        },
        close : function (key) {

            if (this.data.showKeys.indexOf(key) === -1) {

                return this;

            }

            let $content = this.$el.querySelector(`.content[item-key="${key}"]`);
            let showKeyIndex = this.data.showKeys.indexOf(key);

            this.data.showKeys.splice(showKeyIndex, 1);
            this.Vue.nextTick(() => {
            
                this._hideHeightAnimate(key);

            });

            clearTimeout(this.data.keyTimeout[key]);

            this.data.keyTimeout[key] = setTimeout(() => {

                $content.removeAttribute('style');

            }, animateTime);

            this.$emit('close', key);  

            return this;

        },
        switch : function (key) {

            let keyIndex = this.data.showKeys.indexOf(key);

            if (keyIndex === -1) {

                this.open(key);

            } else {

                this.close(key);

            }

            this.$emit('switch', key);

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this._refreshList();

        this.$watch('conf.shows', () => {

            this._refreshList();

        });

        this.$watch('data.showKeys', this._closeOverMax);
        this.$watch('conf.maxShow', this._closeOverMax);

    }
};
</script>

<style lang="less" src="./index.less"></style>
