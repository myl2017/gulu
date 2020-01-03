<template>
    <div class="cascaderItem" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
                <!--<span v-if="item.children"> > </span>-->
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-items :items="rightItems" :height="height"></gulu-cascader-items>
        </div>
    </div>
</template>
<script>
    import Icon from './icon.vue'
    export default {
        name: 'GuluCascaderItems',
        components: {Icon},
        props: {
            items: {
                type: Array
            },
            height: {
                type: String
            }
        },
        data () {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightItems () {
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else {
                    return null
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "var";
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        /*@include box-shadow2;*/
        .left {
            height: 100%;
            padding: .3em 0;
            /*@include box-shadow2;*/
            @extend .box-shadow;
        }
        .right {
            height: 100%;
            border-left: 1px solid $border-color-light;
            /*@include box-shadow2;*/
            /*@extend .box-shadow;*/
        }
        .label {
            padding: .3em 1em;
            white-space: nowrap;
            /*@include box-shadow2;*/
            /*@extend .box-shadow;*/
            display: flex;
            align-items: center;
            .icon {
                margin-left: 1em;
                transform: scale(0.5);
            }
        }
    }
</style>