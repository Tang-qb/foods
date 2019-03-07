<template>
    <div class='cart'>
      <div class="top">
        <div class="title">
          <p>我的购物车 <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></p>
          <p>
            <router-link to="/me/order">我的订单</router-link>
          </p>
        </div>
      </div>
      <div class="list">
        <div class="top_list">
          <div class="col-sel">
            <i class="select">√</i>
            全选
          </div>
          <div class="col-pic">&nbsp;</div>
          <div class="col-title">商品名称</div>
          <div class="col-price">单价</div>
          <div class="col-num">数量</div>
          <div class="col-money">小计</div>
          <div class="col-editor">操作</div>
        </div>
        <ul class="content_list">
          <li class="item">
            <div class="col-sel">
              <i class="select">√</i>
            </div>
            <div class="col-pic">
              <img src="../assets/item9.jpg" alt="">
            </div>
            <div class="col-title">	
              小米MIX 3 全网通版 8GB内存 黑色 256G
            </div>
            <div class="col-price">3999元</div>
            <div class="col-num">
              <div class="input">
                <i @click="minu">
                </i>
                <input type="text" v-model="num" @input="watchNum">
                <i @click="add">
                </i>
              </div>
            </div>
            <div class="col-money">3999元</div>
            <div class="col-editor">
              删除
            </div>
          </li>
        </ul>
      </div>
      <ul class="pay">
        <li>
          <p>
            <router-link to="/index">继续购物</router-link>
          </p>
          <p>共 <span>4</span> 件商品, 已选择 <span>2</span> 件</p>
        </li>
        <li>
          <p>合计: <span>3999元</span></p>
          <button>去结算</button>
        </li>
      </ul>
      <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    name: 'cart',
    data() {
      return {
        num: 1
      }
    },
    components: {
      Footer
    },
    methods: {
      minu(){
        if (this.num == 1) return false
        else this.num --
      },
      add() {
        this.num ++
      },
      watchNum(e){
        if (e.target.value <= 0) return this.num = 1
      }
    }
};
</script>

<style scoped lang="scss">
.cart{
  width: 100%;
  height: 100%;
}
  .top{
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #ff6700;
    background: #fff;
    .title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1190px;
      margin: 0 auto;
      p{
        font-size: 28px;
        line-height: 100px;
        span{
          line-height: 20px;
          margin-top: 20px;
          margin-left: 15px;
          color: #757575;
          font-size: 12px;
        }
        &:nth-child(2){
          a{
            font-size: 12px;
            color: #757575;
            &:hover{
              color: #ff6700;
            }
          }
          
        }
      }
    }
  }
  .list{
    width: 1190px;
    margin: 50px auto 0;
    background: #fff;
    font-size: 14px;
    color: #757575;
    .top_list{
      display: flex;
      align-items: center;
      height: 70px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      vertical-align: middle;
      line-height: 70px;
    }
    .content_list{
      box-sizing: border-box;
      overflow: hidden;
      .item{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #e0e0e0;
        &:last-child{
          border: none;
        }
      }
      .col-money{
        color: #ff6700;
      }
      .col-pic{
        padding-top: 20px;
        img{
          width: 80px;
          height: 80px;
        }
      }
      .col-editor{
        text-align: center;
        width: 100px;
        height: 100%;
        cursor: pointer;
        &:hover{
          color: #ff6700;
        }
      }
    }
      .col-sel{
        width: 110px;
        height: 100%;
        font-size: 14px;
          .select{
            position: relative;
            width: 18px;
            height: 18px;
            border: 1px solid #e0e0e0;
            cursor: pointer;
            color: #fff;
            font-size: 18px;
            text-align: center;
            vertical-align: middle;
            margin-right: 5px;
            margin-left: 24px;
            padding: 0 6px;
            &:hover{
              color: #333;
            }
        }
      }
      .col-pic{
        width: 120px;
        height: 100%;
      }
      .col-title{
        width: 380px;
        height: 100%;
      }
      .col-price{
        width: 159px;
        height: 100%;
      }
      .col-num{
        width: 150px;
        height: 100%;
        text-align: center;
        .input{
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-top: 31px;
          i{
            display: inline-block;
            position: relative;
            width: 38px;
            height: 38px;
            border: 1px solid #e0e0e0;
            cursor: pointer;
            &::after{
              content: '-';
              display: inline-block;
              position: absolute;
              top: -30px;
              left: 15px;
            }
            &:last-child{
              &::after{
              content: '+'
            }
            }
            // span{
            //   position: absolute;
            //   top: 50%;
            //   left: 50%;
            //   transform: translate3d(-50%,-50%,0);
            // }
            &:hover{
              background: #ccc;
            }
          }
          input{
            width: 72px;
            height: 36px;
            border: 1px solid #e0e0e0;
            border-left: 0;
            border-right: 0;
            outline: none;
            text-align: center;
          }
        }
      }
      .col-editor{
        text-align: center;
        width: 100px;
        height: 100%;
      }
      .col-money{
        text-align: center;
        width: 120px;
        height: 100%;
      }
  }
  .pay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1190px;
    height: 50px;
    margin: 20px auto 0;
    background: #fff;
    color: #757575;
    li{
      display: flex;
      align-items: center;
      p{
        font-size: 14px;
        padding: 0 20px;
        border-left: 1px solid #757575;
        &:first-child{
          border: none;
        }
        a{
          color: #757575;
          &:hover{
            color: #ff6700;
          }
        }
        span{
          color: #ff6700;
        }
      }
      &:last-child{
        color: #ff6700;
        p{
          span{
            font-size: 28px;
          }
        }
        button{
          height: 50px;
          background: #ff6700;
          border: none;
          outline: none;
          color: #fff;
          font-size: 18px;
          padding: 0 50px;
          cursor: pointer;
        }
      }
    }
  }
</style>
