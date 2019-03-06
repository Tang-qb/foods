<template>
  <div class="footer">
    <div class="content">
      <p>©特产网所有,并保留所有权利</p>
      <p>网站所有人: 唐钱彬</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  .footer{
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid #ddd;
    .content{
      width: 1190px;
      margin: 0 auto;
      text-align: center;
      color: #999;
      font-size: 14px;
      padding: 20px 0;
      p{
        padding: 10px 0 0;
      }
    }
  }
</style>