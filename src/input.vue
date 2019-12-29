<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <icon name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import  Icon from './icon'

    export default {
        components: {Icon},
        name: 'GuluInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "_var.scss";
    $height: $input-height;
    .wrapper { font-size: $font-size; display: inline-flex; align-items: center;
        > :not(:last-child) { margin-right: .5em;}
        > input { height: 32px; border: 1px solid $border-color; border-radius: $border-radius; padding: 6px;
          &:hover { border-color: $border-color-hover;}
          &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none;}
          &[disabled],&[readonly] { border-color: #bbb; color: #bbb; cursor: not-allowed;}
        }
       &.error {
          > input { border-color: $red;}
       }
       .g-icon { fill: $red;}
       .errorMessage { color: $red;}
    }
</style>