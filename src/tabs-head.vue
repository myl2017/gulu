<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsHead',
        inject: ['eventBus'],
        mounted() {
            console.log('tabs爷爷给 tabs-head爸爸的 eventBus');
            console.log(this.eventBus)
            this.eventBus.$on('update:selected', (item, vm) => {
                console.log(item);
                console.log(vm.$el);
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                console.log(left)
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border:  1px solid red;
        position: relative;
        border-bottom: 1px solid $border-color;
    > .line {
          position: absolute;
          bottom: 0;
          border-bottom: 1px solid $blue;
          /*width: 100px;*/
          transition: all 350ms;
      }
    > .actions-wrapper {
          margin-left: auto;/**设置按钮跑右边去了**/
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1em;
      }
    }
</style>