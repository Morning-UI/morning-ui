export default {
    methods : {
        convertStringToClassIdName : function (str) {

            // 因为str为纯数字不是合法的calss name
            if (!isNaN(Number(str))) {

                return `_num-${str}`;

            }

            return str.replace(/^[^a-z]+|[^\w:.-]+/gi, '');

        }
    }
};
