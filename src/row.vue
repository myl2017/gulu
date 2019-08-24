<template>
    <div class="row" :style="rowStyle">
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
            }
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
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
    }
</style>