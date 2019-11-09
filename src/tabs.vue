<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: 'GuluTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0 // return true 否则 false
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
//            this.$emit('update:selected', 'xxx')
            console.log(this.eventBus)
            console.log(this.$children)
            this.$children.forEach((vm) => {
                vm.$children.forEach((childVm) => {
                   if(childVm.$options.name === 'GuluTabsItem' && childVm.nmae === this.selected){
                     this.eventBus.$emit('update:selected', this.selected,childVm)
                   }
               })
            })
        }
    }
</script>
<style scoped>
    .tabs {

    }
</style>