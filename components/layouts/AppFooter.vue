<template>
  <footer>
    <div class="container">
      <div class="footer__wrapper block md:flex">
        <div class="news-letter mb-12">
          <h4 class="second-header text-white font-bold">
            {{ $t('footer.newsletter') }}
          </h4>
          <div class="footer__content">
            <input type="email" placeholder="enter your email address" />
            <a href="" class="btn-default w-48 mt-4">{{ $t('btns.submit') }}</a>
          </div>
        </div>
        <div class="useful-links mb-12">
          <h4 class="second-header text-white font-bold">
            {{ $t('footer.contacts') }}
          </h4>
          <div class="footer__content">
            <ul class="footer__nav">
              <li class="py-1">
                <nuxt-link
                  class="capitalize text-textcolor hover:text-primary hover:ml-1"
                  :to="localePath('/about')"
                  >{{ $t('links.about') }}</nuxt-link
                >
              </li>
              <li class="py-1">
                <nuxt-link
                  class="capitalize text-textcolor hover:text-primary hover:ml-1"
                  :to="localePath('/blog')"
                  >{{ $t('links.blog') }}</nuxt-link
                >
              </li>
              <li class="py-1">
                <nuxt-link
                  class="capitalize text-textcolor hover:text-primary hover:ml-1"
                  :to="localePath('/products')"
                  >{{ $t('links.products') }}</nuxt-link
                >
              </li>
              <li class="py-1">
                <nuxt-link
                  class="capitalize text-textcolor hover:text-primary hover:ml-1"
                  :to="localePath('/orders')"
                  >{{ $t('links.orders') }}</nuxt-link
                >
              </li>
              <li class="py-1">
                <nuxt-link
                  class="capitalize text-textcolor hover:text-primary hover:ml-1"
                  :to="localePath('/contact')"
                  >{{ $t('links.contact') }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="news-letter">
          <h4 class="second-header text-white font-bold">
            {{ $t('footer.contacts') }}
          </h4>
          <!-- <div class="footer__content">
          <ul class="footer__nav">
            <li>
              <nuxt-link :to="localePath('/about')">about</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog">blog</nuxt-link>
            </li>
            <li><nuxt-link to="/products">products</nuxt-link></li>
            <li><nuxt-link to="/orders">orders</nuxt-link></li>
            <li><nuxt-link to="/contact">contact</nuxt-link></li>
          </ul>
        </div> -->
        </div>
      </div>

      <div
        class="flex justify-between py-4 border-t border-bordercolor items-center"
      >
        <div class="copyrights">
          <div class="mb-2">{{ $t('footer.imedia') }}</div>
          <div class="mb-2">{{ $t('footer.esolve') }}</div>
        </div>
        <div class="social-media flex items-center">
          <a class="icon-link scale-6" href="www.facebook.com"
            ><icon-facebook class="facebook fill-white"
          /></a>
          <a class="icon-link relative" href="www.instagram.com"
            ><icon-instagram class="w-12 fill-white"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconFacebook from '@/assets/icons/facebook.svg?inline'
import IconInstagram from '@/assets/icons/instagram.svg?inline'

export default {
  components: {
    IconFacebook,
    IconInstagram,
  },
}
</script>
