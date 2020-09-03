<template>
  <section class="about py-110">
    <div class="container">
      <div class="about__wrapper grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div
          v-lazyload
          data-animation="zoomIn"
          class="about__content animate__animated invisible"
        >
          <h4 class="text-2xl second-header text-white font-bold mb-4">
            {{ $t('about.about') }}
          </h4>
          <p class="mb-12 font-light">
            {{ $t('about.content') }}
          </p>
          <IconP
            v-for="(pargraph, index) in paragraphs"
            :key="index"
            v-lazyload
            class="mb-8 animate__animated invisible"
            data-animation="zoomIn"
            :title="pargraph.title"
            :content="pargraph.content"
          >
            <component
              :is="pargraph.icon"
              class="fill-primary z-10 relative block"
            ></component>
          </IconP>
        </div>
        <div
          v-lazyload
          :data-animation="bounceInRightAnimation"
          class="about__image animate__animated invisible"
        >
          <img
            src="http://webdesign-finder.com/carrepair/wp-content/uploads/2016/07/about-gear-670x620.png"
            alt="about image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconP from '@/components/partials/IconParagraph.vue'
import IconLight from '@/assets/icons/light.svg?inline'
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  components: {
    IconP,
    IconLight,
  },
  data() {
    return {
      paragraphs: [
        {
          title: 'home.pargraphs.title1',
          content: 'home.pargraphs.content1',
          icon: IconLight,
        },
        {
          title: 'home.pargraphs.title2',
          content: 'home.pargraphs.content2',
          icon: IconLight,
        },
        {
          title: 'home.pargraphs.title3',
          content: 'home.pargraphs.content3',
          icon: IconLight,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('i18n', ['bounceInRightAnimation']),
  },
}
</script>
<style>
.default-enter-active,
.default-leave-active {
  transition: opacity 0.5s;
}
.default-enter,
.default-leave-to {
  opacity: 0;
}
</style>
