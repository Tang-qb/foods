<template>
    <div class='about'>
      <Nav />
      <Search />
      <div class="content">

      </div>
      <Footer />
    </div>
</template>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Search from '../components/Search'
export default {
    name: 'about',
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
    height: 500px;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
  }
</style>
