import Vue                          from 'vue';
import UI                           from 'Common/ui';
import Form                         from 'Common/form';
import {style}                      from './components';

let morning = {
    version : '1.0.0',
    _origin : {
        UI,
        Form
    },
    _component : {
        style
    },
    _uiid : 1,
    map : {}
};

// register component
for (let category in morning._component) {

    for (let name in morning._component[category]) {

        let component = morning._component[category][name];

        Vue.component(`ui-${component.options.name}`, component);

    }

}

window.morning = morning;
