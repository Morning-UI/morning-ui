export default {
    methods : {
        convertStringToClassIdName : function (str) {

            return str.replace(/^[^a-z]+|[^\w:.-]+/gi, '');

        }
    }
};
