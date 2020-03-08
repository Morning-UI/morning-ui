export const LINE_COLOR = 'rgba(51, 51, 51, 1)';
export const PLACEHOLDER_COLOR = 'rgba(147, 233, 245, 1)';
export const LINE_WIDTH = 2;
export const APPENDS_PADDING = {
    x : 8,
    y : 4
};
export const APPENDS_MARGIN = {
    left : 6
};
export const MARKS_PADDING = {
    x : 2,
    y : 0
};
export const MARKS_MARGIN = {
    right : 6
};
export const OUTLINE_PADDING = 3;

export const MIND_NODE_STYLE = {
    bgColor : '#e8e8e8',
    fontColor : 'rgba(0, 0, 0, 1)',
    fontSize : 16,
    fontWeight : 400,
    fontStyle : 'normal',
    borderWidth : 1,
    borderColor : LINE_COLOR,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    outlineRadius : 6,
    _shapePresets : {
        'round-rect' : {
            radius : 6
        },
        rect : {
            radius : 0
        },
        line : {
            bgColor : 'transparent',
            borderColor : 'transparent',
            borderWidth : 0,
            bottomlineBg : LINE_COLOR,
            bottomlineHeight : 2
        }
    }
};

export const ROOT_MIND_NODE_STYLE = {
    bgColor : 'rgba(35, 123, 191, 1)',
    fontColor : 'rgba(255, 255, 255, 1)',
    fontSize : 24,
    fontWeight : 400,
    fontStyle : 'normal',
    borderWidth : 0,
    borderColor : LINE_COLOR,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    outlineRadius : 6,
    _shapePresets : {
        'round-rect' : {
            radius : 6
        },
        rect : {
            radius : 0
        },
        'half-round-rect' : {
            // 动态计算
            computedRadius : 0.5,
            radius : 0
        },
        line : {
            fontColor : 'rgba(0, 0, 0, 1)',
            bgColor : 'transparent',
            borderColor : 'transparent',
            borderWidth : 0,
            bottomlineBg : LINE_COLOR,
            bottomlineHeight : 2
        }
    }
};

export const COLLAPSE_BTN_STYLE = {
    bgColor : 'rgba(255, 255, 255, 1)',
    bgHoverColor : 'rgba(220, 220, 220, 1)',
    borderColor : LINE_COLOR,
    fontColor : 'rgba(0, 0, 0, 1)',
    r : 8
};

export const APPENDS_LIST = {
    link : {
        index : 0,
        state : 'link-hover'
    },
    note : {
        index : 2,
        state : 'note-hover'
    }
};

export const PLACEHOLDER_NODE_STYLE = {
    bgColor : PLACEHOLDER_COLOR,
    fontColor : 'rgba(255, 255, 255, 0)',
    fontSize : 24,
    borderWidth : 0,
    borderColor : LINE_COLOR,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    radius : 6
};

export const MIND_EDGE_STYLE = {
    borderWidth : LINE_WIDTH,
    borderColor : LINE_COLOR,
    radius : 10
};

export const PLACEHOLDER_EDGE_STYLE = {
    borderWidth : LINE_WIDTH + 1,
    borderColor : PLACEHOLDER_COLOR,
    radius : 10
};

export const DELEGATE_SHAPE_STYLE = {
    bgColor : 'rgba(75, 201, 218, 0.3)',
    borderColor : 'rgba(75, 201, 218, 1)',
    borderWidth : 2
};
