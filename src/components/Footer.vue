<template>
  <div class="footer">
    <div class="port">
      <img src="../assets/footer.png" alt>
    </div>
    <div class="list">
      <ul class="content">
        <li>
          <p>帮助中心</p>
          <ul>
            <li><router-link to="">如何登录</router-link></li>
            <li><router-link to="">如何注册</router-link></li>
            <li><router-link to="">如何购买</router-link></li>
            <li><router-link to="">信息修改</router-link></li>
            <li><router-link to="">商品查询</router-link></li>
          </ul>
        </li>
        <li>
          <p>服务支持</p>
          <ul>
            <li><router-link to="">售后服务</router-link></li>
            <li><router-link to="">自助服务</router-link></li>
          </ul>
        </li>
        <li>
          <p>关注我们</p>
          <ul>
            <li><router-link to="">新浪微博</router-link></li>
            <li><router-link to="">官方微信</router-link></li>
            <li><router-link to="">联系我们</router-link></li>
          </ul>
        </li>
        <li>
          <p>常见问题</p>
          <ul>
            <li><router-link to="">购物常见问题</router-link></li>
            <li><router-link to="">关于拒收商品</router-link></li>
            <li><router-link to="">关于发票</router-link></li>
            <li><router-link to="">优惠券使用攻略</router-link></li>
            <li><router-link to="">支付攻略及常见问题指引</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="title">
      <p> 网站备案/许可账号：**********</p>
      <p>Copyright © 2009-2017 **************</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  background: #fff;
  padding:  0 0 30px 0;
  .port {
    width: 1190px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
  }
  .list {
    width: 1190px;
    margin: 0 auto;
    text-align: center;
    color: #999;
    font-size: 14px;
    padding: 20px 0;
    .content{
      display: flex;
      justify-content: space-between;
      width: 60%;
      margin: 0 auto;
      > li {
        color: #333;
        p{
          padding: 20px 0;
        }
        ul {
          font-size: 14px;
          li{
            padding: 10px 0;
            a{
              color: #757575;
              &:hover{
                color: #ff6700;
              }
            }
          }
        }
    }
    p {
      padding: 10px 0 0;
    }
    }
    
  }
  .title{
    p{
      color: #757575;
      text-align: center;
      padding: 5px 0;
      font-size: 14px;
    }
  }
}
</style>