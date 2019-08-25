<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <!--插槽-->
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String
            }
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
            },
            rowClass(){
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        created() {
            console.log('row created')
        },
        mounted() {
            console.log('row mounted')
            console.log(this.$children)
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
             justify-content: flex-end;
         }
        &.align-center {
             justify-content: center;
         }
    }
</style>