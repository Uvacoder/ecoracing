<template>
  <div class="flex">
    <star v-for="star in 5" :key="star" class="fill-primary w-4" />
  </div>
</template>

<script>
import Star from '@/assets/icons/star.svg?inline'

export default {
  components: {
    Star,
  },
  props: {
    rate: {
      type: Number,
      required: true,
    },
  },
}
</script>
