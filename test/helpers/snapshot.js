export default (t, vm) => {

    const tree = {
        $el : vm.$el.outerHTML
    };

    t.snapshot(tree);

};
