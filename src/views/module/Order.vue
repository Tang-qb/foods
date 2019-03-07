<template>
    <div class='order'>
      <h1>我的订单 <span>请谨防钓鱼链接或诈骗电话，<a href="javascript:;">了解更多></a></span></h1>
      <div>
        <ul class="list">
          <li>全部订单</li>
          <li>待支付</li>
          <li>待收货</li>
          <li>待关闭</li>
        </ul>
        <div class="inp">
          <input type="text" placeholder="输入商品名称、商品编号">
          <button>
            <i></i>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'order',
    data() {
      return {

      }
    },
    components: {
    }
};
</script>

<style scoped lang="scss">
.order{
  padding: 40px;
  h1{
    font-size: 30px;
    color: #757575;
    span, a{
      font-size: 12px;
      color: #757575;
    }
    a{
      &:hover{
        text-decoration: underline;
      }
    }
  }
  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  }
  .list{
    display: flex;
    li{
      padding: 0 20px;
      color: #757575;
      border-left: 1px solid #757575;
      &:first-child{
        padding-left: 0;
        border: none;
      }
    }
  }
  .inp{
    input{
      padding: 10px;
      border: 1px solid #e0e0e0;
      outline: none;
    }
    button{
      position: relative;
      width: 37px;
      height: 37px;
      vertical-align: bottom;
      border: none;
      outline: none;
      background: #fff;
      border: 1px solid #e0e0e0;
      border-left: none;
      cursor: pointer;
      i{
        display: inline-block;
        position: absolute;
        top: 50%;
        height: 50%;
        transform: translate3d(-50%,-50%,0);
        width: 20px;
        height: 20px;
        background-image: url(../../assets/search.png);
        background-size: cover;
        background-repeat: no-repeat;

      }
    }
  }
}

  
</style>
