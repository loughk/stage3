<template>
    <div class="cmp1">
        组件1
        <input type="button" value="组件2 name" @click="$router.push({name:'cmp2'})"/>
        <input type="button" value="组件2 path" @click="$router.push({path:'/cmp2/6/6'})"/>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
  .cmp1{height:60px;line-height:60px;}
</style>