<template>
  <div>
    <img
      :src="image.thumb"
      class="cursor-pointer w-full"
      data-aos="zoom-in"
      data-aos-once="true"
      @click="$emit('openGallery', 'index')"
    />
    <div
      class="overlay p-4 cursor-pointer"
      @click="$emit('openGallery', 'index')"
    >
      <div
        class="overlay__inner border-2 flex items-center justify-center h-full border-bordercolor"
      >
        <icon-glasses class="w-8 fill-white cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import IconGlasses from '@/assets/icons/glasses.svg?inline'

export default {
  components: {
    IconGlasses,
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>
