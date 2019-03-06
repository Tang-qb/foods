<template>
  <div class="search">
    <div class="content">
      <!-- <div class="bg">
        <img src="../assets/images/banner.png" alt="" height="" width="200px">
      </div> -->
      <div class="search-btn">
        <div class="head-search">
          <input type="text" class="text" placeholder="搜索美食或特产">
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <ul class="head-content">
          <li>
            <a href="#">郫县豆瓣</a>
          </li>
          <li>
            <a href="#">张飞牛肉</a>
          </li>
          <li>
            <a href="#">四川泡菜</a>
          </li>
          <li>
            <a href="#">五粮液</a>
          </li>
          <li>
            <a href="#">保宁醋</a>
          </li>
          <li>
            <a href="#">竹叶青茶</a>
          </li>
          <li>
            <a href="#">泸州老窖特曲</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="scss">
  .search{
    position: relative;
    width: 100%;
    height: 120px;
    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    .content{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .search-btn{
        width: 100%;
        .head-search{
          padding-top: 20px;
          .text{
            width: 465px;
            height: 36px;
            border: 1px solid #31bbac;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            padding-left: 10px;
            font-size: 15px;
            outline: none;
            color: #31bbac;
          }
          .el-button{
            position: relative;
            top: -1px;
            padding: 12px 30px;
            background: #13D1BE;
            border-color: #13D1BE;
            margin-left: -2px;
          }
        }
        .head-content{
          display: flex;
          font-size: 12px;
          padding: 10px 0 0 0;
          a{
            color: #999;
            &:hover{
              color: #31bbac;
            }
          }
          li{
            padding: 0 3px;
          }
        }
      }
    }
  }
</style>