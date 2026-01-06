<template>
  <main class="home">
    <div class="home__container">
      <div class="home__content">
        <SvgLogo class="home__logo" />
        <h1 class="home__title">Лучшие российские товары на Вашем столе</h1>
        <p class="home__text">
          GoodFoodRussia предлагает Вам ознакомиться с продукцией ведущих российских производителей
          для долгосрочного партнерства
        </p>
      </div>
      <img src="~/assets/images/banner.png" alt="banner" class="home__banner" />
    </div>
    <div class="home__side">Мы очень скоро запустим наш сайт...</div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  background: #2b4d9d;
  min-height: 100vh;
  display: flex;
  position: relative;
  padding-block: 5.3rem;
  padding-inline: 4.8rem;
  padding-right: calc(4.8rem + 7.3rem + 5rem);
  overflow: hidden;

  &__container {
    position: relative;
    background-color: #fff;
    padding-inline: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3rem;
  }
  &__banner {
    position: absolute;
    right: 0;
    top: 0;
    translate: 5% -2%;
    width: 50%;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    max-width: 47%;
  }
  &__side {
    color: #fff;
    font-family: vars.$font-rubik-distressed;
    font-size: min(4.5vh, 4rem);
    font-weight: 400;
    line-height: 126%; /* 5.04rem */
    text-wrap: nowrap;
    position: absolute;
    top: 50%;
    translate: 39% -50%;
    right: 0;
    transform-origin: 50% 50%;
    rotate: -90deg;
  }
  &__text {
    color: #333;
    font-family: vars.$font-amarante;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__title {
    color: #ffad33;
    font-family: vars.$font-bebas;
    text-transform: uppercase;
    font-size: 6.2rem;
    font-weight: 700;
    line-height: 96%; /* 5.952rem */
  }
  &__logo {
    width: 32.1rem;
  }
}
</style>
