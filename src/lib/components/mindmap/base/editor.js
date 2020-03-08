import shapeBase                    from '../base/shape';
import {
    refreshNodeEdges,
    getNodeShapes,
}                                   from '../base/utils';
import graphBase                    from '../base/graph';
import {
    mindNodeAdjustPosition,
}                                   from '../nodes/mindNode';

export const refreshTextEditorPosition = (vm, node) => {

    if (vm.data.editNode) {

        let edges = vm.data.editNode.getEdges();

        vm.data.editNode.refresh();
        refreshNodeEdges(edges);

    }

    let shapes = getNodeShapes(node);
    let textAttr = shapes.text.attr();
    let nodeBbox = node.getBBox();
    let textBbox = shapes.text.getBBox();
    let conBbox = shapes.con.getBBox();
    let zoom = vm.data.graph.getZoom();
    let {
        x : nodeX,
        y : nodeY
    } = vm.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

    // when text is empty use placeholder
    if (textBbox.width === 0) {

        textBbox = shapes.placeholder.getBBox();

    }

    const padding = 5;

    let inputX = `${textBbox.x + 1 - padding}px`;
    let inputY = `${textBbox.y - padding}px`;

    vm.data.$editContent.style.display = 'block';
    vm.data.$editContent.style.left = `${nodeX}px`;
    vm.data.$editContent.style.top = `${nodeY}px`;
    vm.data.$editContent.style.width = `${conBbox.width}px`;
    vm.data.$editContent.style.height = `${conBbox.height}px`;
    vm.data.$editContentInput.style.width = `${textBbox.width + (padding * 2)}px`;
    vm.data.$editContentInput.style.height = `${textBbox.height + (padding * 2)}px`;
    vm.data.$editContentInput.style.padding = `${padding}px`;
    vm.data.$editContentInput.style.left = inputX;
    vm.data.$editContentInput.style.top = inputY;
    // this.data.$editContentInput.style.color = textAttr.fill;
    vm.data.$editContentInput.style.fontSize = `${textAttr.fontSize}px`;
    vm.data.$editContentInput.style.textAlign = textAttr.textAlign;
    vm.data.$editContentInput.style.fontWeight = textAttr.fontWeight;
    vm.data.$editContentInput.style.fontStyle = textAttr.fontStyle;
    vm.data.$editContentInput.style.fontFamily = textAttr.fontFamily;
    vm.data.editContent = textAttr.text;
    vm.data.editZoom = zoom;

};

export const editInput = vm => {

    let shapes = vm.data.editShapes;

    graphBase.manualPaint(vm, () => {

        shapes.text.attr({
            text : vm.data.editContent
        });

        vm.data.editNode.update({
            text : vm.data.editContent
        });

        // 临时修复问题：https://github.com/antvis/g/pull/121
        if (vm.data.editContent.indexOf('\n') === -1) {

            shapes.text._attrs.lineCount = 1;

        }

        vm.data.graph.paint();
        mindNodeAdjustPosition(shapes, vm.data.editNode.getModel());
        refreshTextEditorPosition(vm, vm.data.editNode);

    });

};
