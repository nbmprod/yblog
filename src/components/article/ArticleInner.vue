<template>
    <main class="article__main">
        <div class="article__title-box">
            <h1 class="article__title">Нарциссизм и материнство</h1>
            <h2 class="article__subtitle">Что это и что делать: разбираем все аспекты</h2>
            <p class="article__date">13 апреля 2023</p>
        </div>
        <div class="article__text-box">
            <p class="article__text">
                Безусловно, высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для приоретизации разума над эмоциями. Сложно сказать, почему стремящиеся вытеснить традиционное производство, нанотехнологии призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете. А также некоторые особенности внутренней политики призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований.
            </p>
            <h3 class="article__quote">"Граждане превращены в посмешище"</h3>
            <p class="article__text">
                Приятно, граждане, наблюдать, как явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. В рамках спецификации современных стандартов, предприниматели в сети интернет разоблачены.                            </p>
        </div>
    </main>
</template>

<script>

export default {
  name: 'ArticleInner',
  
};

</script>


<style lang="scss" scoped>

.article__main{
    background: var(--mint);
    border-radius: 10px;
    border: 2px solid var(--black);
    margin: 0;
    padding: 3em 4em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: fit-content;
}

.article__title-box{
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: center;

}

.article__date{
    margin: 0.5em 0 0 0;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-3);
}

.article__title{
    margin: 0;
    text-align: center;
    font-size: 2em;
}

.article__subtitle{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
    font-weight: 300;
    font-style: italic;
    color: var(--grey-2);
    
    padding: 0.5em;
    text-align: center;
    // border-top: 2px dashed var(--grey-2);
    // border-bottom: 2px dashed var(--grey-2);
}

.article__text-box{
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.article__text{
    line-height: 2em;
}

.article__quote{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.7em;
    font-weight: 300;
    font-style: italic;
    align-self: flex-end;
    margin: 0;
}

@media (max-width: 900px) {

    .article__main{
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    
    .article__title{
        margin: 0;
        text-align: left;
        font-size: 2em;
    }

    .article__subtitle{
        margin: 0.5em 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 2em;
        font-weight: 300;
        font-style: italic;
        color: var(--grey-2);
        padding: 0;
        text-align: left;
    
    }

    .article__date{
        text-align: end;
        width: 100%;
    }
}

</style>
