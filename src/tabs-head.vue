<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsHead',
        inject: ['eventBus'],
        created() {
            console.log('tabs爷爷给 tabs-head爸爸的 eventBus');
            console.log(this.eventBus)
        }
    }
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border:  1px solid red;
        > .actions-wrapper {
            margin-left: auto;/**设置按钮跑右边去了**/
          }
    }
</style>