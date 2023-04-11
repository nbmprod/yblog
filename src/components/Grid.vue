<template>
    <main class="grid">
        <div class="container">
  
               <GridBlock />
            
        </div>
    </main>
</template>

<script>
import GridBlock from './GridBlock.vue';

export default {
  name: 'Grid',
  components: { GridBlock },

};
</script>


<style lang="scss" scoped>

.grid__wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 3em;
    justify-items: center;
}

@media (max-width: 900px){
    .grid__wrapper{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 3em;
        justify-items: center;
        padding: 1.5em 1em;
    }
}


</style>
