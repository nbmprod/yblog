<template>
    <div class="aticle">
        <div class="container">
            <div class="article__wrapper">
                <ArticleInner />
                <ArticleSideBar />
            </div>
        </div>
    </div>
</template>

<script>
import ArticleInner from './ArticleInner.vue';
import ArticleSideBar from './ArticleSideBar.vue';


export default {
    name: "Article",
    components: { ArticleInner, ArticleSideBar }
};


</script>


<style lang="scss" scoped>

.article__wrapper{
    display: grid;
    grid-template-columns: 1fr 25%;
    margin: 0;
    border-radius: 10px;
    gap: 2em;

}





@media (max-width: 900px) {
    .article__wrapper{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        padding: 0 1em;
    }
        
}

</style>
