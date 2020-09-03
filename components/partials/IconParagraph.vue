<template>
  <div class="iconp">
    <div class="iconp__wrapper flex">
      <div
        class="iconp__icon mr-5 bg-primary rounded w-24 h-10 text-white hover:bg-black flex items-center justify-center"
      >
        <slot />
      </div>
      <div class="iconp__content">
        <h3 class="iconp__title mb-5 text-white uppercase text-lg font-bold">
          {{ $t(title) }}
        </h3>

        <p class="icono__p text-sm">
          {{ $t(content) }}
        </p>
      </div>
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
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
