<template>
  <form>
    <input type="text" v-model="uname"/>
    <input type="text" v-model="upsw"/>
    <input type="button" value="sign up" @click="signup"/>
    <input type="button" value="sign in" @click="signin"/>
    <input type="button" value="sign out" @click="signout"/>
  </form>
</template>

<script>
  import ajax from '../../util/httpclient.js';

  export default {
    data:function(){
      return {
        'uname':'',
        'upsw':''
      }
    },
    methods:{
      'signup':function(){
        var pramas = {
          'uname':this.uname,
          'upsw':this.upsw
        };
        ajax.post('sign/signup', pramas).then(function(res){
          if(res.data.status){
              alert('注册成功');
          }else{
              alert('名字重复');
          }
        });
      },
      'signin':function(){
        var that = this;
        var pramas = {
          'uname':this.uname,
          'upsw':this.upsw,
          'token':localStorage.getItem('webUserToken')
        };
        var token = localStorage.getItem('webUserToken') || '';
        ajax.post('sign/signin', pramas,{'auth':token}).then(function(res){
          if(res.data.msg == 'signin'){
              // 客户端存储信息 localStorage seesionStorage
              localStorage.setItem('webUserToken',res.data.data);
              alert('登录成功');
              that.$router.push({'path':'/mine'});
          }else if(res.data.msg == 'repeat'){
              alert('已经登录');
          }else if(res.data.msg == 'differ'){
              alert('不能同时登录多个帐号');
          }else if(res.data.msg == 'non'){
              alert('帐号不存在');
          }else if(res.data.msg == 'errpsw'){
              alert('密码错误');
          }else{
              alert('请重新注册');
          }
        });
      },
      'signout':function(){
        if(localStorage.getItem('webUserToken')){
          localStorage.removeItem('webUserToken');
          alert('登出成功');
        }else{
          alert('没有需要登出的帐号');
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
