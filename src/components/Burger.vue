<template>
<div class="burger__wrapper">
        <button @click="openMenu" class="burger__icon burger__icon_open">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#495057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="#495057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 18H21" stroke="#495057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="burger" ref="burger">
            <button @click="closeMenu" class="burger__icon burger__icon_closed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#212429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#212429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>     
            </button>
            <h2 class="burger__header">Психолог Яна Бычкова</h2>
            <div class="burger__content">
                <h4 href="./../index.html" class="burger__title">Общее</h4>
                <a href="./../index.html" class="burger__subtitle">Обо мне</a>
                <a href="./../index.html" class="burger__subtitle">Услуги</a>
            </div>
            <div class="burger__content">
                <h4 class="burger__title">Блог</h4>
                <a class="burger__subtitle">Статьи</a>
                <a class="burger__subtitle">Тесты</a>
                <a class="burger__subtitle">Разборы</a>
        </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "Burger",

    methods:{
        openMenu(){
            this.$refs.burger.setAttribute('data-open', true);
        },

        closeMenu(){
            this.$refs.burger.removeAttribute('data-open', true);
        },

    },
};


</script>


<style lang="scss" scoped>
.burger__wrapper{
    display: none;
}

@media (max-width: 900px){

.burger__wrapper{
        display: block;
        position: absolute;
    }

.burger{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: var(--pale-blue);
    transform: translateX(-100vw);
    transition: transform 220ms linear;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 1em 1em 0 1em;
    box-sizing: border-box;    
}

.burger[data-open]{
    transform: translate(0);
}

.burger__icon{
    position: absolute;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger__icon_open{
    background: none;
    border: none;
    padding: 0;
    left: 0.5em;
    top: 0.87em;}

.burger__icon_closed{
    background: none;
    border: 1px solid black;
    border-radius: 50%;
    padding: 0;
    left: 0.5em;
    top: 0.87em;

}

.burger__header{
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    margin-top: 2em;
}

.burger__mode{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--black);
    padding-top: 24px;
}

.burger__content{
    display: flex;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
    margin: 0;
    border-top: 1px solid var(--black);
    padding-top: 24px;
}

.burger__title{
    font-size: 1.2em;
    line-height: 26px;
    color: var(--black);
    margin: 0;
}

.burger__subtitle{
    font-size: 1.2em;
    color: var(--grey-2);
    margin: 0;
    text-decoration: none;
}

}

</style>
