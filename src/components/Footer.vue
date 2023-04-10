<template>
  <footer class="footer">
      <div class="footer__wrapper">
          <h4 class="footer__title">Психолог Яна Бычкова, 2022</h4>
          <a class="footer__madeby" href="https://t.me/nikita_m_b">made by Nikita Bychkov</a>
      </div>
  </footer>
</template>

<script>

export default{
  name: 'Footer',

}

</script>

<style scoped lang="scss">
.footer{
    background-color: var(--grey-2);
    margin-top: 3em;
    flex-shrink: 0;
}

.footer__wrapper{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer__title{
    color: var(--grey-3);
    font-size: 1em;
    margin-top: 4em;
}

.footer__madeby{
    color: var(--grey-3);
    font-size: 0.5em;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 5em;
    
    &:hover{
        text-decoration: underline;
    }
}
</style>
