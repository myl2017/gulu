<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid green;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset} = this
                return [span && `col-${span}`, offset && `offset-${offset}`]
                //[`col-${span}`, offset && `offset-${offset}`]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
                //{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}
            }
        },
        created() {
            console.log('col created')
        },
        mounted() {
            console.log('col mounted')
        }
    }
</script>
<style scoped lang="scss">
    .col {
        height: 100px;
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>