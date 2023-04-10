<template>
    <div class="grid__block">
        <img class="grid__img" src="./../assets/img/blog/test-2.jpg" alt="topic-pic">
        <div class="grid__title-box">
            <p class="grid__type">РАЗБОР</p>    
            <h2 class="grid__title">Velit officia consequat duis enim velit</h2>
            <p class="grid__subtitle">Amet minim met minim mollit non deser</p>    
        </div>
    </div>
</template>

<script>
export default {
  name: 'GridBlock',
};
</script>


<style lang="scss" scoped>

.grid__block{
    margin: 0;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: 200ms;
    background: var(--mint);
    text-decoration: none;
    color: var(--black);
    
    &:hover{
        -webkit-box-shadow: 1px 1px 37px -14px var(--grey);
        -moz-box-shadow: 1px 1px 37px -14px var(--grey);
        box-shadow: 1px 1px 37px -14px var(--grey);
    }
}

.grid__block_side{
    background: var(--pale-blue);

}

.grid__img{
    width: 100%;
    max-height: 50%;
    border: 1px solid var(--black);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
}

.grid__img_side{
    border: 2px solid var(--black);
    border-bottom: 1px solid var(--black);
}

.grid__title-box{
    padding: 1em 2em;
    border: 1px solid var(--black);
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1em;
}

.grid__title-box_side{
    border: 2px solid var(--black);
    border-top: none; 
}

.grid__type{
    margin: 0;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;
    font-weight: 800;
    color:var(--red);
    letter-spacing: 0.15em;
}

.grid__type_side{
    font-size: 0.7em;
}

.grid__title{
    margin: 0;
    font-size: 1.3em;
}

.grid__title_side{
    font-size: 1.2em;
}

.grid__subtitle{
    margin: 0;
    font-size: 1em;
}

.grid__subtitle_side{
    margin: 0;
    font-size: 0.9em;
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
