<template>
  <div class="nav">
    <div class="content">
      <div class="left">
        <router-link to="/login" class="login">立即登录</router-link>
        <router-link to="/register" class="register">注册</router-link>
      </div>
      <div class="rihgt">
        <a href="#">个人中心</a>
        <a href="#">会员专区</a>
        <a href="#">网站导航</a>
        <a href="#">关于我们</a>
        <a href="#">联系我们</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    background: #f8f8f8;
    height: 40px;
    width: 100%;
    font-size: 12px;
    .content{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      width: 1190px;
      margin: 0 auto;
    }
    a{
      padding: 0 10px;
      color: #999;
      &:hover{
        color: #31BBAC;
      }
    }
    .login{
      color: #31BBAC;
    }
  }
</style>