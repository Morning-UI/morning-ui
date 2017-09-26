let Move = {
    data : function () {

        return {
            Move : {
                can : false,
                $target : null,
                $container : null,
                $moveItem : null,
                initTimeout : null,
                moveInitXy : {
                    x : 0,
                    y : 0
                }
            }
        };

    },
    computed : {
        moveClass : function () {

            return {
                'can-move' : this.Move.can
            };

        }
    },
    methods : {
        _moveStart : function (evt) {
                console.log(evt);
            
            const initTimeout = 200;

            let $moveItem;

            for (let $node of evt.path) {

                if (this.Move.$target.indexOf($node) !== -1) {

                    $moveItem = $node;

                    break;

                }

            }

            this.Move.initTimeout = setTimeout(() => {

                this.Move.$moveItem = $moveItem;
                this.Move.moveInitXy.x = evt.clientX;
                this.Move.moveInitXy.y = evt.clientY;
                this.$emit('_moveStarted');

                // this._blurInput();
            
            }, initTimeout);

        },
        _moveMousemove : function () {},
        _moveMouseup : function () {}
    },
    mounted : function () {

        this.$watch('Move.can', newVal => {

            if (newVal) {
                
                this.Move.$container.addEventListener('mousedown', this._moveStart);
                document.addEventListener('mousemove', this._moveMousemove);
                document.addEventListener('mouseup', this._moveMouseup);

            } else {

                this.Move.$container.removeEventListener('mousedown', this._initMoveItem);
                document.removeEventListener('mousemove', this._moveMousemove);
                document.removeEventListener('mouseup', this._moveMouseup);

            }

        }, {
            immediate : true
        });

    },
    beforeDestroy : function () {

        clearTimeout(this.Move.initTimeout);
        document.removeEventListener('mousemove', this._moveMousemove);
        document.removeEventListener('mouseup', this._moveMouseup);

    }
};

export default Move;
