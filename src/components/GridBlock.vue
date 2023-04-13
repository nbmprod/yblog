<template>
    <div
    :class="sideBarStyle('grid__wrapper')">
        <a v-for="block in gridBlockInfo" href="./pages/article.html" 
        :class="sideBarStyle('grid__block')">
            <img 
            :class="sideBarStyle('grid__img')"
            :src=imagePath(block) 
            alt="topic-pic">
            <div
            :class="sideBarStyle('grid__title-box')">
                <p class="grid__type">{{ block.type }}</p>    
                <h2
                :key="block.title"
                :class="sideBarStyle('grid__title')">
                {{ block.title }}
                </h2>
                <p
                :class="sideBarStyle('grid__subtitle')">
                {{ block.description }}
                </p>    
            </div>
        </a>
    </div>
</template>

<script>
import { gridBlockInfo } from './../block-info.js';

export default {
  name: 'GridBlock',

  props:{
    SideBar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },


  data() {
    return {
      gridBlockInfo: gridBlockInfo,
      imgSrc: 'src/assets/img/blog/test-1.jpg',
      
    };
  },

  computed: {
    imagePath() {
      return (block) => `src/assets/img/blog/${block.imgSrc}`;
    },

    sideBarStyle(){
        if (this.SideBar === true){
            return (style) => `${style} ${style}_side`;
        } else {
            return (style) => `${style}`;
        }
    }
  }
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
.grid__wrapper_side{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 1.5em;
    justify-items: center;
}

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
    width: 100%;
    height: fit-content;
    
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
    // max-height: 50%;
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
    text-transform: uppercase;
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
        grid-template-rows: 1fr;
        gap: 3em;
        justify-items: center;
        padding: 1.5em 1em;
    }

    .grid__wrapper_side{
        padding: 0;
    }
}


</style>
