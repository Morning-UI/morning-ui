import extend                       from 'extend';
import arrayUniq                    from 'array-uniq';
import GlobalEvent                  from './GlobalEvent';

let Move = {
    data : function () {

        return {
            Move : {
                can : false,
                target : null,
                container : null,
                lastMousedownIndex : -1,
                movedIndex : -1,
                $moveDragItem : null,
                moving : false,
                moveMouseFrom : {
                    x : 0,
                    y : 0
                },
                moveItemXy : {
                    x : 0,
                    y : 0
                },
                current : {
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
        _moveItemRecord : function (index) {

            this.lastMousedownIndex = index;

        },
        _moveStart : function (evt) {
            
            let $targets = this.$el.querySelectorAll(this.Move.target);
            let found = false;

            for (let $node of evt.path) {

                for (let $value of $targets.values()) {

                    if ($value === $node) {

                        found = true;

                        break;

                    }

                }

                if (found) {
                    
                    break;

                }

            }

            if (found) {

                let $target = this.$el.querySelectorAll(`${this.Move.container} ${this.Move.target}`)[this.lastMousedownIndex];
                let $container = this.$el.querySelector(this.Move.container);
                
                $target.classList.add('move-moving');
                
                let $moveDragItem = $target.cloneNode(true);
                let {x, y} = this._moveElementXy($target);
                
                $moveDragItem.classList.add('move-drag-item');
                $moveDragItem.style.top = `${y}px`;
                $moveDragItem.style.left = `${x}px`;
                $container.append($moveDragItem);

                this.Move.movedIndex = this.lastMousedownIndex;
                this.Move.moveMouseFrom.x = evt.clientX;
                this.Move.moveMouseFrom.y = evt.clientY;
                this.Move.moveItemXy.x = x;
                this.Move.moveItemXy.y = y;
                this.Move.$moveDragItem = $moveDragItem;
                this.Move.moving = true;

                this.$emit('_moveStarted');

            }

        },
        _moveMousemove : function (evt) {

            if (this.Move.moving === false) {

                return;

            }

            let x = evt.clientX - this.Move.moveMouseFrom.x + this.Move.moveItemXy.x;
            let y = evt.clientY - this.Move.moveMouseFrom.y + this.Move.moveItemXy.y;

            this.Move.$moveDragItem.style.top = `${y}px`;
            this.Move.$moveDragItem.style.left = `${x}px`;
            this.Move.current.x = x;
            this.Move.current.y = y;

            this.$emit('_moveChange');

        },
        _moveMouseup : function () {

            // clearTimeout(this.Move.startTimeout);

            if (!this.Move.moving) {

                return;

            }

            let $target = this.$el.querySelector(`.move-moving`);

            if ($target) {

                $target.classList.remove('move-moving');

            }

            this.Move.movedIndex = -1;
            this.Move.lastMousedownIndex = -1;
            this.Move.$moveDragItem.remove();
            this.Move.$moveDragItem = null;
            this.Move.moving = false;

            this.$emit('_moveEnded');

        },
        // _moveAddGlobalListener : function () {

        //     this.morning._moveListener.push(this.uiid);
        //     this.morning._moveListener = arrayUniq(this.morning._moveListener);

        //     if (this.morning._moveListener.length > 0) {

        //         document.addEventListener('mousemove', this._moveMousemove);
        //         document.addEventListener('mouseup', this._moveMouseup);

        //     }

        // },
        // _moveRemoveGlobalListener : function () {

        //     let index = this.morning._moveListener.indexOf(this.uiid);

        //     if (index !== -1) {

        //         this.morning._moveListener.splice(index, 1);

        //     }

        //     if (this.morning._moveListener.length === 0) {

        //         document.addEventListener('mousemove', this._moveMousemove);
        //         document.addEventListener('mouseup', this._moveMouseup);
            
        //     }
        
        // },
        _moveElementXy : function ($ele) {

            let client = $ele.getBoundingClientRect();
            let marginLeft = $ele.ownerDocument.defaultView.getComputedStyle($ele).marginLeft;
            let marginTop = $ele.ownerDocument.defaultView.getComputedStyle($ele).marginTop;

            marginLeft = +marginLeft.split('px')[0];
            marginTop = +marginTop.split('px')[0];

            let x = client.left - marginLeft;
            let y = client.top - marginTop;

            return {
                x,
                y
            };

        }
    },
    mounted : function () {

        this.$watch('Move.can', newVal => {

            let $container = this.$el.querySelector(this.Move.container);

            if (newVal) {
                
                $container.addEventListener('mousedown', this._moveStart);
                this._globalEventAdd('mousemove', '_moveMousemove');
                this._globalEventAdd('mouseup', '_moveMouseup');
                // this._moveAddGlobalListener();

            } else {

                if ($container) {

                    $container.removeEventListener('mousedown', this._initMoveItem);

                }

                this._globalEventRemove('mousemove', '_moveMousemove');
                this._globalEventRemove('mouseup', '_moveMouseup');
                // this._moveRemoveGlobalListener();

            }

        }, {
            immediate : true
        });

    },
    updated : function () {

        let $oldTarget = this.$el.querySelector(`${this.Move.target}.move-moving:not(.move-drag-item)`);
        let $newTarget = this.$el.querySelectorAll(`${this.Move.target}:not(.move-drag-item)`)[this.Move.movedIndex];

        if ($oldTarget) {

            $oldTarget.classList.remove('move-moving');

        }

        if ($newTarget) {
            
            $newTarget.classList.add('move-moving');

        }

    },
    beforeDestroy : function () {

        this._globalEventRemove('mousemove', '_moveMousemove');
        this._globalEventRemove('mouseup', '_moveMouseup');
        // this._moveRemoveGlobalListener();

    }
};

Move = extend(true, Move, GlobalEvent);

export default Move;
