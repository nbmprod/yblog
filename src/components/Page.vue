<template>
  <div class="page">
    <Navbar :blogPage=true />
    <Grid />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Grid from './Grid.vue';

export default{
  name: 'Page',
  components: { 
    Navbar,
    Grid 
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
