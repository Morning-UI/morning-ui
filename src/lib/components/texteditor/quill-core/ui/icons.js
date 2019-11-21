import alignLeftIcon from 'quill/assets/icons/align-left.svg';
import alignCenterIcon from 'quill/assets/icons/align-center.svg';
import alignRightIcon from 'quill/assets/icons/align-right.svg';
import alignJustifyIcon from 'quill/assets/icons/align-justify.svg';
import backgroundIcon from 'quill/assets/icons/background.svg';
import blockquoteIcon from 'quill/assets/icons/blockquote.svg';
import boldIcon from 'quill/assets/icons/bold.svg';
import cleanIcon from 'quill/assets/icons/clean.svg';
import codeIcon from 'quill/assets/icons/code.svg';
import colorIcon from 'quill/assets/icons/color.svg';
import directionLeftToRightIcon from 'quill/assets/icons/direction-ltr.svg';
import directionRightToLeftIcon from 'quill/assets/icons/direction-rtl.svg';
import formulaIcon from 'quill/assets/icons/formula.svg';
import headerIcon from 'quill/assets/icons/header.svg';
import header2Icon from 'quill/assets/icons/header-2.svg';
import italicIcon from 'quill/assets/icons/italic.svg';
import imageIcon from 'quill/assets/icons/image.svg';
import indentIcon from 'quill/assets/icons/indent.svg';
import outdentIcon from 'quill/assets/icons/outdent.svg';
import linkIcon from 'quill/assets/icons/link.svg';
import listBulletIcon from 'quill/assets/icons/list-bullet.svg';
import listCheckIcon from 'quill/assets/icons/list-check.svg';
import listOrderedIcon from 'quill/assets/icons/list-ordered.svg';
import subscriptIcon from 'quill/assets/icons/subscript.svg';
import superscriptIcon from 'quill/assets/icons/superscript.svg';
import strikeIcon from 'quill/assets/icons/strike.svg';
import tableIcon from 'quill/assets/icons/table.svg';
import underlineIcon from 'quill/assets/icons/underline.svg';
import videoIcon from 'quill/assets/icons/video.svg';

export default {
    align : {
        '' : alignLeftIcon,
        center : alignCenterIcon,
        right : alignRightIcon,
        justify : alignJustifyIcon
    },
    background : backgroundIcon,
    blockquote : blockquoteIcon,
    bold : boldIcon,
    clean : cleanIcon,
    code : codeIcon,
    'code-block' : codeIcon,
    color : colorIcon,
    direction : {
        '' : directionLeftToRightIcon,
        rtl : directionRightToLeftIcon
    },
    formula : formulaIcon,
    header : {
        1 : headerIcon,
        2 : header2Icon
    },
    italic : italicIcon,
    image : imageIcon,
    indent : {
        '+1' : indentIcon,
        '-1' : outdentIcon
    },
    link : linkIcon,
    list : {
        bullet : listBulletIcon,
        check : listCheckIcon,
        ordered : listOrderedIcon
    },
    script : {
        sub : subscriptIcon,
        super : superscriptIcon
    },
    strike : strikeIcon,
    table : tableIcon,
    underline : underlineIcon,
    video : videoIcon
};
