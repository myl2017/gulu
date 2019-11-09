<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsItem',
        inject: ['eventBus'],
        data() { // 不需要用户传值，自身维护值
            return {
                active: false
            }
        },
        props: { //需要用户传值 (前端开发者) 传值
//            active: {
//                type: Boolean,
//                default: false
//            },
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                require: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            console.log('爷爷给孙子的 eventBus');
            console.log(this.eventBus)
            this.eventBus.$on('update:selected', (name) => {
                console.log(name)
//                if (name === this.name) {
//                    console.log(`我${this.name}被选中了`)
//                    this.active = true
//                } else {
//                    console.log(`我${this.name}没被选中了`)
//                    this.active = false
//                }
                this.active = name === this.name
            })
        },
        methods: {
            onClick() {
                if (this.disabled) {
                    return
                }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>
<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
    &.active {
         color: $blue;
     }
    &.disabled {
         color: $disabled-text-color;
     }
    }
</style>