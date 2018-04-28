<template>
  <div id="box">
    <h1>{{msg}}</h1>
      <router-link to="/cmp1" class="btna">组件1</router-link>
      <router-link to="/cmp2/参数1/参数2" class="btna">组件2</router-link>
    <p>
      <router-view class="main"></router-view>
      <router-view name="cmp3"></router-view>
      <router-view name="cmp4"></router-view>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '路由'
      }
    }
  }
</script>

<style lang="scss">
  *{padding:0;margin:0;}
  #box{
    h1{background:#eee;}
    a{text-decoration:none;}
  }
  .main{padding:10px;background:#ddd;}
  .btna{display:inline-block;padding:10px;background:#ff6;color:#333;}
</style>
