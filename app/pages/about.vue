<template>
  <main class="about">
    <Teleport to="#layout-teleport">
      <UiPicture src="about-hero.jpg" alt="Good Food Russia showroom team" class="about__hero-banner" />
    </Teleport>

    <section class="hero">
      <div class="hero__card">
        <div class="hero__card-title-wrap">
          <h1 class="hero__title">
            {{ $t('about.hero.title') }}
          </h1>
        </div>
        <div class="hero__divider" />
        <p class="hero__text">
          {{ $t('about.hero.text') }}
        </p>
      </div>
    </section>

    <section class="about__section about__section--intro">
      <div class="about__header about__header--wide">
        <h2 class="about__header-title">
          {{ $t('about.company.title') }}
        </h2>
        <p class="about__header-text">
          {{ $t('about.company.text') }}
        </p>
      </div>

      <div class="stats">
        <article v-for="item in stats" :key="item.value" class="stats__item">
          <div class="stats__copy">
            <h3 class="stats__value">{{ item.value }}</h3>
            <p class="stats__label">{{ item.text }}</p>
          </div>
          <component :is="item.icon" class="stats__icon" />
        </article>
      </div>
    </section>

    <section class="mission">
      <div class="about__header">
        <h2 class="about__header-title">
          {{ $t('about.mission.title') }}
        </h2>
        <p class="about__header-text">
          {{ $t('about.mission.text') }}
        </p>
      </div>

      <div class="mission__cards">
        <article v-for="goal in missionGoals" :key="goal.text" class="mission__card">
          <component :is="goal.icon" class="mission__card-icon" />
          <h3 class="mission__card-title">{{ goal.text }}</h3>
        </article>
      </div>
    </section>

    <section class="about__section">
      <div class="showroom">
        <div class="showroom__content">
          <div class="about__header about__header--left">
            <h2 class="about__header-title">
              {{ $t('about.showroom.title') }}
            </h2>
            <p class="about__header-text">
              {{ $t('about.showroom.text') }}
            </p>
          </div>
        </div>

        <UiPicture src="about-showroom.png" alt="Good Food Russia showroom" class="showroom__image" />
      </div>
    </section>

    <section class="about__section">
      <div class="about__header">
        <h2 class="about__header-title">
          {{ $t('about.process.title') }}
        </h2>
        <p class="about__header-text">
          {{ $t('about.process.text') }}
        </p>
      </div>

      <div class="process">
        <article v-for="(step, index) in processSteps" :key="step.title" class="process__card">
          <span class="process__step">
            {{ $t('step')[0].toUpperCase() + $t('step').slice(1) }} {{ index + 1 }}
          </span>
          <component :is="step.icon" class="process__icon" />
          <h3 class="process__title">{{ step.title }}</h3>
          <p class="process__text">{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="about__section">
      <div class="about__header">
        <h2 class="about__header-title">
          {{ $t('about.team.title') }}
        </h2>
        <p class="about__header-text">
          {{ $t('about.team.text') }}
        </p>
      </div>

      <div class="team">
        <UiPicture
          v-for="photo in teamPhotos"
          :key="photo.src"
          :src="photo.src"
          :alt="photo.alt"
          class="team__photo"
        />
      </div>
    </section>

    <section class="about__section">
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

    <section class="about__section">
      <div class="faq">
        <div class="about__header">
          <h2 class="about__header-title">
            {{ $t('about.faq.title') }}
          </h2>
          <p class="about__header-text">
            {{ $t('about.faq.text') }}
          </p>
        </div>

        <UiAccordions :accordions="useMapRt('about.faq.accordions')" />
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  IconsAutoGraph,
  IconsHandshake,
  IconsDescription,
  Icons4Clover,
  IconsInventory,
  IconsManageSearch,
  IconsFeedFade,
  IconsHandshakeFade
} from '#components';

const { t } = useI18n();

const stats = [
  { value: '1200+', text: t('about.stats.0'), icon: IconsAutoGraph },
  { value: '200+', text: t('about.stats.1'), icon: IconsHandshake },
  { value: '30+', text: t('about.stats.2'), icon: IconsDescription },
  { value: '4.8+', text: t('about.stats.3'), icon: Icons4Clover }
];

const missionGoals = [
  { text: t('about.goals.0'), icon: IconsInventory },
  { text: t('about.goals.1'), icon: IconsInventory },
  { text: t('about.goals.2'), icon: IconsInventory }
];

const processIcons = [IconsManageSearch, IconsInventory, IconsFeedFade, IconsHandshakeFade];
const processSteps = useMapRt('about.process.steps').map((step, index) => ({
  ...step,
  icon: processIcons[index]
}));

const teamPhotos = Array.from({ length: 8 }, (_, index) => ({
  src: `about-team-${index + 1}.jpg`,
  alt: t('about.team.photoAlt', { index: index + 1 })
}));
</script>

<style lang="scss" scoped>
.about {
  padding-inline: var(--spacing-inline);
  padding-bottom: max(8rem, 40px);
  display: flex;
  flex-direction: column;
  gap: max(8rem, 36px);

  &__hero-banner {
    position: absolute;
    inset: 0 0 auto;
    height: min(80.7rem, calc(100vh + max(6rem, 60px)));

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
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 20px);
    position: relative;
    z-index: 1;

    &--intro {
      padding-top: max(2rem, 8px);
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: max(1.2rem, 12px);
    text-align: center;
    align-self: center;

    &--wide {
      max-width: min(88.4rem, 100%);
    }

    &--left {
      align-items: flex-start;
      text-align: left;
      align-self: stretch;
      max-width: 54rem;
    }

    &-title {
      font-size: max(3.6rem, 22px);
      line-height: 1.22;
      font-weight: 700;
      letter-spacing: max(0.072rem, 0.72px);
      background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 16ch;
    }

    &-text {
      color: #c2c2c2;
      font-size: max(1.8rem, 14px);
      line-height: 155%;
    }
  }
}

.hero {
  min-height: calc(80.7rem - max(6rem, 60px));
  display: flex;
  align-items: flex-end;
  padding-bottom: max(3.5rem, 18px);
  position: relative;
  z-index: 1;

  &__card {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
    gap: max(3.2rem, 18px);
    align-items: center;
    padding: max(3.6rem, 18px);
    border-radius: max(3.2rem, 20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(50px);

    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
  }

  &__card-title-wrap {
    position: relative;
    min-height: max(14.4rem, 96px);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: min(41rem, 100%);
      height: max(5rem, 28px);
      background:
        linear-gradient(90deg, rgba(53, 101, 205, 0.92) 0%, rgba(53, 101, 205, 0) 100%),
        radial-gradient(circle at left, rgba(255, 255, 255, 0.28) 0%, transparent 72%);
      filter: blur(0.6rem);
      opacity: 0.8;
      pointer-events: none;
    }
  }

  &__title {
    position: relative;
    z-index: 1;
    font-size: max(3.8rem, 24px);
    line-height: 1.15;
    font-weight: 700;
    max-width: 14ch;
  }

  &__divider {
    width: 1px;
    height: 100%;
    min-height: max(14.4rem, 110px);
    background: rgba(255, 255, 255, 0.2);

    @media screen and (max-width: vars.$bp-md) {
      display: none;
    }
  }

  &__text {
    color: rgba(255, 255, 255, 0.88);
    font-size: max(1.8rem, 14px);
    line-height: 1.55;
    letter-spacing: max(-0.036rem, -0.18px);
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: max(2.4rem, 16px);

  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: vars.$bp-sm) {
    grid-template-columns: 1fr;
  }

  &__item {
    position: relative;
    min-height: max(11rem, 88px);
    display: flex;
    align-items: flex-end;
  }

  &__copy {
    position: relative;
    z-index: 1;
    max-width: 20rem;
  }

  &__value {
    font-size: max(3.6rem, 24px);
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: max(0.072rem, 0.72px);
    color: #3565cd;
  }

  &__label {
    font-size: max(1.4rem, 12px);
    line-height: 1.25;
    color: #fff;
  }

  &__icon {
    position: absolute;
    top: 0;
    right: 0;
    width: max(11rem, 72px);
    opacity: 0.22;
  }
}

.mission {
  position: relative;
  z-index: 1;
  padding: max(10.5rem, 44px) max(3.2rem, 18px) max(5rem, 26px);
  border-radius: min(76rem, 50vw) min(76rem, 50vw) 0 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 100%, rgba(40, 79, 196, 0.45) 0%, rgba(19, 40, 108, 0.28) 46%, transparent 80%),
      linear-gradient(180deg, rgba(5, 15, 56, 0) 0%, rgba(15, 34, 102, 0.56) 100%);
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &__cards {
    margin-top: max(4.8rem, 24px);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: max(3.2rem, 16px);

    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: max(1.6rem, 12px);
    padding: max(2.4rem, 18px);
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
      max-width: 20ch;
    }
  }
}

.showroom {
  display: grid;
  grid-template-columns: minmax(0, 0.44fr) minmax(0, 0.56fr);
  gap: max(3.2rem, 18px);
  align-items: center;

  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
  }

  &__image {
    border-radius: max(3.2rem, 20px);
  }
}

.process {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: max(1.2rem, 12px);

  @media screen and (max-width: vars.$bp-lg) {
    @include mix.grid-scroll(24rem);
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
    padding: max(2rem, 16px);
    min-height: max(22rem, 180px);
    border-radius: max(1.6rem, 15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, rgba(211, 135, 255, 0) 0%, rgba(211, 135, 255, 0.05) 100%);
    backdrop-filter: blur(50px);
  }

  &__step {
    color: rgba(255, 255, 255, 0.48);
    font-size: max(1.2rem, 11px);
    text-transform: uppercase;
    letter-spacing: max(0.12rem, 1.2px);
  }

  &__icon {
    width: max(3.2rem, 28px);
  }

  &__title {
    font-size: max(1.8rem, 15px);
    line-height: 1.3;
    font-weight: 700;
  }

  &__text {
    color: #c2c2c2;
    font-size: max(1.4rem, 12px);
    line-height: 1.45;
  }
}

.team {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: max(1.2rem, 12px);

  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__photo {
    height: max(32rem, 180px);
    border-radius: max(2rem, 14px);

    @media screen and (max-width: vars.$bp-sm) {
      height: max(22rem, 160px);
    }
  }
}

.documents {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 42rem;
  gap: max(3.6rem, 18px);
  align-items: center;
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
  }

  &__title {
    font-size: max(3.6rem, 24px);
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: max(0.072rem, 0.72px);
    max-width: 14ch;
  }

  &__text {
    color: #787878;
    font-size: max(1.6rem, 14px);
    line-height: 1.75;
    max-width: 36ch;
  }

  &__visual {
    padding: max(2.8rem, 16px) max(2.4rem, 16px) 0;
    border-radius: max(1.6rem, 14px);
    background: #f5f5f5;
    overflow: hidden;

    :deep(.my-picture) {
      align-items: flex-end;
    }

    :deep(.my-picture__image) {
      border-radius: max(1.6rem, 12px) max(1.6rem, 12px) 0 0;
      box-shadow: 0 0.2rem 5.5rem rgba(0, 0, 0, 0.12);
    }
  }
}

.faq {
  padding: max(3.2rem, 18px);
  border-radius: max(3.2rem, 20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(122deg, rgba(255, 255, 255, 0.02) 12.4%, rgba(255, 255, 255, 0.08) 100.6%);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 20px);
}
</style>
