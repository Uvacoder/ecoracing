<template>
  <div class="product py-110">
    <div class="container">
      <div
        class="product__wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 grid-rows-1"
      >
        <div class="product__image h-full bg-white">
          <LazyImage :source="product.image" alt="any" />
        </div>
        <div class="product__content">
          <div class="flex justify-between items-center">
            <div class="price mt-5 font-bold text-primary text-2xl">
              {{ product.price }}EGP
            </div>
          </div>
          <h1>{{ $t(product.name) }}</h1>
          <p class="desc mt-8">
            {{ $t(product.descripton) }}
          </p>
          <div class="divide-bordercolor"></div>
          <a href="" class="btn-default w-48 mt-4">{{
            $t('btns.add_order')
          }}</a>
        </div>
      </div>
      <div class="container mt-12">
        <tabs>
          <tab :name="$t('products.description')" :selected="true">
            <div class="tab-content">
              <h1 class="uppercase">{{ $t('products.description') }}</h1>
              <p class="mt-8">{{ $t(product.description) }}</p>
            </div>
          </tab>
          <tab :name="$t('products.howtouse')">
            <div class="tab-content">
              <h1 class="uppercase">{{ $t('products.howtouse') }}</h1>
              <p class="mt-8">{{ $t(product.howtouse) }}</p>
            </div>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  components: {
    Tabs,
    Tab,
  },
  computed: {
    ...mapGetters('data', ['product']),
  },
  mounted() {
    this.$store.dispatch('data/getProduct', this.$route.params.slug)
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
  font-weight: 600;
  line-height: 21px;
  margin-bottom: 3px;
  color: var(--white);
}
</style>
