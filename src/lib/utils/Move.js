import GlobalEvent                  from './GlobalEvent';

const moveDelayTime = 200;

let Move = {
    mixins : [GlobalEvent],
    data : function () {

        return {
            Move : {
                can : false,
                type : 'fixed',
                // 延迟多久触发拖拽，为了和click兼容
                $root : null,
                delay : moveDelayTime,
                target : null,
                scrollContainer : null,
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
                moveOffset : {
                    x : 0,
                    y : 0
                },
                current : {
                    x : 0,
                    y : 0
                },
                scrollFrom : {
                    x : 0,
                    y : 0
                },
                scrollOffset : {
                    x : 0,
                    y : 0
                },
                // windowCalibrate : {
                //     x : 0,
                //     y : 0
                // },
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

                if (this.Move.type === 'fixed') {

                    $moveDragItem.classList.add('fixed');

                } else {

                    $moveDragItem.classList.add('absolute');

                }

                if (this.Move.type === 'absolute' && this.Move.scrollContainer) {

                    let $scrollContainer = this.Move.$root.querySelector(this.Move.scrollContainer);

                    if ($scrollContainer) {
                    
                        $scrollContainer.addEventListener('scroll', this._moveScroll);
                        this.Move.scrollFrom.x = $scrollContainer.scrollLeft;
                        this.Move.scrollFrom.y = $scrollContainer.scrollTop;

                    }

                }

                $container.append($moveDragItem);

                $moveDragItem.style.top = `${y}px`;
                $moveDragItem.style.left = `${x}px`;

                this.Move.overRange = [0, 0, 0, 0];
                this.Move.$moveDragItem = $moveDragItem;
                this.Move.movedIndex = this.Move.lastMousedownIndex;
                this.Move.moveMouseFrom.x = evt.clientX;
                this.Move.moveMouseFrom.y = evt.clientY;
                this.Move.moveOffset.x = evt.clientX;
                this.Move.moveOffset.y = evt.clientY;
                this.Move.scrollOffset.x = 0;
                this.Move.scrollOffset.y = 0;
                this.Move.moveItemXy.x = x;
                this.Move.moveItemXy.y = y;
                this.Move.current.x = x;
                this.Move.current.y = y;
                this.Move.moveItemWh.w = $moveDragItem.offsetWidth;
                this.Move.moveItemWh.h = $moveDragItem.offsetHeight;
                this.Move.moving = true;

                $target.classList.add('move-moving');
                this.$emit('_moveStarted');

            }

        },
        _moveCore : function () {

            let x = this.Move.moveOffset.x - this.Move.moveMouseFrom.x + this.Move.moveItemXy.x + this.Move.scrollOffset.x;
            let y = this.Move.moveOffset.y - this.Move.moveMouseFrom.y + this.Move.moveItemXy.y + this.Move.scrollOffset.y;
            let limit = this._moveRangeLimit(x, y);
            
            x = limit.x;
            y = limit.y;

            this.Move.$moveDragItem.style.top = `${y}px`;
            this.Move.$moveDragItem.style.left = `${x}px`;
            this.Move.current.x = x;
            this.Move.current.y = y;

            this.$emit('_moveChange');

        },
        _moveMousemove : function (evt) {

            if (this.Move.moving === false) {

                return;

            }

            if (evt.buttons !== 1) {

                this._moveMouseup();

                return;
                
            }

            this.Move.moveOffset.x = evt.clientX;
            this.Move.moveOffset.y = evt.clientY;

            this._moveCore();

        },
        _moveScroll : function () {

            if (this.Move.type === 'absolute' && this.Move.scrollContainer) {

                let $scrollContainer = this.Move.$root.querySelector(this.Move.scrollContainer);

                if ($scrollContainer) {
                    
                    this.Move.scrollOffset.x = $scrollContainer.scrollLeft - this.Move.scrollFrom.x;
                    this.Move.scrollOffset.y = $scrollContainer.scrollTop - this.Move.scrollFrom.y;

                }

            }

            this._moveCore();

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

            if (this.Move.type === 'absolute' && this.Move.scrollContainer) {

                let $scrollContainer = this.Move.$root.querySelector(this.Move.scrollContainer);

                if ($scrollContainer) {
                
                    $scrollContainer.removeEventListener('scroll', this._moveScroll);

                }

            }

            this.Move.movedIndex = -1;
            // this.Move.lastMousedownIndex = -1;
            this.Move.$moveDragItem.remove();
            this.Move.$moveDragItem = null;
            this.Move.moving = false;

            this.$emit('_moveEnded');

        },
        _moveRangeLimit : function (x, y) {

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

            return {
                x,
                y
            };

        },
        _moveElementXy : function ($target) {

            let client = $target.getBoundingClientRect();
            let marginLeft = $target.ownerDocument.defaultView.getComputedStyle($target).marginLeft;
            let marginTop = $target.ownerDocument.defaultView.getComputedStyle($target).marginTop;
            let left = $target.ownerDocument.defaultView.getComputedStyle($target).left;
            let top = $target.ownerDocument.defaultView.getComputedStyle($target).top;
            let x;
            let y;
            
            // body > div if has transform, is tether
            let $tetParent = $target.closest('body > div');
            let transformX = 0;
            let transformY = 0;

            // if parent has transformX/Y
            if ($tetParent) {

                let transform = $tetParent.ownerDocument.defaultView.getComputedStyle($tetParent).transform;

                if (/matrix/.test(transform)) {

                    let matrix = new DOMMatrix(JSON.parse(`[${transform.replace(/(^matrix\(|\)$)/g, '')}]`));

                    transformX = matrix.m41 - window.scrollX;
                    transformY = matrix.m42 - window.scrollY;

                }

            }

            marginLeft = +marginLeft.split('px')[0];
            marginTop = +marginTop.split('px')[0];
            left = +left.split('px')[0];
            top = +top.split('px')[0];

            if (this.Move.type === 'fixed') {

                x = client.left - marginLeft - transformX;
                y = client.top - marginTop - transformY;

            } else {

                x = left;
                y = top;

            }

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

                if (this.Move.type === 'absolute' && this.Move.scrollContainer) {

                    let $scrollContainer = this.Move.$root.querySelector(this.Move.scrollContainer);

                    if ($scrollContainer) {
                    
                        $scrollContainer.removeEventListener('scroll', this._moveScroll);

                    }

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
