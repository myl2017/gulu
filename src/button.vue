<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="loading g-icon" v-if="loading" name="loading"></g-icon>
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Vue from 'vue'
    import Icon from './icon'
    Vue.component('g-icon',Icon)

    export default {
        name: 'GuluButton',
//      props: ['icon','iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    console.log(value)
                    return value === 'left' || value === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {  border-color: var(--border-color-hover); }
        &:active { background-color: var(--button-active-bg); }
        &:focus { outline: none; }
        > .content { order: 2; }
        > .g-icon { order: 1; margin-right: .3em;}
        &.icon-right {
            > .content { order: 1; }
            > .g-icon {  order: 2;  margin-right: 0; margin-left: .3em;}
        }
        .loading { animation: spin 1s infinite linear;}
    }
</style>