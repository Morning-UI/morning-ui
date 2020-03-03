export default {
    in : (evt, options) => {

        options.vm.data.mouseOnCanvas = true;

    },
    out : (evt, options) => {

        options.vm.data.mouseOnCanvas = false;

    }
};
