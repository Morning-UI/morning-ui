let IndexManager = {
    data : function () {

        return {};

    },
    methods : {
        _indexGroupReg : function (group, indexList) {

            if (!this.morning._indexGroups[group]) {

                this.morning._indexGroups[group] = {
                    indexList,
                    vmList : []
                };

            }

            if (this.morning._indexGroups.vmList.indexOf(this) === -1) {
                
                this.morning._indexGroups.vmList.push({
                    vm : this,
                    key : null
                });

            }

        },
        _indexSet : function (group, key, vms) {

            let groupObj = this.morning._indexGroups[group];

            if (!groupObj) {

                return;

            }

            vms = [].concat(vms);

            if (vms[0] === undefined) {

                for (let svm of groupObj.vmList) {

                    svm.key = key || null;

                }

            } else {

                for (let svm of groupObj.vmList) {

                    if (vms.indexOf(svm !== -1)) {

                        svm.key = key || null;

                        break;

                    }

                }

            }

            this.$emit('_IndexChanged', group);

        },
        _indexGet : function (group) {

            let groupObj = this.morning._indexGroups[group];
            let index = 0;

            if (!groupObj) {

                return;

            }

            for (let svm of groupObj.vmList) {

                if (svm === this) {

                    let indexConf = groupObj.keyList[svm.key];

                    if (typeof indexConf === 'number') {

                        index = indexConf;

                    } else if (typeof indexConf === 'object') {
                        
                        if (indexConf.increment) {

                            index = ++indexConf.start;

                        } else {

                            index = indexConf.start;
                            
                        }

                    }

                    break;

                }

            }

            return index;

        }
    }
};

export default IndexManager;
