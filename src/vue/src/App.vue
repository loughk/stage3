<template>
  <div>
      <router-link to="/sign">登录注册</router-link>
      <input type="button" value="用户管理系统" @click="tomine" />
    <p>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
  import ajax from './util/httpclient.js';

  export default {
    data () {
      return {}
    },
    methods:{
      'tomine':function(){

      }
    }
  }
</script>

<style lang="scss">

</style>
