<template>
  <div class="page">
    <Burger />
    <Navbar :blogPage=true />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Grid from './Grid.vue';
import Article from './article/Article.vue';
import Burger from './Burger.vue';
import Footer from './Footer.vue';
import router from './../../router.js';

export default{
  name: 'Page',
  router,
  components: {
    Navbar,
    Grid,
    Article,
    Burger,
    Footer, 
},

}

</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}

</style>
