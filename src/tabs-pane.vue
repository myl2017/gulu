<template>
    <div class="tabs-pane" @click="xxx" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsPane',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                require: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            console.log('爷爷给孙子的 eventBus');
            console.log(this.eventBus)
            this.eventBus.$on('update:selected', (name) => {
                console.log(name);
                this.active = name === this.name
//                if (name === this.name) {
//                    console.log(`pane ${this.name}被选中了`)
//                    this.active = true
//                } else {
//                    console.log(`pane ${this.name}没被选中了`)
//                    this.active = true
//                }
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>
<style scoped>
    .tabs-pane {
        padding: 1em;
        &.active {  }
    }
</style>