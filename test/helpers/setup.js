// must use require, cause window must be setup before by Early
require('browser-env')();

const hooks                         = require('require-extension-hooks');
const ignore                        = require('ignore-styles').default;
const Vue                           = require('vue');
const Quill                         = require('quill');
const VueCommon                     = require('vue/dist/vue.common.js');

Vue.config.productionTip = false;
VueCommon.config.productionTip = false;

// ignore style first
ignore(['.css', '.less']);

hooks('vue')
    .plugin('vue')
    .push();

hooks(['js', 'vue'])
    .plugin('babel', {
        exclude : [
            /coverage/,
            /node_modules\/(?!quill)/
        ]
    })
    .push();

hooks(['svg'])
    .push(({content}) => `return \`${content}\`;`);

window.Quill = Quill;
window.morning = require('../../src/lib/index').default;

VueCommon.use(window.morning);
VueCommon.config.ignoredElements = window.morning._ignoreElements;

