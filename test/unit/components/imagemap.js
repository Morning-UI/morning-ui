import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import imagemap                     from '../../../src/lib/components/imagemap/index.vue';

/* eslint-disable no-magic-numbers */
const name = 'imagemap';
const component = window.morning._origin.Form.extend(imagemap);
const formValue1 = {
    images : [{
        name : '151244303389249797.png',
        path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
    }],
    zones : [{
        x : 361,
        y : 117,
        h : 180,
        w : 274
    }],
    w : 722,
    h : 725
};
const formValue2 = {
    images : [{
        name : '151244303389249797.png',
        path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249798.png'
    }],
    zones : [{
        x : 20,
        y : 50,
        h : 90,
        w : 137
    }],
    w : 361,
    h : 362.5
};
/* eslint-enable no-magic-numbers */

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    // cause :npm run test and npm run cover has different result, so not diff vm.$el for now.
    delete vm.$el;

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();
    const num28 = 28;

    t.plan(2);

    t.is(vm.uiid, num28);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.serial('form base : init component value is right when use v-model', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1"></ui-${name}>
            </div>
        `,
        data : {
            value1 : formValue1,
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(JSON.stringify(vm.$children[0].get()), JSON.stringify(formValue1));

    });

});

test.serial('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :default-value="value2" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-${name}>
            </div>
        `,
        data : {
            value1 : formValue1,
            value2 : formValue2,
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(JSON.stringify(vm.$children[0].get()), JSON.stringify(formValue1));

    });

});

test.serial('form value-change : default value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(count, 0);

    });

});

test.serial('form value-change : set value emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            Vue.nextTick(() => {

                t.is(count, 0);
                this.$refs.test.set(formValue2);

                Vue.nextTick(() => {

                    t.is(count, 1);

                });

            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : set same value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            this.$refs.test.set(formValue2);

            Vue.nextTick(() => {

                t.is(count, 1);

                this.$refs.test.set(formValue2);

                Vue.nextTick(() => {

                    t.is(count, 1);

                });

            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : set invalid value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            this.$refs.test.set('asd');

            Vue.nextTick(() => {

                t.is(count, 1);
                this.$refs.test.set('sdf');

                Vue.nextTick(() => {

                    t.is(count, 1);
                    
                });
                
            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : value pass filter emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            this.$refs.test.set({
                test1 : 1
            });

            Vue.nextTick(() => {

                t.is(count, 1);

                this.$refs.test.set({
                    test2 : 1
                });

                Vue.nextTick(() => {

                    t.is(count, 1);
                    
                });
                
            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : v-model not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" v-model="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            Vue.nextTick(() => {

                t.is(count, 0);
                
            });

        }
    });

    vm.$mount();

    t.plan(1);

});

test.serial('form value-change : v-model change emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" v-model="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            Vue.nextTick(() => {

                t.is(count, 0);

                this.value = formValue2;

                Vue.nextTick(() => {

                    t.is(count, 1);
                    
                });
                
            });

        }
    });

    vm.$mount();

    t.plan(2);

});
