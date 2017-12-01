import GlobalEvent                  from './GlobalEvent';

const moveDelayTime = 200;

let Move = {
    mixins : [GlobalEvent],
    data : function () {

        return {
            Move : {
                can : false,
                // 延迟多久触发拖拽，为了和click兼容
                $root : null,
                delay : moveDelayTime,
                target : null,
                container : null,
                lastMousedownIndex : -1,
                movedIndex : -1,
                delayTimeout : null,
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
                moveItemWh : {
                    w : 0,
                    h : 0
                },
                current : {
                    x : 0,
                    y : 0
                },
                windowCalibrate : {
                    x : 0,
                    y : 0
                },
                range : [false, false, false, false],
                overRange : [0, 0, 0, 0]
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

            this.Move.lastMousedownIndex = index;

        },
        _moveMousedown : function (evt) {

            if (evt.button !== 0) {

                return;

            }

            this.Move.delayTimeout = setTimeout(() => {

                this._moveStart(evt);

            }, this.Move.delay);

        },
        _moveStart : function (evt) {
            
            let $targets = this.Move.$root.querySelectorAll(this.Move.target);
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

                let $target = this.Move.$root.querySelectorAll(`${this.Move.container} ${this.Move.target}`)[this.Move.lastMousedownIndex];
                let $container = this.Move.$root.querySelector(this.Move.container);
                let {x, y} = this._moveElementXy($target);
                let $moveDragItem = $target.cloneNode(true);

                $moveDragItem.classList.add('move-drag-item');
                $moveDragItem.style.top = `${y}px`;
                $moveDragItem.style.left = `${x}px`;
                $container.append($moveDragItem);

                this.Move.overRange = [0, 0, 0, 0];
                this.Move.$moveDragItem = $moveDragItem;
                this.Move.movedIndex = this.Move.lastMousedownIndex;
                this.Move.moveMouseFrom.x = evt.clientX;
                this.Move.moveMouseFrom.y = evt.clientY;
                this.Move.moveItemXy.x = x;
                this.Move.moveItemXy.y = y;
                this.Move.moveItemWh.w = $moveDragItem.offsetWidth;
                this.Move.moveItemWh.h = $moveDragItem.offsetHeight;
                this.Move.moving = true;

                $target.classList.add('move-moving');
                this.$emit('_moveStarted');

            }

        },
        _moveMousemove : function (evt) {

            if (this.Move.moving === false) {

                return;

            }

            if (evt.buttons !== 1) {

                this._moveMouseup();

                return;
                
            }

            let x = evt.clientX - this.Move.moveMouseFrom.x + this.Move.moveItemXy.x;
            let y = evt.clientY - this.Move.moveMouseFrom.y + this.Move.moveItemXy.y;

            // x min
            if (this.Move.range[0] !== false &&
                x < this.Move.range[0]) {

                x = this.Move.range[0];
                this.Move.overRange[0] = 1;
                this.$emit('_moveOnXMin');

            } else if (this.Move.overRange[0]) {

                this.Move.overRange[0] = 0;
                this.$emit('_moveOffXMin');

            }

            // x max
            if (this.Move.range[2] !== false &&
                (x + this.Move.moveItemWh.w) > this.Move.range[2]) {

                x = this.Move.range[2] - this.Move.moveItemWh.w;
                this.Move.overRange[2] = 1;
                this.$emit('_moveOnXMax');

            } else if (this.Move.overRange[2]) {

                this.Move.overRange[2] = 0;
                this.$emit('_moveOffXMax');

            }

            // y min
            if (this.Move.range[1] !== false &&
                y < this.Move.range[1]) {

                y = this.Move.range[1];
                this.Move.overRange[1] = 1;
                this.$emit('_moveOnYMin');

            } else if (this.Move.overRange[1]) {

                this.Move.overRange[1] = 0;
                this.$emit('_moveOffXMin');

            }

            // y max
            if (this.Move.range[3] !== false &&
                (y + this.Move.moveItemWh.h) > this.Move.range[3]) {

                y = this.Move.range[3] - this.Move.moveItemWh.h;
                this.Move.overRange[3] = 1;
                this.$emit('_moveOnYMax');

            } else if (this.Move.overRange[3]) {

                this.Move.overRange[3] = 0;
                this.$emit('_moveOffYMax');

            }

            this.Move.$moveDragItem.style.top = `${y}px`;
            this.Move.$moveDragItem.style.left = `${x}px`;
            this.Move.current.x = x;
            this.Move.current.y = y;

            this.$emit('_moveChange');

        },
        _moveMouseup : function (evt) {

            // if has evt, must left button up
            if (evt && evt.button !== 0) {

                return;

            }

            clearTimeout(this.Move.delayTimeout);

            if (!this.Move.moving) {

                return;

            }

            let $target = this.Move.$root.querySelector(`.move-moving`);

            if ($target) {

                $target.classList.remove('move-moving');

            }

            this.Move.movedIndex = -1;
            // this.Move.lastMousedownIndex = -1;
            this.Move.$moveDragItem.remove();
            this.Move.$moveDragItem = null;
            this.Move.moving = false;

            this.$emit('_moveEnded');

        },
        _moveElementXy : function ($target) {

            let client = $target.getBoundingClientRect();
            let marginLeft = $target.ownerDocument.defaultView.getComputedStyle($target).marginLeft;
            let marginTop = $target.ownerDocument.defaultView.getComputedStyle($target).marginTop;
            let x;
            let y;

            marginLeft = +marginLeft.split('px')[0];
            marginTop = +marginTop.split('px')[0];

            x = client.left + this.Move.windowCalibrate.x - marginLeft;
            y = client.top + this.Move.windowCalibrate.y - marginTop;

            return {
                x,
                y
            };

        }
    },
    mounted : function () {

        // default $root is $el
        this.Move.$root = this.$el;

        this.$watch('Move.can', newVal => {

            let $container = this.Move.$root.querySelector(this.Move.container);

            if (newVal) {
                
                $container.addEventListener('mousedown', this._moveMousedown);
                this._globalEventAdd('mousemove', '_moveMousemove');
                this._globalEventAdd('mouseup', '_moveMouseup');
                // this._moveAddGlobalListener();

            } else {

                if ($container) {

                    $container.removeEventListener('mousedown', this._moveMousedown);

                }

                this._globalEventRemove('mousemove', '_moveMousemove');
                this._globalEventRemove('mouseup', '_moveMouseup');

                if (this.Move.moving) {

                    this._moveMouseup();

                }

            }

        }, {
            immediate : true
        });

    },
    updated : function () {

        let $oldTarget = this.Move.$root.querySelector(`${this.Move.target}.move-moving`);
        let $newTarget = this.Move.$root.querySelectorAll(`${this.Move.target}:not(.move-drag-item)`)[this.Move.movedIndex];

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

    }
};

export default Move;
