<template>
  <div class="page-header">
    <div class="container">
      <div class="header__wrapper">
        <ul
          v-lazyload
          class="breadcrumbs animate__animated invisible"
          data-animation="fadeInUp"
        >
          <li>
            <nuxt-link to="/">{{ $t('links.home') }}</nuxt-link>
          </li>
          <li v-if="$route.name === 'products-slug'">
            <span class="cursor-pointer uppercase">{{
              $t(`links.product`)
            }}</span>
          </li>
          <li v-else-if="$route.name === 'blog-slug'">
            <span class="cursor-pointer uppercase">{{ $t(`links.post`) }}</span>
          </li>
          <li v-else>
            <span class="cursor-pointer uppercase">{{
              $t(`links.${$route.name}`)
            }}</span>
          </li>
        </ul>
        <div class="header__title">
          <h1 v-if="$route.name === 'products-slug'">
            {{ $t(`links.product`) }}
          </h1>
          <h1 v-else-if="$route.name === 'blog-slug'">
            {{ $t(`links.post`) }}
          </h1>
          <h1 v-else>{{ $t(`links.${$route.name}`) }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
