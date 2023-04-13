<template>
    <div class="article__sidebar">
        <p class="article__readmore">Читайте также:</p>
        <GridBlock :SideBar="true" />
    </div>
</template>

<script>
import GridBlock from '../GridBlock.vue';


export default {
    name: "ArticleSideBar",
    components: { GridBlock }
};


</script>


<style lang="scss" scoped>


.article__sidebar{
    background: none;
    border-radius: 10px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.article__readmore{
    margin: 0;
    text-align: center;
    font-size: 1.5em;
}


// @media (max-width: 900px) {
   

//     .article__sidebar{
//         display: none;
//     }

// }


</style>
