export default (t, vm) => {

    if (!vm.$el) {

        t.pass();

        return;

    }

    const tree = {
        $el : vm.$el.outerHTML
    };

    t.snapshot(tree);

};
