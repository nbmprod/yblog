<script>
import Navbar from './components/Navbar.vue';

export default{
  name: 'App',
  components: { Navbar },

  // data() {
  //   return {
  //     blogPage: false,
  //   }
  // }

}

</script>

<template>
  <div class="page">
    <Navbar :blogPage=true />
  </div>
  <footer class="footer">
  </footer>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}

.container {
  max-width: 1110px;
  margin: 0 auto;
  box-sizing: border-box;
}

.footer {
  background-color: var(--grey-2);
  margin-top: 3em;
  flex-shrink: 0;
}
</style>
