<template>
  <div class="index">
    <router-view></router-view>
    <Nav/>
    <Search/>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="foods">
      <div class="foods_box">
        <p>热门推荐</p>
        <ul class="list">
          <li v-for="item in list" :key="item.list" @click="getDetail(item)">
            <div class="pic">
              <img :src="item.pic" width="220" height="220">
            </div>
            <p>
              <span>￥{{item.price}}</span>
              <span>{{item.pay}}人付款</span>
            </p>
            <a href="javascript:;" class="title">{{item.title}}</a>
            <p class="address">{{item.address}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="foods">
      <div class="foods_box">
        <p class='like'>猜你喜欢</p>
        <ul class="list">
          <li v-for="item in list" :key="item.list" @click="getDetail(item)">
            <div class="pic">
              <img :src="item.pic" width="220" height="220">
            </div>
            <p>
              <span>￥{{item.price}}</span>
              <span>{{item.pay}}人付款</span>
            </p>
            <a href="javascript:;" class="title">{{item.title}}</a>
            <p class="address">{{item.address}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="port">
      <img src="../assets/footer.png" alt="">
    </div>
    <Footer/>
  </div>
</template>

<script>
import Search from "../components/Search";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img1 from "@/assets/item1.jpg";
import img2 from "@/assets/item2.jpg";
import img3 from "@/assets/item3.jpg";
import img4 from "@/assets/item4.jpg";
import img5 from "@/assets/item5.jpg";
import img6 from "@/assets/item6.jpg";
import img7 from "@/assets/item7.jpg";
import img8 from "@/assets/item8.jpg";
import img9 from "@/assets/item9.jpg";
import img10 from "@/assets/item10.jpg";
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          id: "1",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img1
        },
        {
          id: "2",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img2
        },
        {
          id: "3",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img3
        },
        {
          id: "4",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img4
        },
        {
          id: "5",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img5
        },
        {
          id: "6",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img6
        },
        {
          id: "7",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img7
        },
        {
          id: "8",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img8
        },
        {
          id: "9",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img9
        },
        {
          id: "10",
          title: "四川特产永进成都八大怪450克 成都特产礼盒装糕点手信点心饼干",
          price: "22.8",
          pay: "274",
          address: "四川成都",
          pic: img10
        }
      ]
    };
  },
  components: {
    Footer,
    Nav,
    Search
  },
  methods: {
    getDetail(data){
      this.$router.push({name: 'detail', query: {id: data.id}})
    }
  }
};
</script>

<style scoped lang="scss">
.foods{
  width: 100%;
  margin: 20px auto 0;
  .foods_box {
    width: 1190px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    & > p {
      color: #28abff;
      font-size: 20px;
      &::before {
        content: "";
        display: inline-block;
        position: relative;
        top: -2px;
        width: 5px;
        height: 16px;
        background: #28abff;
        vertical-align: middle;
        margin-right: 8px;
      }
    }

    .like{
      color: #f40;
      &::before{
        background: #f40;
        top: -1px;
      }
    }
    
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 220px;
        height: 360px;
        border: 1px solid #ccc;
        margin-top: 10px;
        transition: all 1s;
        &:hover {
          border: 1px solid #31bbac;
          transition: all 1s;
        }
        > p {
          display: flex;
          justify-content: space-between;
          position: relative;
          color: #31bbac;
          margin: 10px;
          span {
            font-size: 20px;
            &:last-child {
              position: absolute;
              right: 0;
              bottom: 0;
              color: rgba(0,0,0,.5);
              font-size: 12px;
            }
          }
        }
        .pic {
          width: 220px;
          height: 220px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          font-size: 12px;
          color: #333;
          display: block;
          padding: 0 10px;
          line-height: 16px;
          &:hover{
            text-decoration: underline;
            color: #31bbac;
          }
        }
        .address {
          color: #ccc;
        }
      }
    }
  }
  
}
.port{
  width: 1190px;
  margin: 20px auto 0;
}
</style>

<style>
.el-carousel{
  width: 1190px;
  margin: 20px auto 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

