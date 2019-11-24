<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
             <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GuluPopover',
        data() {
            return {
                visible: false,
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator (value) {
                    return ['top', 'bottom', 'left', 'bottom'].indexOf(value) >= 0 // 代表包含在其中
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator (value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
//        mounted () {
//            if(this.trigger === 'click') {
//                this.$refs.popover.addEventListener('click', this.onClick)
//            } else {
//                this.$refs.popover.addEventListener('mouseenter', this.open)
//                this.$refs.popover.addEventListener('mouseleave', this.close)
//            }
////            this.$refs.popover.addEventListener(this.openEvent, (event) => {
////                if(this.$refs.triggerWrapper.contains(event.target)) {
////                    this.open()
////                }
////            })
////            this.$refs.popover.addEventListener(this.closeEvent, (event) => {
////                if(this.$refs.triggerWrapper.contains(event.target)) {
////                    this.close()
////                }
////            })
//        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }

        },
        mounted() {
            console.log(this.$refs.triggerWrapper)
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destoryed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                const {height: height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX
                    },
                    bottom: {
                        top: top + height + window.scrollY,
                        left: left + window.scrollX
                    },
                    left: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX + width
                    }
                }

//                if (this.position === 'top') {
//                    contentWrapper.style.left = left + window.scrollX + 'px'
//                    contentWrapper.style.top = top + window.scrollY + 'px'
//                } else if (this.position === 'bottom') {
//                    contentWrapper.style.left = left + window.scrollX + 'px'
//                    contentWrapper.style.top = top + height + window.scrollY + 'px'
//                } else if (this.position === 'left') {
//                    contentWrapper.style.left = left + window.scrollX + 'px'
//                    let {height: height2} = contentWrapper.getBoundingClientRect()
//                    contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
//                } else if (this.position === 'right') {
//                    contentWrapper.style.left = left + window.scrollX + width + 'px'
//                    contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
//                }
                contentWrapper.style.left = positions[this.position].left + 'px'
                contentWrapper.style.top = positions[this.position].top + 'px'

            },
            onClickDocument (e){
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
//                    this.visible = !this.visible
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    $border-color: #333333;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        /*box-shadow: 0 0 3px rgba(0,0,0,0.5);*/
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
    &::before,&::after {
                   content: '';
                   display: block;
                   border: 10px solid transparent;
                   width: 0;
                   height: 0;
                   position: absolute;
               }
    &.position-top {
         transform: translateY(-100%);
         margin-top: -16px;
    &::before,&::after {
                   left: 10px;
               }
    &::before {
         border-top-color: black;
         top: 100%;
     }
    &::after {
         border-top-color: white;
         top: calc(100% - 1px);
     }
    }

    &.position-bottom {
         margin-top: 16px;
    &::before,&::after {
                   left: 10px;
               }
    &::before {
         border-bottom-color: black;
         bottom: 100%;
     }
    &::after {
         border-bottom-color: white;
         bottom: calc(100% - 1px);
     }
    }
    &.position-left {
         transform: translateX(-100%);
         margin-left: -10px;
    &::before,&::after {
                   left: 100%;
                   transform: translateY(-100%);
               }
    &::before {
         border-left-color: black;
         top: 50%;
         transform: translateY(-50%);
     }
    &::after {
         border-left-color: white;
         left: calc(100% - 1px);
     }
    }
    &.position-right {
         margin-left: 10px;
    &::before,&::after {
                   top: 50%;
                   transform: translateY(-50%);
               }
    &::before {
         border-right-color: black;
         right: 100%;
     }
    &::after {
         border-right-color: white;
         right: calc(100% - 1px);
     }
    }
    }
</style>