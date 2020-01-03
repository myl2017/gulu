<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items :items="source" class="popover" :height="popoverHeight"></cascader-items>
        </div>
    </div>
</template>
<script>
    import CascaderItems from './cascader-items.vue'
    export default {
        name: 'GuluCascader',
        components: {CascaderItems},
        props: {
            source: {
                type: Array
            },
            popoverHeight: {
                type: String
            }
        },
        data() {
            return {
                popoverVisible: false,
//                level1Selected: null,
//                level2Selected: null
            }
        },
//        computed: {
//            level2Items() {
//                if (this.level1Selected) {
//                    return this.level1Selected.children
//                } else {
//                    return []
//                }
//            },
//            level3Items () {
//                if (this.level2Selected) {
//                    return this.level2Selected.children
//                } else {
//                    return []
//                }
//            }
//        }
    }
</script>
<style scoped lang="scss">
    @import "_var.scss";

    .cascader {
        position: relative;
        .trigger {
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }
        .popover-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            display: flex;
            @extend .box-shadow;
            .label {
                white-space: nowrap;
            }
        }
    }
</style>