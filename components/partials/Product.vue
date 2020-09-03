<template>
  <div class="product">
    <div
      class="product__image overflow-hidden cursor-pointer w-full bg-white"
      @click="
        $router.push({
          path: `products/${product.slug}`,
        })
      "
    >
      <LazyImage :source="product.image" :alt="product.name" />
    </div>
    <div class="product__content pt-8">
      <div class="rate"></div>
      <nuxt-link
        :to="`products/${product.slug}`"
        class="name mt-3 mb-3 hover:text-primary text-white"
      >
        <h2 class="capitalize text-lg">{{ $t(product.title) }}</h2>
      </nuxt-link>
      <div class="price mt-5 font-bold text-primary">
        {{ product.price }}EGP
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.product__image {
  & img {
    transition: all 0.2s ease-in-out 0s;
  }
  &:hover {
    & img {
      transform: scale(1.1);
    }
  }
}
</style>
