// must use require, cause window must be setup before by Early
require('browser-env')();

const hooks                         = require('require-extension-hooks');
const ignore                        = require('ignore-styles').default;
const Vue                           = require('vue');
const VueCommon                     = require('vue/dist/vue.common.js');

Vue.config.productionTip = false;
VueCommon.config.productionTip = false;

// ignore style first
ignore(['.css', '.less']);

hooks('vue')
    .plugin('vue')
    .push();

hooks(['vue', 'js'])
    .plugin('babel')
    .push();

require('../../src/lib/index');

window.morning.init();

VueCommon.config.ignoredElements = window.morning._ignoreElements;
