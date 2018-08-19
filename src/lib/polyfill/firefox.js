let evtPath = () => {

    if (!('path' in Event.prototype)) {

        Object.defineProperty(Event.prototype, 'path', {
            get : function () {

                let path = [];
                let currentEle = this.target;

                while (currentEle) {

                    path.push(currentEle);
                    currentEle = currentEle.parentElement;

                }

                if (path.indexOf(window) === -1 && path.indexOf(document) === -1) {

                    path.push(document);

                }

                if (path.indexOf(window) === -1) {

                    path.push(window);

                }

                return path;

            }
        });

    }

};

let evtSrcElement = () => {

    if (!('srcElement' in Event.prototype)) {

        Object.defineProperty(Event.prototype, 'srcElement', {
            get : function () {

                return this.target;

            }
        });

    }

};

export default {
    evtPath,
    evtSrcElement
};
