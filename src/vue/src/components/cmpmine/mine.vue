<template>
  <form>
    <h1>用户管理系统</h1>
    <input type="button" value="index" @click="toindex"/>
    <input type="button" value="test" @click="test"/>
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
      },
      'test':function(){
        var token = localStorage.getItem('webUserToken') || '';
        ajax.get('mine/test',{'test':'test','filter':'filter'},{'auth':token}).then(function(res){
          console.log(res);
        });
      }
    }
  }
</script>

<style lang="scss">

</style>
