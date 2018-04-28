<template>
    <div class="cmp2">
        组件2
        {{$route.params.p1}}
        {{$route.params.p2}}
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
    .cmp2{height:60px;line-height:60px;background:#bbb;}
</style>