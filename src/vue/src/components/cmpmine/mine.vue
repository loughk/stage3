<template>
  <form>
    <h1>用户管理系统</h1>
    <input type="button" value="index" @click="toindex"/>
  </form>
</template>

<script>
  import ajax from '../../util/httpclient.js';

  export default {
    data:function(){
      return {}
    },
    methods:{
      'toindex':function(){
        this.$router.push({'path':'/'});
      }
    }
  }
</script>

<style lang="scss">

</style>
