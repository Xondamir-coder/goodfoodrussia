<template>
  <main class="about">
    <section class="hero">
      <UiPicture
        src="about-hero.jpg"
        alt="Good Food Russia showroom team"
        class="about__hero-banner"
      />
      <div class="hero__card">
        <h1 class="hero__title">
          <span>{{ $t('about.hero.title') }}</span>
        </h1>
        <div class="hero__divider" />
        <p class="hero__text">
          {{ $t('about.hero.text') }}
        </p>
      </div>
    </section>
    <div class="about__wrapper">
      <div v-for="i in 4" :key="i" class="about__wrapper-line" />
      <section class="about__section about__section--intro">
        <UiSectionHeader
          class="about__header"
          :title="$t('about.company.title')"
          :text="$t('about.company.text')"
        />
        <div class="stats">
          <article v-for="stat in stats" :key="stat.title" class="stats__item">
            <div class="stats__copy">
              <h3 class="stats__value">{{ stat.title }}</h3>
              <p class="stats__label">{{ stat.text }}</p>
            </div>
            <component :is="stat.icon" class="stats__icon" />
          </article>
        </div>
        <UiPicture
          v-for="i in 2"
          :key="i"
          class="stats__pic"
          alt="veggies-flying.png"
          src="veggies-flying.png"
        />
      </section>
      <section class="mission">
        <div class="mission__circle" />

        <div class="mission__wrapper">
          <UiSectionHeader
            class="about__header"
            :title="$t('about.mission.title')"
            :text="$t('about.mission.text')"
          />

          <div class="mission__cards">
            <article v-for="goal in missionGoals" :key="goal.text" class="mission__card">
              <component :is="goal.icon" class="mission__card-icon" />
              <h3 class="mission__card-title">{{ goal.text }}</h3>
            </article>
          </div>
        </div>
      </section>
    </div>
    <section class="showroom about__section">
      <div class="showroom__title">{{ $t('about.showroomLabel') }}</div>
      <UiSectionHeader
        class="about__header"
        :title="$t('about.showroom.title')"
        :text="$t('about.showroom.text')"
      />
      <UiPicture v-for="i in 2" :key="i" class="showroom__pic" alt="tomato" src="tomatoes.png" />
      <div class="showroom__wrapper">
        <UiPicture
          src="about-showroom.png"
          alt="Good Food Russia showroom"
          class="showroom__image"
        />
        <button class="showroom__button" :aria-label="$t('accessibility.playShowroomVideo')">
          <IconsPlayArrow class="showroom__button-icon" />
        </button>
      </div>
    </section>
    <UiSectionProcess class="about__section" />
    <section class="about__section">
      <UiSectionHeader
        class="about__header"
        :title="$t('about.documents.title')"
        :text="$t('about.documents.text')"
      />
      <div class="documents">
        <div class="documents__content">
          <h2 class="documents__title">
            {{ $t('about.documents.title') }}
          </h2>
          <p class="documents__text">
            {{ $t('about.documents.text') }}
          </p>
        </div>
        <div class="documents__visual">
          <UiPicture src="about-certificate.jpg" alt="International logistics certificate" />
        </div>
      </div>
    </section>
    <section class="faq about__section">
      <UiSectionHeader
        class="about__header"
        :title="$t('about.faq.title')"
        :text="$t('about.faq.text')"
      />
      <UiAccordions :accordions="mapRt(tm('about.faq.accordions'), rt)" />
    </section>
    <UiSectionCta class="about-cta" :title="$t('about.cta.title')" :text="$t('about.cta.text')" />
  </main>
</template>

<script setup>
import {
  IconsAutoGraphFade,
  IconsAssignmentIn,
  IconsStarOutline,
  IconsInventory,
  IconsHandshakeStrongFade
} from '#components';

const { t, tm, rt } = useI18n();

const statsIcons = [
  IconsAutoGraphFade,
  IconsHandshakeStrongFade,
  IconsAssignmentIn,
  IconsStarOutline
];
const goalIcons = [IconsInventory, IconsInventory, IconsInventory];
const stats = mapRt(tm('about.stats'), rt).map((el, i) => ({
  ...el,
  icon: statsIcons[i]
}));
const missionGoals = mapRt(tm('about.mission.goals'), rt).map((el, i) => ({
  text: el,
  icon: goalIcons[i]
}));

useSeoMeta({
  title: t('seo.about.title'),
  description: t('seo.about.description'),
  ogImage: '/images/compressed/about-hero.jpg',
  twitterImage: '/images/compressed/about-hero.jpg'
});
</script>

<style lang="scss" scoped>
.about {
  padding-bottom: max(8rem, 30px);
  display: flex;
  flex-direction: column;
  &__wrapper {
    position: relative;
    margin-bottom: 0 !important;
    display: flex;
    gap: max(18rem, 32px);
    flex-direction: column;
    background: linear-gradient(180deg, #010101 0%, #061852 100%);
    margin-bottom: max(8rem, 32px);
    &-line {
      position: absolute;
      inset-inline: 0;
      background: #051443;
      height: 4px;
      &:first-child {
        bottom: -5px;
      }
      &:nth-child(2) {
        bottom: -11px;
      }
      &:nth-child(3) {
        bottom: -19px;
      }
      &:nth-child(4) {
        bottom: -31px;
      }
    }
    .about__section {
      gap: 5.2rem;
    }
  }
  &__hero-banner {
    position: absolute;
    inset: 0 0 auto;
    height: min(max(80.7rem, 700px), calc(100vh + max(6rem, 60px)));

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%),
        linear-gradient(180deg, rgba(6, 24, 82, 0) 56%, #061852 100%);
    }
  }
  &__section {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 20px);
    position: relative;
    &:not(:last-child) {
      margin-bottom: max(8rem, 32px);
    }

    &--intro {
      padding-inline: var(--spacing-inline);
      padding-top: max(8rem, 32px);
      .about__header :deep(.section-header__text) {
        max-width: 80ch;
      }
      .about__header {
        @media screen and (max-width: vars.$bp-sm) {
          text-align: start;
        }
      }
    }
  }
}
.hero {
  min-height: 100dvh;
  display: flex;
  align-items: flex-end;
  padding-bottom: max(8rem, 32px);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: max(6rem, 60px);
    left: 0;
    width: 100%;
    height: 1px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.07);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    inset-inline: 0;
    height: 44.1%;
    background: linear-gradient(0deg, #000 19.39%, rgba(0, 0, 0, 0) 100%);
  }
  &__card {
    margin-inline: var(--spacing-inline);
    z-index: 1;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
    gap: max(3.2rem, 12px);
    align-items: center;
    padding: max(3.6rem, 18px);
    border-radius: max(3.2rem, 20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(15px);

    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    position: relative;
    font-size: max(3.8rem, 24px);
    line-height: 1.21;
    font-weight: 700;
    max-width: 17ch;
    z-index: 1;
    display: flex;
    span {
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: max(5rem, 30px);
      background: #3565cd;
      clip-path: polygon(93% 0, 100% 50%, 93% 100%, 0 100%, 0 0);
    }
  }

  &__divider {
    width: 1px;
    height: max(14.4rem, 110px);
    background: rgba(255, 255, 255, 0.2);

    @media screen and (max-width: vars.$bp-md) {
      height: 1px;
      width: 100%;
    }
  }

  &__text {
    font-family: vars.$font-nunito-sans;
    font-size: max(1.8rem, 16px);
    letter-spacing: -0.36px;
  }
}
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(200px, 20.8rem), 1fr));
  gap: max(2.4rem, 10px);
  padding-inline: 6rem;
  position: relative;
  @media screen and (max-width: vars.$bp-md) {
    padding-inline: 0;
  }

  &__pic {
    position: absolute;
    &:last-of-type {
      width: max(34rem, 130px);
      bottom: -20%;
      left: -9%;
      transform: rotate(7.391deg);
      @media screen and (max-width: vars.$bp-md) {
        bottom: initial;
        top: 0;
        left: -18%;
      }
    }
    &:first-of-type {
      width: max(30rem, 130px);
      bottom: -60%;
      right: -11%;
      transform: rotate(20.355deg) rotateX(180deg);
      @media screen and (max-width: vars.$bp-md) {
        bottom: 5%;
        right: -20%;
        transform: rotateX(180deg);
      }
    }
  }

  &__item {
    position: relative;
    display: flex;
    align-items: flex-end;
    @media screen and (min-width: vars.$bp-sm) {
      height: max(11rem, 80px);
    }
    @media screen and (max-width: vars.$bp-sm) {
      justify-content: space-between;
      align-items: center;
    }
  }

  &__copy {
    position: relative;
    max-width: 83%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media screen and (max-width: vars.$bp-sm) {
      max-width: 55%;
    }
  }

  &__value {
    font-size: max(2rem, 14px);
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: max(0.072rem, 0.72px);
    color: #3565cd;
  }

  &__label {
    font-size: max(1.4rem, 12px);
    line-height: 1.4;
    color: #fff;
  }

  &__icon {
    pointer-events: none;
    width: max(11rem, 80px);
    @media screen and (min-width: vars.$bp-sm) {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
.mission {
  position: relative;
  padding-bottom: max(11.5rem, 40px);
  display: flex;
  clip-path: inset(-50% 0 0);

  &__wrapper {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(6rem, 24px);
    z-index: 1;
  }
  &__circle {
    position: absolute;
    width: 110%;
    min-width: 820px;
    aspect-ratio: 1;
    border-radius: 50%;
    left: 50%;
    translate: -50%;
    top: -30%;
    background: linear-gradient(180deg, #061852 0%, rgb(1, 7, 23) 100%);
    @media screen and (max-width: vars.$bp-md) {
      top: -30px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(250px, 30rem), 1fr));
    gap: max(3.2rem, 16px);
    padding-inline: 6rem;

    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: max(1.6rem, 12px);
    padding-block: max(2.4rem, 18px);
    padding-inline: max(1.4rem, 10px);
    text-align: center;
    border-radius: max(1.6rem, 14px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);

    &-icon {
      width: max(3.2rem, 28px);
    }

    &-title {
      font-size: max(1.7rem, 14px);
      line-height: 1.35;
      font-weight: 700;
      background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.showroom {
  position: relative;
  margin-top: max(12rem, 60px);

  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
    .about__header {
      align-items: flex-start;
      text-align: start;
    }
  }
  &__pic {
    position: absolute;
    width: max(53.4rem, 150px);
    &:first-of-type {
      left: -8%;
      top: -5%;
      transform: rotateY(180deg);
      @media screen and (max-width: vars.$bp-md) {
        top: 40%;
        left: -5%;
      }
    }
    &:last-of-type {
      right: -10%;
      bottom: -35%;
      z-index: 2;
      transform: rotate(45deg);
      @media screen and (max-width: vars.$bp-md) {
        bottom: -20%;
        right: -15%;
      }
    }
  }
  &__wrapper {
    position: relative;
  }
  &__button {
    @include mix.flex-center;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: max(6.4rem, 50px);
    height: max(6.4rem, 50px);
    border-radius: 1.6rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.75;
    }
    &-icon {
      width: 50%;
    }
  }
  &__title {
    position: absolute;
    top: -10%;
    left: 50%;
    translate: -50%;
    font-size: max(13.5rem, 32px);
    font-weight: 700;
    opacity: 0.2;
    background: linear-gradient(
      224deg,
      rgba(255, 255, 255, 0.2) 41.03%,
      rgba(255, 255, 255, 0.1) 56.65%,
      rgba(255, 255, 255, 0.2) 78.15%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: vars.$bp-md) {
      top: 0;
      translate: -50% -50%;
    }
  }
  &__image {
    border-radius: max(3.2rem, 20px);
    aspect-ratio: 112.8/63.4;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
.documents {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 42rem;
  gap: max(3.6rem, 18px);
  padding: max(3.2rem, 18px);
  border-radius: max(3.2rem, 20px);
  background: #fff;
  color: #000;

  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 14px);
    justify-content: space-between;
  }

  &__title {
    font-size: max(3.6rem, 24px);
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: max(0.072rem, 0.72px);
  }

  &__text {
    color: #787878;
    font-size: max(1.6rem, 14px);
    line-height: 1.75;
  }

  &__visual {
    padding: max(2.8rem, 16px) max(2.4rem, 16px) 0;
    border-radius: max(1.6rem, 14px);
    background: #f5f5f5;
    overflow: hidden;
    position: relative;
    height: max(35.6rem, 200px);

    :deep(.my-picture) {
      align-items: flex-end;
      position: absolute;
      top: 2.8rem;
      inset-inline: 4rem;
      border-radius: max(1.6rem, 12px) max(1.6rem, 12px) 0 0;
      box-shadow: 0 0.2rem 5.5rem rgba(0, 0, 0, 0.12);
    }
  }
}
.faq {
  margin-inline: var(--spacing-inline);
  padding: max(3.2rem, 18px);
  border-radius: max(3.2rem, 20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    122deg,
    rgba(255, 255, 255, 0.02) 12.4%,
    rgba(255, 255, 255, 0.08) 100.6%
  );
  backdrop-filter: blur(50px);
}
.about-cta {
  margin-inline: var(--spacing-inline);
}
</style>
