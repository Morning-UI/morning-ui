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

        }
        // _indexNew : function (namespace) {

        //     let section = this.morning._indexSection[namespace];

        //     if (section === undefined) {

        //         let sectionId = this.morning._indexSectionId++;

        //         this.morning._indexSection[namespace] = {
        //             id : sectionId,
        //             prepend : (sectionLen / 2) - 1,
        //             append : (sectionLen / 2)
        //         };

        //         section = this.morning._indexSection[namespace];

        //     }

        //     return ((section.id * sectionLen) + section.append++);

        // },
        // _indexSectionAppend : function (namespace) {

        //     if (this.morning._indexSection[sectionId] === undefined) {

        //         return 1;

        //     }

        //     let section = this.morning._indexSection[sectionId];
        //     let index = section.append++;

        //     return ((section * sectionLen) + index);

        // },
        // _indexSectionPrepend : function (sectionId) {

        //     if (this.morning._indexSection[sectionId] === undefined) {

        //         return 1;

        //     }

        //     let section = this.morning._indexSection[sectionId];
        //     let index = section.prepend++;

        //     return ((section * sectionLen) + index);

        // }
    }
};

export default IndexManager;
