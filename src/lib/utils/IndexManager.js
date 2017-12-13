import max                          from 'lodash.max';

let IndexManager = {
    methods : {
        _indexReg : function (namespace, index = 1) {

            let key = `${this.$options.name}.${namespace}`;

            if (this.morning._indexMap.regIndex[key] === undefined) {

                this.morning._indexMap.regIndex[key] = index;

            }

            return this;

        },
        _indexFetch : function (namespace, step) {

            let vmMap = this.morning._indexMap.vmMap;
            let useIndex = this.morning._indexMap.useIndex;
            let regIndex = this.morning._indexMap.regIndex;
            let key = `${this.$options.name}.${namespace}`;

            if (useIndex[key] === undefined) {

                useIndex[key] = regIndex[key];

            }

            if (vmMap[`${this.uiid},${namespace}`] === undefined) {

                vmMap[`${this.uiid},${namespace}`] = useIndex[key];

            }

            if (step !== 0 && step !== undefined) {

                useIndex[key] += step;

            }

            return vmMap[`${this.uiid},${namespace}`];

        },
        _indexInc : function (namespace) {

            return this._indexFetch(namespace, 1);

        },
        _indexGet : function (namespace) {

            return this._indexFetch(namespace, 0);

        },
        _indexDim : function (namespace) {

            return this._indexFetch(namespace, -1);

        },
        _indexGetMax : function () {

            return max(Object.values(this.morning._indexMap.useIndex));

        }
    }
};

export default IndexManager;
