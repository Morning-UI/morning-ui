<template>
    <i-breadcrumbs
        :_uiid="uiid"
        :class="[sizeClass]"

        :root-name="rootName"
        :choose-root="chooseRoot"
        :list="list"
        :max-history="maxHistory"
    >

    <ul>

        <template v-if="conf.rootName">
            <li
                class="root"
                :class="{choose : conf.chooseRoot}"
                @click="_chooseRoot([])"
            >{{conf.rootName}}</li>
            <li class="separator"> / </li>
        </template>

        <template v-for="(item, index) in data.lvlist">
            <template v-for="(name, key) in item">
                <li
                    :value="key"
                    v-if="index < (data.lvlist.length - 1)"
                    @click="toLevel(index)"
                >{{name}}</li>
                <li class="last" :value="key" v-else>{{name}}</li>
            </template>
            <li class="separator" v-if="index < (data.lvlist.length - 1)"> / </li>
        </template>
        
    </ul>
        
    </i-breadcrumbs>
</template>
 
<script>
import extend                       from 'extend';
import UI                           from 'Common/ui';

const maxHistoryNum = 20;

export default UI.extend({
    name : 'breadcrumbs',
    props : {
        rootName : {
            type : [String, Boolean],
            default : false
        },
        chooseRoot : {
            type : Boolean,
            default : false
        },
        list : {
            type : Array,
            default : () => ([])
        },
        maxHistory : {
            type : Number,
            default : maxHistoryNum
        }
    },
    data : function () {

        return {
            conf : {
                rootName : this.rootName,
                chooseRoot : this.chooseRoot,
                list : this.list,
                maxHistory : this.maxHistory
            },
            data : {
                historys : [],
                lvlist : [],
                currentLevel : {}
            }
        };

    },
    methods : {
        _recordHistory : function () {

            if (JSON.stringify(this.data.historys[this.data.historys.length - 1]) !== JSON.stringify(this.data.lvlist)) {

                if (this.conf.maxHistory <= this.data.historys.length) {

                    this.data.historys.shift();

                }

                this.data.historys.push(extend(true, [], this.data.lvlist));

            }

        },
        _chooseRoot : function () {

            if (this.conf.chooseRoot) {

                this.setLevel([]);

            }

        },
        toLevel : function (index) {

            if ((typeof index === 'number') &&
                (index < (this.data.lvlist.length - 1)) &&
                (index > -1)) {

                this.data.lvlist.splice(index + 1);
                this._recordHistory();

            } else if ((typeof index === 'string') &&
                (this.data.currentLevel.keyList.indexOf(index) !== -1)) {

                index = this.data.currentLevel.keyList.indexOf(index);
                this.data.lvlist.splice(index + 1);
                this._recordHistory();

            }

            return this;

        },
        backLast : function (num = 1) {

            let list = this.data.historys.splice(this.data.historys.length - num - 1)[0];

            this.setLevel(list);

            return this;

        },
        addLevel : function (level) {

            this.data.lvlist.push(level);
            this._recordHistory();

            return this;

        },
        setLevel : function (levelList) {

            if ( levelList && levelList.length > 0 ) {

                this.data.lvlist.splice(0);

                for (let v of levelList) {

                    this.data.lvlist.push(v);

                }

                this._recordHistory();

            } else if ( levelList && levelList.length === 0 ) {

                this.data.lvlist.splice(0, this.data.lvlist.length);

                this._recordHistory();

            }

            return this;

        },
        getLevel : function () {

            return this.data.currentLevel;

        },
        getHistory : function () {

            return extend(true, [], this.data.historys);

        }
    },
    created : function () {

        this.$watch('data.lvlist', () => {

            let last = {},
                keyList = [],
                nameList = [];

            for (let item of this.data.lvlist) {

                let key = Object.keys(item)[0];

                keyList.push(key);
                nameList.push(item[key]);
                last = {
                    key : key,
                    name : item[key]
                };

            }

            this.data.currentLevel = {
                keyList : keyList,
                nameList : nameList,
                currentKey : last.key,
                currentName : last.name,
                length : keyList.length
            };

            this.$emit('emit');

        });

    },
    mounted : function () {

        for (let item of this.conf.list) {

            this.data.lvlist.push(item);

        }

        this._recordHistory();

    }
});
</script>

<style lang="less" src="index.less"></style>
