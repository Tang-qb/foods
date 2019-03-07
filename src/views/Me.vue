<template>
    <div class='me'>
      <Nav />
      <Search />
      <div class="login">
        <div class="left">
          <p>订单中心</p>
          <ul>
            <li>
              <router-link to="order">我的订单</router-link>
            </li>
            <li>意外保</li>
            <li>团购订单</li>
          </ul>
          <p>个人中心</p>
          <ul>
            <li>
              <router-link to="myMessage">我的个人中心</router-link>
            </li>
            <li>消息通知</li>
            <li>喜欢的商品</li>
            <li>优惠卷</li>
            <li>收货地址</li>
          </ul>
          <p>售后服务</p>
          <ul>
            <li>服务记录</li>
            <li>申请服务</li>
          </ul>
          <p>账户管理</p>
          <ul>
            <li>个人信息</li>
            <li>修改密码</li>
          </ul>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
      <Footer />
    </div>
</template>

<script>
import Nav from '../components/Nav'
import Search from '../components/Search'
import Footer from '../components/Footer'
export default {
    name: 'me',
    data() {
      return {
        isLogin: ''
      }
    },
    components: {
      Nav,
      Search,
      Footer
    },
    created() {
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
  .login{
    display: flex;
    width: 1190px;
    margin: 0 auto;
    margin-top: 20px;
    .left{
      width: 20%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      background: #fff;
      padding: 50px 0 70px 50px;
      > p{
        padding: 20px 0;
        font-size: 18px;
        &:nth-child(1){
          padding-top: 0;  
        }
      }
      ul {
        li{
          cursor: pointer;
          padding: 10px 0;
          color: rgba(0,0,0,.3);
          font-size: 14px;

          a{
            color: rgba(0,0,0,.3);
            &:hover{
              color: #333;
            }
          }
          &:hover{
            color: #333;
          }
        }
      }
    }
    .right{
      width: 100%;
      margin-left: 10px;
      background: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      padding:  20px 0 0 0;
      
    }
    .router-link-active{
      color: #ff6700 !important;
    }
  }
  
</style>
