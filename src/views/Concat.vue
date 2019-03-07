<template>
    <div class='concat'>
      <Nav />
      <Search />
      <div class="content">
        <img src="../assets/concat.jpeg" alt="">
        <div class="message">
          <p>联系方式</p>
          <p>四川特产网</p>
          <p>地址: 北京市海淀区清河中街68号 华润五彩城写字楼</p>
          <p>邮编: 360555</p>
          <p>电话: 408-225-68925</p>
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
    name: 'concat',
    data() {
      return {

      }
    },
    components: {
      Nav,
      Search,
      Footer
    }
};
</script>

<style scoped lang="scss">
  .content{
    width: 1190px;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
    padding-bottom: 30px;
    overflow: hidden;
    img{
      width: 100%;
    }
    .message{
      font-size: 14px;
      padding: 60px 0 0 180px;
      p{
        color: #757575;
        padding-bottom: 20px;
        &:first-child{
          font-size: 28px;
          color: #333;
        }
        &:nth-child(2){
          font-size: 20px;
          color: #333;
        }
      }
    }
  }
</style>
