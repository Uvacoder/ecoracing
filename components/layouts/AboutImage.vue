<template>
  <div class="aboutImage text-white text-right relative">
    <h3
      v-lazyload
      class="aboutImage__header animate__animated invisible"
      data-animation="fade"
    >
      <span class="uppercase font-regular"> {{ $t('home.our') }} </span>
    </h3>
    <h2
      v-lazyload
      class="aboutImage__header relative animate__animated invisible"
      data-animation="fade"
    >
      <span class="uppercase font-medium"> {{ $t('home.mission') }} </span>
    </h2>
    <p
      v-lazyload
      class="text-textcolor text-sm animate__animated invisible"
      data-animation="zoomIn"
    >
      {{ $t('home.mission_content') }}
    </p>
    <LazyImage
      :data-animation="fadeLeftAnimation"
      class="animate__animated invisible aboutimage-img"
      source="http://webdesign-finder.com/carrepair/wp-content/uploads/2016/07/car-633x238.png"
      alt="super power car"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('i18n', ['fadeLeftAnimation']),
  },
}
</script>
<style lang="scss" scoped>
.aboutImage {
  padding-top: 43px;
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 400px) {
    padding-right: 0;
    padding-left: 0;
  }
  &__header,
  p {
    margin: 0 321px 0 0;
    padding: 2px 0;
    background-color: var(--bg);
    @media (max-width: 1200px) {
      margin: 0 235px 0 0;
    }
    @media (max-width: 768px) {
      margin: 0 0 0 0;
    }
  }

  &__header {
    font-size: 50px;
    word-wrap: break-word;
    text-transform: uppercase;
    @media (max-width: 350px) {
      font-size: 30px;
    }
  }
  & p {
    padding-top: 9px;
    padding-bottom: 17px;
  }
  & h3 {
    font-size: 40px;
    line-height: 0.96;
    padding-top: 16px;
    @media (max-width: 500px) {
      font-size: 25px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 208px;
      width: 255px;
      bottom: 111px;
      border: 8px solid var(--color-primary);
      z-index: -1;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
