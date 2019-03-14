<template>
  <div class="nav">
    <div class="content">
      <div class="left">
        <router-link to="/login" class="login">立即登录</router-link>
        <router-link to="/register" class="register">注册</router-link>
      </div>
      <div class="right">
        <router-link to="/">首页</router-link>
        <router-link to="/me">个人中心</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/concat">联系我们</router-link>
        <router-link to="/cart" class="cart">购物车</router-link>
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
        color: #ff6700;
      }
    }
    .login{
      color: #ff6700;
    }
    .right{
      display: flex;
      align-items: center;
      .cart{
        display: inline-block;
        background: #ff6700;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        transition: all .5s;
        &:hover{
          background: #fff;
          color: #ff6700;
          transition: all .5s;
        }
      }
    }
  }
</style>