<template>
  <figure v-lazyload class="image__wrapper">
    <ImageSpinner class="image__spinner" />
    <img class="image__item" :data-url="source" :alt="alt" />
  </figure>
</template>
<script>
import ImageSpinner from '@/components/general/ImageSpinner.vue'
export default {
  name: 'ImageItem',
  components: {
    ImageSpinner,
  },
  props: {
    source: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'eco racing egypt',
      required: false,
    },
  },
}
</script>
<style scoped lang="scss">
.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    &.loaded {
      .image {
        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }
}
</style>
