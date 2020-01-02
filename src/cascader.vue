<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
            <!--<div class="level-1"></div>-->
            <!--<div class="level-2"></div>-->
            <!--<div class="level-3"></div>-->
        </div>
    </div>
</template>
<script>
    import CascaderItem from './cascader-item.vue'
    export default {
        name: 'GuluCascader',
        components: {CascaderItem},
        props: {
            source: {
                type: Array
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "_var.scss";

    .cascader {
        .popover {
            >div { width: 520px;}
        }
    }
</style>