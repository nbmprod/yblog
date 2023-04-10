<template>
  <Page />
  <Footer />
</template>

<script>
import Page from './components/Page.vue';
import Footer from './components/Footer.vue';

export default{
  name: 'App',
  components: { Page, Footer },

}
</script>


<style lang="scss">

.container {
  max-width: 1110px;
  margin: 0 auto;
  box-sizing: border-box;
}

</style>
