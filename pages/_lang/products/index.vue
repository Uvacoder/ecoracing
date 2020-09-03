<template>
  <section class="news py-110 bg-orange-100">
    <div class="container">
      <div
        class="news__wrapper cursor-move gap-6 grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        <product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Product from '@/components/partials/Product.vue'
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  components: {
    Product,
  },
  computed: {
    ...mapGetters('data', ['products']),
  },
}
</script>
