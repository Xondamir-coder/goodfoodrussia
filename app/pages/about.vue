<template>
  <main class="about">
    <ClientOnly>
      <Teleport to="#layout-teleport">
        <UiPicture
          src="about-hero.jpg"
          alt="Good Food Russia showroom team"
          class="about__hero-banner"
        />
      </Teleport>
    </ClientOnly>

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

    <div class="about__wrapper">
      <div v-for="i in 4" :key="i" class="about__wrapper-line" />
      <section class="about__section about__section--intro">
        <UiSectionHeader
          class="about__header about__header--wide"
          :title="$t('about.company.title')"
          :text="$t('about.company.text')"
        />

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

    <section class="about__section">
      <div class="showroom">
        <div class="showroom__title">SHOWROOM</div>
        <UiSectionHeader
          class="about__header about__header--left"
          :title="$t('about.showroom.title')"
          :text="$t('about.showroom.text')"
        />

        <div class="showroom__wrapper">
          <UiPicture
            src="about-showroom.png"
            alt="Good Food Russia showroom"
            class="showroom__image"
          />
          <button class="showroom__button">
            <IconsPlayArrow class="showroom__button-icon" />
          </button>
        </div>
      </div>
    </section>

    <UiSectionProcess class="about__section" />

    <section class="about__section">
      <UiSectionHeader
        class="about__header"
        :title="$t('about.team.title')"
        :text="$t('about.team.text')"
      />

      <ul class="team">
        <li v-for="teammate in team" :key="teammate.src" class="team__item">
          <UiPicture :src="teammate.src" :alt="teammate.alt" class="team__photo" />
          <h3 class="team__item-name">{{ teammate.name }}</h3>
          <p class="team__item-job">{{ teammate.job }}</p>
        </li>
      </ul>
    </section>

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

    <section class="about__section">
      <div class="faq">
        <UiSectionHeader
          class="about__header"
          :title="$t('about.faq.title')"
          :text="$t('about.faq.text')"
        />

        <UiAccordions :accordions="mapRt(tm('about.faq.accordions'), rt)" />
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  IconsAutoGraph,
  IconsAssignmentIn,
  IconsStarOutline,
  IconsInventory,
  IconsHandshakeStrongFade
} from '#components';

const { t, tm, rt } = useI18n();

const stats = [
  { value: '1200+', text: t('about.stats.0'), icon: IconsAutoGraph },
  { value: '200+', text: t('about.stats.1'), icon: IconsHandshakeStrongFade },
  { value: '30+', text: t('about.stats.2'), icon: IconsAssignmentIn },
  { value: '4.8+', text: t('about.stats.3'), icon: IconsStarOutline }
];

const missionGoals = [
  { text: t('about.goals.0'), icon: IconsInventory },
  { text: t('about.goals.1'), icon: IconsInventory },
  { text: t('about.goals.2'), icon: IconsInventory }
];

const team = mapRt(tm('about.team.items'), rt).map((el, i) => ({
  src: `about-team-${i + 1}.jpg`,
  ...el
}));
</script>

<style lang="scss" scoped>
.about {
  padding-bottom: max(8rem, 40px);
  display: flex;
  flex-direction: column;
  & > * {
    padding-inline: var(--spacing-inline);
  }
  &__wrapper {
    position: relative;
    margin-bottom: 0 !important;
    padding-inline: 0;
    display: flex;
    gap: max(18rem, 32px);
    flex-direction: column;
    background: linear-gradient(180deg, #010101 0%, #061852 100%);
    margin-bottom: max(8rem, 32px);
    &-line {
      position: absolute;
      inset-inline: 0;
      background: #051443;
      z-index: 2;
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
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 20px);
    position: relative;
    z-index: 1;
    &:not(:last-child) {
      margin-bottom: max(8rem, 32px);
    }

    &--intro {
      padding-inline: var(--spacing-inline);
      padding-top: max(8rem, 32px);
      .about__header :deep(.section-header__text) {
        max-width: 80ch;
      }
    }
  }
}

.hero {
  min-height: calc(max(80.7rem, 700px) - max(6rem, 60px));
  display: flex;
  align-items: flex-end;
  padding-bottom: max(8rem, 32px);
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    inset-inline: 0;
    height: 44.1%;
    background: linear-gradient(0deg, #000 19.39%, rgba(0, 0, 0, 0) 100%);
  }

  &__card {
    z-index: 2;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
    gap: max(3.2rem, 18px);
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
      background: #3565cd;
      clip-path: polygon(93% 0, 100% 50%, 93% 100%, 0 100%, 0 0);
    }
  }

  &__title {
    position: relative;
    z-index: 1;
    font-size: max(3.8rem, 24px);
    line-height: 1.21;
    font-weight: 700;
    max-width: 17ch;
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
    font-family: vars.$font-nunito-sans;
    font-size: max(1.8rem, 16px);
    letter-spacing: -0.36px;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(200px, 20.8rem), 1fr));
  gap: max(2.4rem, 16px);
  padding-inline: 6rem;

  &__item {
    position: relative;
    min-height: max(11rem, 88px);
    display: flex;
    align-items: flex-end;
  }

  &__copy {
    position: relative;
    z-index: 1;
    max-width: 74.5%;
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    right: 20%;
    width: max(11rem, 72px);
  }
}

.mission {
  position: relative;
  z-index: 1;
  padding-bottom: 11.5rem;
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
    aspect-ratio: 1;
    border-radius: 50%;
    left: 50%;
    translate: -50%;
    top: -30%;
    background: linear-gradient(180deg, #061852 0%, rgb(1, 7, 23) 100%);
    // background: red;
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
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 18px);
  position: relative;
  margin-top: max(12rem, 60px);

  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
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
    font-size: max(13.5rem, 55px);
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

.team {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: max(1.2rem, 12px);

  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: max(0.8rem, 5px);
    height: max(32rem, 180px);
    border-radius: max(2rem, 14px);
    overflow: hidden;
    justify-content: flex-end;
    align-items: flex-start;
    padding: max(1.6rem, 10px);
    &:not(:hover) {
      &::after {
        opacity: 0;
      }
      .team__item-name,
      .team__item-job {
        opacity: 0;
        transform: translateY(15px);
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      inset-inline: 0;
      height: 66.25%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
      transition: opacity 0.4s;
    }
    &-name {
      font-size: 2.8rem;
      font-weight: 700;
      background: linear-gradient(203deg, #fff 26.72%, rgba(255, 255, 255, 0.2) 164.37%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.4s;
    }
    &-job {
      font-family: vars.$font-nunito-sans;
      color: rgba(#fff, 0.7);
      transition: all 0.4s;
    }
    & > *:not(picture) {
      z-index: 1;
    }
  }
  &__photo {
    position: absolute;
    inset: 0;
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
  padding: max(3.2rem, 18px);
  border-radius: max(3.2rem, 20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    122deg,
    rgba(255, 255, 255, 0.02) 12.4%,
    rgba(255, 255, 255, 0.08) 100.6%
  );
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 20px);
}
</style>
