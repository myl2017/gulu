<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>

            <!--<slot></slot>-->
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0 // 说明在这里面包含
                }
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log() {
                console.log('测试')
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0,0.75);
    /*@keyframes fade-in {*/
        /*0% { opacity: 0; transform: translateY(100%);}*/
        /*100% { opacity: 1; transform: translateY(0%);}*/
    /*}*/
    @keyframes slide-up {
        0% { opacity: 0; transform: translateY(100%);}
        100% { opacity: 1; transform: translateY(0%);}
    }
    @keyframes slide-down {
        0% { opacity: 0; transform: translateY(-100%);}
        100% { opacity: 1; transform: translateY(0%);}
    }
    @keyframes fade-in {
        0% { opacity: 0;}
        100% { opacity: 1;}
    }
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        $animation-duration: 1s;
        &.position-top {
             top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
         }
        &.position-bottom {
             bottom: 0;
            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
         }
        &.position-middle {
             top: 50%;
             transform: translate(-50%, -50%);
            .toast {
                animation: fade-in $animation-duration;
            }
         }
    }
    .toast {
        animation: fade-in 1s;
        font-size: $font-size;  min-height: $toast-min-height;  line-height: 1.8;
        display: flex;
        color: white;
        align-items: center;;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        padding: 0 16px;
    }
    .message {
        padding: 8px 0;
    }
    .close {
        flex-shrink: 0; /*不缩*/
        padding-left: 16px;
    }
    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
</style>