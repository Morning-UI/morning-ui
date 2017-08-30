<template>
    <i-grid
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-grid>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'grid'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-grid{
    display:block;

    .c-1,.c-2,.c-3,.c-4,
    .c-5,.c-6,.c-7,.c-8,
    .c-9,.c-10,.c-11,.c-12,
    .c-13,.c-14,.c-15,.c-16{
        display: block;
        float: left;
        margin-right: @gridGutterWidth;
    }
    
    .c-1{ width:@gridColumnWidth;}
    .c-2{ width:@gridColumnWidth*2 + @gridGutterWidth;}
    .c-3{ width:@gridColumnWidth*3 + 2*@gridGutterWidth;}
    .c-4{ width:@gridColumnWidth*4 + 3*@gridGutterWidth;}
    .c-5{ width:@gridColumnWidth*5 + 4*@gridGutterWidth;}
    .c-6{ width:@gridColumnWidth*6 + 5*@gridGutterWidth;}
    .c-7{ width:@gridColumnWidth*7 + 6*@gridGutterWidth;}
    .c-8{ width:@gridColumnWidth*8 + 7*@gridGutterWidth;}
    .c-9{ width:@gridColumnWidth*9 + 8*@gridGutterWidth;}
    .c-10{ width:@gridColumnWidth*10 + 9*@gridGutterWidth;}
    .c-11{ width:@gridColumnWidth*11 + 10*@gridGutterWidth;}
    .c-12{ width:@gridColumnWidth*12 + 11*@gridGutterWidth;}
    .c-13{ width:@gridColumnWidth*13 + 12*@gridGutterWidth;}
    .c-14{ width:@gridColumnWidth*14 + 13*@gridGutterWidth;}
    .c-15{ width:@gridColumnWidth*15 + 14*@gridGutterWidth;}
    .c-16{ width:100%;}

    .offset-1{ margin-left:@gridColumnWidth + @gridGutterWidth; }
    .offset-2{ margin-left:@gridColumnWidth*2 + 2*@gridGutterWidth; }
    .offset-3{ margin-left:@gridColumnWidth*3 + 3*@gridGutterWidth; }
    .offset-4{ margin-left:@gridColumnWidth*4 + 4*@gridGutterWidth; }
    .offset-5{ margin-left:@gridColumnWidth*5 + 5*@gridGutterWidth; }
    .offset-6{ margin-left:@gridColumnWidth*6 + 6*@gridGutterWidth; }
    .offset-7{ margin-left:@gridColumnWidth*7 + 7*@gridGutterWidth; }
    .offset-8{ margin-left:@gridColumnWidth*8 + 8*@gridGutterWidth; }
    .offset-9{ margin-left:@gridColumnWidth*9 + 9*@gridGutterWidth; }
    .offset-10{ margin-left:@gridColumnWidth*10 + 10*@gridGutterWidth; }
    .offset-11{ margin-left:@gridColumnWidth*11 + 11*@gridGutterWidth; }
    .offset-12{ margin-left:@gridColumnWidth*12 + 12*@gridGutterWidth; }
    .offset-13{ margin-left:@gridColumnWidth*13 + 13*@gridGutterWidth; }
    .offset-14{ margin-left:@gridColumnWidth*14 + 14*@gridGutterWidth; }
    .offset-15{ margin-left:@gridColumnWidth*15 + 15*@gridGutterWidth; }

    >[class^='c-']:last-child{
        margin-right:0;
    }

    &::after{
        content:" ";
        height:0;
        display:block;
        clear:both;
    }

    &.nogap{

        .c-1,.c-2,.c-3,.c-4,
        .c-5,.c-6,.c-7,.c-8,
        .c-9,.c-10,.c-11,.c-12,
        .c-13,.c-14,.c-15,.c-16{
            display: block;
            float: left;
            margin-right: 0;
        }

        .c-1{ width:@gridColumnWidthWithoutGap;}
        .c-2{ width:@gridColumnWidthWithoutGap*2;}
        .c-3{ width:@gridColumnWidthWithoutGap*3;}
        .c-4{ width:@gridColumnWidthWithoutGap*4;}
        .c-5{ width:@gridColumnWidthWithoutGap*5;}
        .c-6{ width:@gridColumnWidthWithoutGap*6;}
        .c-7{ width:@gridColumnWidthWithoutGap*7;}
        .c-8{ width:@gridColumnWidthWithoutGap*8;}
        .c-9{ width:@gridColumnWidthWithoutGap*9;}
        .c-10{ width:@gridColumnWidthWithoutGap*10;}
        .c-11{ width:@gridColumnWidthWithoutGap*11;}
        .c-12{ width:@gridColumnWidthWithoutGap*12;}
        .c-13{ width:@gridColumnWidthWithoutGap*13;}
        .c-14{ width:@gridColumnWidthWithoutGap*14;}
        .c-15{ width:@gridColumnWidthWithoutGap*15;}
        .c-16{ width:100%;}

        .offset-1{ margin-left:@gridColumnWidthWithoutGap; }
        .offset-2{ margin-left:@gridColumnWidthWithoutGap*2; }
        .offset-3{ margin-left:@gridColumnWidthWithoutGap*3; }
        .offset-4{ margin-left:@gridColumnWidthWithoutGap*4; }
        .offset-5{ margin-left:@gridColumnWidthWithoutGap*5; }
        .offset-6{ margin-left:@gridColumnWidthWithoutGap*6; }
        .offset-7{ margin-left:@gridColumnWidthWithoutGap*7; }
        .offset-8{ margin-left:@gridColumnWidthWithoutGap*8; }
        .offset-9{ margin-left:@gridColumnWidthWithoutGap*9; }
        .offset-10{ margin-left:@gridColumnWidthWithoutGap*10; }
        .offset-11{ margin-left:@gridColumnWidthWithoutGap*11; }
        .offset-12{ margin-left:@gridColumnWidthWithoutGap*12; }
        .offset-13{ margin-left:@gridColumnWidthWithoutGap*13; }
        .offset-14{ margin-left:@gridColumnWidthWithoutGap*14; }
        .offset-15{ margin-left:@gridColumnWidthWithoutGap*15; }
    
    }

    &.averagegap{


        .c-1{ width:@gridColumnWidthGapAverage}
        .c-2{ width:@gridColumnWidthGapAverage*2 + @gridGutterWidth;}
        .c-3{ width:@gridColumnWidthGapAverage*3 + 2*@gridGutterWidth;}
        .c-4{ width:@gridColumnWidthGapAverage*4 + 3*@gridGutterWidth;}
        .c-5{ width:@gridColumnWidthGapAverage*5 + 4*@gridGutterWidth;}
        .c-6{ width:@gridColumnWidthGapAverage*6 + 5*@gridGutterWidth;}
        .c-7{ width:@gridColumnWidthGapAverage*7 + 6*@gridGutterWidth;}
        .c-8{ width:@gridColumnWidthGapAverage*8 + 7*@gridGutterWidth;}
        .c-9{ width:@gridColumnWidthGapAverage*9 + 8*@gridGutterWidth;}
        .c-10{ width:@gridColumnWidthGapAverage*10 + 9*@gridGutterWidth;}
        .c-11{ width:@gridColumnWidthGapAverage*11 + 10*@gridGutterWidth;}
        .c-12{ width:@gridColumnWidthGapAverage*12 + 11*@gridGutterWidth;}
        .c-13{ width:@gridColumnWidthGapAverage*13 + 12*@gridGutterWidth;}
        .c-14{ width:@gridColumnWidthGapAverage*14 + 13*@gridGutterWidth;}
        .c-15{ width:@gridColumnWidthGapAverage*15 + 14*@gridGutterWidth;}
        .c-16{ width:@gridColumnWidthGapAverage*16 + 15*@gridGutterWidth;}

        >[class^='c-']:first-child{
            margin-left:@gridGutterWidth;
        }

        >[class^='c-']:last-child{
            margin-right:@gridGutterWidth;
        }

        >.offset-1{ 
            margin-left:@gridColumnWidthGapAverage + 1*@gridGutterWidth;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage + 2*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-2{
            margin-left:@gridColumnWidthGapAverage*2 + 2*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*2 + 3*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-3{
            margin-left:@gridColumnWidthGapAverage*3 + 3*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*3 + 4*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-4{
            margin-left:@gridColumnWidthGapAverage*4 + 4*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*4 + 5*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-5{
            margin-left:@gridColumnWidthGapAverage*5 + 5*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*5 + 6*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-6{
            margin-left:@gridColumnWidthGapAverage*6 + 6*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*6 + 7*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-7{
            margin-left:@gridColumnWidthGapAverage*7 + 7*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*7 + 8*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-8{
            margin-left:@gridColumnWidthGapAverage*8 + 8*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*8 + 9*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-9{
            margin-left:@gridColumnWidthGapAverage*9 + 9*@gridGutterWidth !important;
            
            &:first-child{margin-left:@gridColumnWidthGapAverage*9 + 10*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-10{
            margin-left:@gridColumnWidthGapAverage*10 + 10*@gridGutterWidth !important;

            &:first-child{margin-left:@gridColumnWidthGapAverage*10 + 11*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-11{
            margin-left:@gridColumnWidthGapAverage*11 + 11*@gridGutterWidth !important;

            &:first-child{margin-left:@gridColumnWidthGapAverage*11 + 12*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-12{
            margin-left:@gridColumnWidthGapAverage*12 + 12*@gridGutterWidth !important;

            &:first-child{margin-left:@gridColumnWidthGapAverage*12 + 13*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-13{
            margin-left:@gridColumnWidthGapAverage*13 + 13*@gridGutterWidth !important;

            &:first-child{margin-left:@gridColumnWidthGapAverage*13 + 14*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-14{
            margin-left:@gridColumnWidthGapAverage*14 + 14*@gridGutterWidth !important;

            &:first-child{margin-left:@gridColumnWidthGapAverage*14 + 15*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }
        >.offset-15{
            margin-left:@gridColumnWidthGapAverage*15 + 15*@gridGutterWidth !important;

            &:first-child{margin-left:@gridColumnWidthGapAverage*15 + 16*@gridGutterWidth !important;}
            &:last-child{margin-right:0;}
        }

    }

    &.fill,
    &.fill>[class^='c-'] {
        height: 100%;
    }

    // default statement
    &{}

}
</style>
