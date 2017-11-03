<template>
    <i-tab
        :_uiid="uiid"
        :class="[]"
    >

        <ul>
            <li 
                v-for="item in data.namelist"
                :name="item.name"
                v-html="item.html"
                @click="_onClick(item.name)"
            ></li>
        </ul>
        
        <div class="contents">
            <template v-for="(item, name) in $slots">
                <div class="item" :name="name"><slot :name="name"></slot></div>
            </template>
        </div>

    </i-tab>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'tab',
    props : {
        tab : {
            type : String
        },
        prepend : {
            type : Object,
            default : () => ({})
        },
        append : {
            type : Object,
            default : () => ({})
        }
    },
    data : function () {

        return {
            conf : {
                tab : this.tab,
                prepend : this.prepend,
                append : this.append
            },
            data : {
                tabs : [],
                selectTab : null,
                namelist : []
            }
        };

    },
    methods : {
        _onClick : function (name) {

            this.switch(name);

        },
        _getNamelist : function () {

            let names = Object.keys(this.$slots);
            let list = [];

            for (let name of names) {

                let prepend = this.conf.prepend[name];
                let append = this.conf.append[name];

                list.push({
                    name : name,
                    html : `${prepend || ''}${name}${append || ''}`
                });

            }

            this.data.namelist = list;

        },
        switch : function (name) {

            if (name === this.data.selectTab) {

                return this;

            }

            let old = this.data.tabs.indexOf(this.data.selectTab);

            if (old !== -1) {

                let conEl = this.$el.children[1].children[old];
                let tabEl = this.$el.children[0].children[old];
                let conClassList = conEl.className.split(' ');
                let tabClassList = conEl.className.split(' ');
                let conClassIndex = conClassList.indexOf('current');
                let tabClassIndex = tabClassList.indexOf('current');

                if (conClassIndex !== -1) {

                    conClassList.splice(conClassIndex, 1);

                }

                if (tabClassIndex !== -1) {

                    tabClassList.splice(tabClassIndex, 1);

                }

                conEl.className = conClassList.join(' ');
                tabEl.className = tabClassList.join(' ');

            }

            let current = this.data.tabs.indexOf(name);

            if (current !== -1) {

                let conEl = this.$el.children[1].children[current];
                let tabEl = this.$el.children[0].children[current];

                conEl.className += ' current';
                tabEl.className += ' current';

            }

            this.data.selectTab = name;

            this.$emit('switch');

            return this;

        },
        next : function () {

            let index = this.data.tabs.indexOf(this.data.selectTab);

            index++;

            if (index < this.data.tabs.length) {
        
                this.switch(this.data.tabs[index]);

            } else {

                this.switch(this.data.tabs[0]);

            }

            return this;

        },
        prev : function () {

            let index = this.data.tabs.indexOf(this.data.selectTab);

            index--;

            if (index >= 0) {
        
                this.switch(this.data.tabs[index]);

            } else {
        
                this.switch(this.data.tabs[this.data.tabs.length - 1]);
        
            }

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch(() => (this.conf.prepend + this.conf.append), this._getNamelist, {
            deep : true,
            immediate : true
        });

        this.$watch('$slots', () => {

            this._getNamelist();
            this.data.tabs = Object.keys(this.$slots);

        }, {
            immediate : true
        });

        if (!this.conf.tab) {
    
            this.conf.tab = this.data.tabs[0];
    
        }

        this.Vue.nextTick(() => {

            this.switch(this.conf.tab);

        });

    }

};
</script>

<style lang="less" src="./index.less"></style>
