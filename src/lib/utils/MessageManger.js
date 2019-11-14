import PopupManager                 from 'Utils/PopupManager';
import IndexManager                 from 'Utils/IndexManager';

const defaultDoneTime = 4000;

let MessageManger = {
    mixins : [PopupManager, IndexManager],
    props : {
        closeBtn : {
            type : Boolean,
            default : false
        },
        doneTime : {
            type : [Number, Boolean],
            default : defaultDoneTime
        },
        showType : {
            type : String,
            default : 'topright',
            validator : (value => ['topleft', 'topright', 'bottomleft', 'bottomright'].indexOf(value) !== -1)
        },
        maxShow : {
            type : [Number, Boolean],
            default : 3
        }
    },
    data : function () {

        return {
            data : {
                messageBoxMarginBottom : 0,
                messageListOffset : 0,
                messageDefaultStringKey : 'body',
                messageId : 0,
                list : [],
                shortType : {
                    top : 't',
                    topleft : 'tl',
                    topright : 'tr',
                    bottom : 'b',
                    bottomleft : 'bl',
                    bottomright : 'br'
                }
            }
        };

    },
    methods : {
        _resizeList : function () {

            if (this.conf.maxShow &&
                this.data.list.length > +this.conf.maxShow) {

                let height = 0;
                let $messages = this.$el.querySelectorAll('.list .msg');

                const messageMarginBottom = this.data.messageBoxMarginBottom;
                const messageListOffset = this.data.messageListOffset;

                $messages = Object.values($messages).slice(0, +this.conf.maxShow);

                for (let $message of $messages) {

                    height += $message.clientHeight + messageMarginBottom;

                }

                // 没有使用data绑定style因为会影响transition
                this.$el.querySelector('.list').style.height = `${height + messageListOffset}px`;

            }

        },
        push : function (options) {

            let defaultOptions = {
                id : this.data.messageId++,

                // message
                message : '',
                title : null,
                color : 'theme',

                // notice
                body : '',
                header : null,
                footer : null,
                icon : null,
                type : null,
                classes : []
            };
            let list = Object.assign([], this.data.list);

            if (typeof options === 'string') {

                options = Object.assign(defaultOptions, {
                    [this.data.messageDefaultStringKey] : options
                });

            } else {

                options = Object.assign(defaultOptions, options);

            }

            switch (options.type) {

                case 'success' :

                    options.icon = `<i class="mo-icon mo-icon-correct-co"></i>`;
                    options.classes = ['co-success'];

                    break;

                case 'error' :

                    options.icon = `<i class="mo-icon mo-icon-error-co"></i>`;
                    options.classes = ['co-danger'];

                    break;

                case 'warning' :

                    options.icon = `<i class="mo-icon mo-icon-warn-o"></i>`;
                    options.classes = ['co-warning'];

                    break;

                case 'info' :

                    options.icon = `<i class="mo-icon mo-icon-info-co"></i>`;
                    options.classes = ['co-primary'];

                    break;

                default :

                    break;

            }

            if (this.conf.showType[0] === 'b') {

                list.push(options);

            } else {

                list.unshift(options);

            }

            this.$el.style.zIndex = this._indexMax();
            this.data.list = list;

            if (this.conf.doneTime !== false) {

                setTimeout(() => {

                    this.close(options.id);

                }, this.conf.doneTime);

            }

            this.$emit('push');

            return options.id;

        },
        close : function (id) {

            for (let index in this.data.list) {

                if (id === this.data.list[index].id) {

                    this.data.list.splice(index, 1);

                    this.$emit('close');

                }

            }

            return this;

        }
    },
    mounted : function () {

        this._popupShow();

        this.$watch('data.list', () => {

            this._resizeList();

        }, {
            immediate : true,
            deep : true
        });

        this.$watch('conf.maxShow', () => {

            this._resizeList();

        });

        this.$watch('conf.showType', (newValue, oldValue) => {

            if (newValue[0] !== oldValue[0]) {

                this.data.list.reverse();

            }

            this._resizeList();

        });

    }
};

export default MessageManger;
