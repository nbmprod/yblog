<template>
  <div class="page">
    <Burger />
    <Navbar :blogPage=true />
    <Grid />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Grid from './Grid.vue';
import Article from './article/Article.vue';
import Burger from './Burger.vue';

export default{
  name: 'Page',
  components: {
    Navbar,
    Grid,
    Article,
    Burger
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
