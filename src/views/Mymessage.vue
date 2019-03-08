<template>
    <div class='my_message'>
      <div class="top">
        <div class="img">
          <img src="../assets/avatar.png" alt="">
        </div>
        <div class="me">
          <div class="left">
            <p>2196589655</p>
            <p>早上好~</p>
            <p>
              <router-link to="">修改个人信息></router-link>
            </p>
            <p>
              <a href="javascript:;" @click="loginOut">注销></a>
            </p>
          </div>
          <div class="right">
            <p>账户安全: <span>普通</span></p>
            <p>绑定手机: <span>158**21</span></p>
            <p>
              绑定邮箱:
              <button>绑定</button>
            </p>
          </div>
        </div>
      </div>
      <ul class="list">
        <li>
          <div class="icon"></div>
          <div class="content">
            <p>待支付的订单: <span>0</span></p>
            <p><a href="javascript:;">查看待支付订单></a></p>
          </div>
        </li>
        <li>
          <div class="icon"></div>
          <div class="content">
            <p>待收货的订单: <span>0</span></p>
            <p><a href="javascript:;">查看待收货订单></a></p>
          </div>
        </li>
        <li>
          <div class="icon"></div>
          <div class="content">
            <p>待评价的商品: <span>0</span></p>
            <p><a href="javascript:;">查看待待评价商品></a></p>
          </div>
        </li>
        <li>
          <div class="icon"></div>
          <div class="content">
            <p>喜欢的商品: <span>0</span></p>
            <p><a href="javascript:;">查看喜欢的商品></a></p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'my_message',
    data() {
      return {

      }
    },
    methods: {
      loginOut() {
        localStorage.removeItem('user')
        this.$router.push('/login')
      }
    }
};
</script>

<style scoped lang="scss">
.my_message{
  width: 80%;
  margin: 0 auto;
}
  .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0 0 30px 0;
    .img{
      position: relative;
      width: 150px;
      height: 150px;
      border: 1px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%, 0);
        width: 100%;
        height: 100%;
      }
    }
    .me{
      display: flex;
      justify-content: space-between;
      width: 75%;
      .left{
        p{
          &:nth-child(1){
            font-size: 20px;
          }
          &:nth-child(2){
            font-size: 12px;
            padding: 10px 0 20px 0;
            color: #ccc;
          }
          &:nth-child(3){
            font-size: 14px;
            a{
              color: #ff6700;
            }
          }
          &:nth-child(4){
            a{
              font-size: 14px;
              color: #ff6700;
              cursor: pointer;
              padding-top: 5px;
              &:hover{
                text-decoration: underline;
              }
            }
            
            
          }
        }
      }
      .right{
        p{
          font-size: 14px;
          padding: 6px 0;
          color: #757575;
          button{
            outline: none;
            border: none;
            background: #ff6700;
            color: #fff;
            padding: 5px 40px;
            margin-left: 100px;
            cursor: pointer;
          }
          &:nth-child(2){
            span{
              color: #ccc;
            }
          }
          span{
            color: #ff6700;
            font-size: 12px;
          }
        }
      }
    }
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    li{
      display: flex;
      align-items: center;
      width: 50%;
      padding: 50px 0;
      .icon{
        width: 100px;
        height: 100px;
        background-image: url(../assets/portal-icon-1.png);
        background-size: cover;
        background-repeat: no-repeat;
      }
      &:nth-child(2){
        .icon{
          background-image: url(../assets/portal-icon-2.png);
        }
      }
      &:nth-child(3){
        .icon{
           background-image: url(../assets/portal-icon-3.png);
        }
      }
      &:nth-child(4){
        .icon{
           background-image: url(../assets/portal-icon-4.png);
        }
      }
      .content{
        margin-left: 20px;
        p{
          padding: 5px 0;
          color: #757575;
          font-size: 18px;
          span{
            color: #ff6700;
          }
          a{
            color: #757575;
            font-size: 14px;
            &:hover{
              color: #ff6700;
            }
          }
        }
      }
    }
  }
</style>
