<template>
    <div class="x">
        {{sourceItem.name}}
        <cascader-item v-for="item in sourceItem.children" v-if="sourceItem.children" :sourceItem="item"></cascader-item>
    </div>
</template>
<script>
    export default {
        name: 'cascaderItem',
        props: {
            sourceItem: {
                type: Object
            }
        }
    }
</script>
<style scoped lang="scss">
    .x {
        border: 1px solid red;
        /*margin: 10px;*/
        padding: 10px;
    }
</style>