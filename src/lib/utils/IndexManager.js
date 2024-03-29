let IndexManager = {
    methods : {
        _indexReg : function (namespace, index) {

            let key = `${this.$options.name}.${namespace}`;

            if (this.morning._indexMap.regIndex[key] === undefined) {

                if (index === undefined) {

                    index = this.morning._options.zIndex;

                } else {

                    index += this.morning._options.zIndex;

                }

                this.morning._indexMap.regIndex[key] = index;

                if (this.morning._indexMap.maxIndex < index) {

                    this.morning._indexMap.maxIndex = index;

                }

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
                vmMap[`${this.uiid},${namespace}`] = useIndex[key];

            }

            if (this.morning._indexMap.maxIndex < vmMap[`${this.uiid},${namespace}`]) {

                this.morning._indexMap.maxIndex = vmMap[`${this.uiid},${namespace}`];

            }

            return vmMap[`${this.uiid},${namespace}`];

        },
        _indexInc : function (namespace) {

            return this._indexFetch(namespace, 1);

        },
        _indexGet : function (namespace, addition = 0) {

            let index = this._indexFetch(namespace, 0) + addition;

            if (this.morning._indexMap.maxIndex < index) {

                this.morning._indexMap.maxIndex = index;

            }

            return index;

        },
        _indexDim : function (namespace) {

            return this._indexFetch(namespace, -1);

        },
        _indexInitValue : function () {

            return this.morning._options.zIndex;

        },
        _indexMax : function () {

            return ++this.morning._indexMap.maxIndex;

        }
    }
};

export default IndexManager;
