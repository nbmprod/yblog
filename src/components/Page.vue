<template>
  <div class="page">
    <Navbar :blogPage=true />
    <!-- <Grid /> -->
    <Article />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Grid from './Grid.vue';
import Article from './article/Article.vue';

export default{
  name: 'Page',
  components: {
    Navbar,
    Grid,
    Article,
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
