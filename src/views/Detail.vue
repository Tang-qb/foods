<template>
    <div class='detail'>
      <Nav />
      <Search />
      <div class="content">
        <div class="top-list">
          <div class="img">
            <img :src="this.nowList.pic" alt="">
          </div>
          <div class="desc">
            <p>{{this.nowList.title}}</p>
            <div class="bg">
              <p><i>价格: </i> <span>￥{{this.nowList.price}}</span></p>
              <p><i>促销价: </i><span>￥</span><span>22.8</span></p>
            </div>
            <ul class="num">
              <li>月销量 <span>{{this.nowList.sales}}</span></li>
              <li class="line"></li>
              <li>累加评价 <span>{{this.nowList.evaluate}}</span></li>
            </ul>
            <div class="buy">
              数量 <input type="text" v-model="num" @input="watchNum">
              <i class="minu" @click="minu"></i>
              <i class="add" @click="add"></i>
              <span>库存{{this.nowList.evaluate}}件</span>
            </div>
            <div class="btn">
              <a class="nowBuy" href="javascript:;">立即购买</a>
              <a class="addCart" href="javascript:;">加入购物车</a>
            </div>
            <div class="prise">
              服务承诺 
              <span>破损包退</span>
              <span>正品保证</span>
              <span>极速退款</span>
              <span>七天无理由退换</span>
            </div>
          </div>
        </div>
        <div class="img-list">
          <p v-for="(item, index) in nowList.pictures" :key="index">
            <img :src="item" alt="">
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import Nav from '../components/Nav'
import Search from '../components/Search'
import img1 from '@/assets/detail1.jpg'
import pic1 from '@/assets/list/1.jpg'
import pic2 from '@/assets/list/2.jpg'
import pic3 from '@/assets/list/3.jpg'
import pic4 from '@/assets/list/4.jpg'
import pic5 from '@/assets/list/5.jpg'
import pic6 from '@/assets/list/6.jpg'
export default {
    name: 'detail',
    data() {
      return {
        id: '',
        num: '1',
        list: [
          {
            id: "1",
            title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
            price: "25",
            sale: '22.8',
            sales: '2000',
            evaluate: '9214',
            rep: '1200',
            pay: "274",
            address: "四川成都",
            pic: img1,
            pictures: [
              pic1,
              pic2,
              pic3,
              pic4,
              pic5,
              pic6
            ]
          }
        ],
        nowList: {}
      }
    },
    created() {
      this.id = this.$route.query.id
      this.queryId(this.id)
    },
    components: {
      Nav,
      Search
    },
    methods: {
      queryId(id){
        this.list.forEach((item, index) => {
          if (item.id == id) {
            this.nowList = item
          }else{
            return false
          }
        })
        console.log(this.nowList)
      },
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
  .content{
    width: 1190px;
    margin: 20px auto 0;
    background: #fff;
    .top-list{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 85%;
      margin: 0 auto;
      .img{
        width: 418px;
        height: 418px;
        border: 1px solid #ccc;
        img{
          width: 100%;
        }
      }
      .desc{
        > p{
          font-weight: bold;
        }
        .bg{
          width: 510px;
          height: 90px;
          background-image: url(../assets/detailBg.png);
          background-size: cover;
          background-repeat: no-repeat;
          margin: 20px 0;
          p{
            font-size: 12px;
            color: rgba(0,0,0,.5);
            padding: 5px 20px;
            i{
              display: inline-block;
              width: 10%;
            }
            span{
              text-decoration: line-through;
              font-size: 16px;
            }
            &:nth-child(2){
              span{
                color: #FF0036;
                margin: 0;
                text-decoration: none;
                &:last-child{
                  font-weight: bold;
                  font-size: 24px;
                  margin: 0;
                }
              }
            }
          }
        }
        .num{
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 30px;
          border-top: 1px dashed #ccc;
          border-bottom: 1px dashed #ccc;
          color: #ccc;
          font-size: 14px;
          // padding: 10px 0;
          span{
            color: #FF0036;
          }
          .line{
            width: 1px;
            height: 20px;
            background: #ccc;
          }
        }
        .buy{
          display: flex;
          align-items: center;
          margin-top: 20px;
          font-size: 12px;
          color: #ccc;
          i{
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url(../assets/minu.png);
            background-size: cover;
            background-repeat: no-repeat;
            margin: 0 2px;
          }
          .add{
            background-image: url(../assets/add.png);
          }
          input{
            width: 100px;
            height: 20px;
            margin-left: 10px;
            margin-right: 20px;
          }
          > span{
            margin-left: 20px;
          }
        }
        .btn{
          margin: 40px 0;
          a{
            display: inline-block;
            width: 180px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border: 1px solid #FF0036;
            margin: 0 0 0 40px;
            color: #FF0036;
            background: #ffeded;
          }
          .addCart{
            background: #FF0036;
            color: #fff;
          }
        }
        .prise{
          color: #ccc;
          font-size: 12px;
          span{
            color: #333;
            padding: 0 20px;
          }
        }
      }
    }
    .img-list{
      width: 1190px;
      margin: 40px auto;
      p{
        text-align: center;
      }
    }
  }
</style>
