import Quill from 'quill';
import Fuse from 'fuse.js';
import emojiList from './emoji-list.js';

const Module = Quill.import('core/module');

let makeElement = (tag, attrs, ...children) => {

    const elem = document.createElement(tag);

    Object.keys(attrs).forEach(key => (elem[key] = attrs[key]));
    children.forEach(child => {

        if (typeof child === 'string') {

            child = document.createTextNode(child);
        
        }
        elem.appendChild(child);
    
    });
    
    return elem;

};

class ShortNameEmoji extends Module {

    constructor (quill, options) {

        super(quill, options);

        this.emojiList = options.emojiList;
        this.fuse = new Fuse(options.emojiList, options.fuse);

        this.quill = quill;
        this.onClose = options.onClose;
        this.onOpen = options.onOpen;
        this.container = document.createElement('ul');
        this.container.classList.add('emoji_completions');
        this.quill.container.appendChild(this.container);
        this.container.style.position = 'absolute';
        this.container.style.display = 'none';

        this.onSelectionChange = this.maybeUnfocus.bind(this);
        this.onTextChange = this.update.bind(this);

        this.open = false;
        this.atIndex = null;
        this.focusedButton = null;

        this.isWhiteSpace = function (ch) {

            let whiteSpace = false;

            if (/\s/.test(ch)) {

                whiteSpace = true;
            
            }
            
            return whiteSpace;
        
        };

        /* eslint-disable no-magic-numbers */
        quill.keyboard.addBinding({
            key : 186,
            shiftKey : true,
        }, this.triggerPicker.bind(this));

        quill.keyboard.addBinding({
            key : 59,
            shiftKey : true,
        }, this.triggerPicker.bind(this));

        quill.keyboard.addBinding({
            key : 39,
            collapsed : true
        }, this.handleArrow.bind(this));

        quill.keyboard.addBinding({
            key : 40,
            collapsed : true
        }, this.handleArrow.bind(this));
        /* eslint-enable no-magic-numbers */
    
    }

    triggerPicker (range) {

        if (this.open) {

            return true;

        }
        if (range.length > 0) {

            this.quill.deleteText(range.index, range.length, Quill.sources.USER);
        
        }

        this.quill.insertText(range.index, ':', 'emoji-shortname', Quill.sources.USER);
        const atSignBounds = this.quill.getBounds(range.index);

        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);

        this.atIndex = range.index;

        /* eslint-disable-next-line no-magic-numbers */
        let paletteMaxPos = atSignBounds.left + 250;

        if (paletteMaxPos > this.quill.container.offsetWidth) {

            /* eslint-disable-next-line no-magic-numbers */
            this.container.style.left = `${atSignBounds.left - 250}px`;
        
        } else {

            this.container.style.left = `${atSignBounds.left}px`;
        
        }

        this.container.style.top = `${atSignBounds.top + atSignBounds.height}px`;
        this.open = true;

        this.quill.on('text-change', this.onTextChange);
        this.quill.once('selection-change', this.onSelectionChange);
        
        if (this.onOpen) {

            this.onOpen();

        }

    }

    handleArrow () {

        if (!this.open) {

            return true;

        }
        this.buttons[0].classList.remove('emoji-active');
        this.buttons[0].focus();
        if (this.buttons.length > 1) {

            this.buttons[1].focus();
        
        }
    
    }

    update () {

        const sel = this.quill.getSelection().index;

        if (this.atIndex >= sel) {

            return this.close(null);
        
        }
        // Using: fuse.js
        this.query = this.quill.getText(this.atIndex + 1, sel - this.atIndex - 1);

        try {

            if (event && this.isWhiteSpace(this.query)) {

                this.close(null);
                
                return;
            
            }
        
        } catch (e) {

            /* eslint-disable-next-line no-console */
            console.warn(e);

        }

        this.query = this.query.trim();

        let emojis = this.fuse.search(this.query);

        emojis.sort((a, b) => a.emoji_order - b.emoji_order);

        if (this.query.length < this.options.fuse.minMatchCharLength || emojis.length === 0) {

            this.container.style.display = 'none';
            
            return;
        
        }

        /* eslint-disable-next-line no-magic-numbers */
        if (emojis.length > 15) {

            /* eslint-disable-next-line no-magic-numbers */
            emojis = emojis.slice(0, 15);
        
        }
        this.renderCompletions(emojis);
    
    }

    maybeUnfocus () {

        if (this.container.querySelector('*:focus')) {

            return;

        }
        this.close(null);
    
    }

    renderCompletions (emojis) {

        try {

            if (event) {

                /* eslint-disable-next-line no-magic-numbers */
                if (event.key === 'Enter' || event.keyCode === 13) {

                    this.close(emojis[0], 1);
                    this.container.style.display = 'none';
                    
                    return;
                
                } else if (event.key === 'Tab' || event.keyCode === 9) {

                    this.quill.disable();
                    this.buttons[0].classList.remove('emoji-active');
                    this.buttons[1].focus();
                    
                    return;
                
                }
            
            }
            if (event) {

                return;

            }
        
        } catch (e) {

            /* eslint-disable-next-line no-console */
            console.warn(e);
        
        }

        while (this.container.firstChild) {

            this.container.removeChild(this.container.firstChild);
        
        }
        const buttons = Array(emojis.length);

        this.buttons = buttons;

        /* eslint-disable no-magic-numbers */
        const handler = (i, emoji) => event => {

            if (event.key === 'ArrowRight' || event.keyCode === 39) {

                event.preventDefault();
                buttons[Math.min(buttons.length - 1, i + 1)].focus();
            
            } else if (event.key === 'Tab' || event.keyCode === 9) {

                event.preventDefault();
                if ((i + 1) === buttons.length) {

                    buttons[0].focus();
                    
                    return;
                
                }
                buttons[Math.min(buttons.length - 1, i + 1)].focus();
            
            } else if (event.key === 'ArrowLeft' || event.keyCode === 37) {

                event.preventDefault();
                buttons[Math.max(0, i - 1)].focus();
            
            } else if (event.key === 'ArrowDown' || event.keyCode === 40) {

                event.preventDefault();
                buttons[Math.min(buttons.length - 1, i + 1)].focus();
            
            } else if (event.key === 'ArrowUp' || event.keyCode === 38) {

                event.preventDefault();
                buttons[Math.max(0, i - 1)].focus();
            
            } else if (event.key === 'Enter' || event.keyCode === 13
               || event.key === ' ' || event.keyCode === 32
               || event.key === 'Tab' || event.keyCode === 9) {

                event.preventDefault();
                this.quill.enable();
                this.close(emoji);
            
            }
        
        };
        /* eslint-enable no-magic-numbers */

        emojis.forEach((emoji, i) => {

            const li = makeElement(
                'li', {},
                makeElement(
                    'button', {
                        type : 'button'
                    },
                    makeElement('span', {
                        className : `button-emoji ap ap-${emoji.name}`,
                        innerHTML : emoji.code_decimal
                    }),
                    // makeElement('span', {className: "matched"}, this.query),
                    // makeElement('span', {className: "unmatched"}, emoji.shortname.slice(this.query.length+1))
                    makeElement('span', {
                        className : 'unmatched'
                    }, emoji.shortname)
                )
            );

            this.container.appendChild(li);
            buttons[i] = li.firstChild;
            // Events will be GC-ed with button on each re-render:
            buttons[i].addEventListener('keydown', handler(i, emoji));
            buttons[i].addEventListener('mousedown', () => this.close(emoji));
            buttons[i].addEventListener('focus', () => (this.focusedButton = i));
            buttons[i].addEventListener('unfocus', () => (this.focusedButton = null));
        
        });

        this.container.style.display = 'block';
        // emoji palette on top
        if (this.quill.container.classList.contains('top-emoji')) {

            let x = this.container.querySelectorAll('li');
            let i;

            for (i = 0; i < x.length; i++) {

                x[i].style.display = 'block';
            
            }

            let windowHeight = window.innerHeight;
            let editorPos = this.quill.container.getBoundingClientRect().top;

            if (editorPos > windowHeight / 2 && this.container.offsetHeight > 0) {

                this.container.style.top = `-${this.container.offsetHeight}px`;
            
            }
        
        }

        buttons[0].classList.add('emoji-active');
    
    }

    close (value, trailingDelete = 0) {

        this.quill.enable();
        this.container.style.display = 'none';
        while (this.container.firstChild) {

            this.container.removeChild(this.container.firstChild);
        
        }
        this.quill.off('selection-change', this.onSelectionChange);
        this.quill.off('text-change', this.onTextChange);
        if (value) {

            this.quill.deleteText(this.atIndex, this.query.length + 1 + trailingDelete, Quill.sources.USER);
            this.quill.insertEmbed(this.atIndex, 'emoji', value, Quill.sources.USER);
            setTimeout(() => this.quill.setSelection(this.atIndex + 1), 0);
        
        }
        this.quill.focus();
        this.open = false;
        
        if (this.onClose) {

            this.onClose(value);

        }
    
    }

}

/* eslint-disable no-magic-numbers */
ShortNameEmoji.DEFAULTS = {
    emojiList : emojiList,
    fuse : {
        shouldSort : true,
        threshold : 0.1,
        location : 0,
        distance : 100,
        maxPatternLength : 32,
        minMatchCharLength : 1,
        keys : [
            'shortname'
        ]
    }
};
/* eslint-enable no-magic-numbers */

export default ShortNameEmoji;
