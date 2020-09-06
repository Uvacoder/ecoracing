<template>
  <div class="topnav__contact flex items-center mb-3 md:mr-20">
    <div class="topnav__contact-icon w-6 mr-4">
      <slot />
    </div>
    <div class="topnav__contact-content">
      <p class="text-sm">{{ $t(title) }}</p>
      <p class="text-white">{{ $t(value) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.text-footertext {
  & .text-white {
    color: #fff !important;
  }
}
</style>
