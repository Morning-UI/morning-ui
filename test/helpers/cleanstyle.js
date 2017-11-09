export default style => {

    for (let key of Object.keys(style)) {

        if (/^\d+$/.test(key)) {

            delete style[key];

        }

    }

    delete style.webkitTapHighlightColor;
    delete style.transformOrigin;

    return style;

};
