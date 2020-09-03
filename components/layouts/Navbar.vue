<template>
  <div class="navigation">
    <div class="bg-secondarybg">
      <div class="container">
        <div class="flex justify-between">
          <nav ref="navbar" class="nav main-nav py-2">
            <ul
              ref="menu"
              class="flex nav__menu py-4"
              tabindex="-1"
              aria-label="main navigation"
            >
              <li class="">
                <nuxt-link :to="localePath('/')">{{
                  $t('links.home')
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/about')">{{
                  $t('links.about')
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/blog')">{{
                  $t('links.blog')
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/products')">{{
                  $t('links.products')
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/orders')">{{
                  $t('links.orders')
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/contact')">{{
                  $t('links.contact')
                }}</nuxt-link>
              </li>
            </ul>
            <!-- MENU TOGGLE BUTTON -->
            <IconMenu
              ref="navtoggle"
              class="nav__toggle w-16 cursor-pointer p-2 lg:hidden"
              aria-expanded="false"
              aria-controls="menu"
              @click.prevent="toggleMenu"
            />
            <IconClose
              class="hidden close-icon cursor-pointer"
              @click.prevent="toggleMenu"
            />
            <!-- ANIMATED BACKGROUND ELEMENT -->
            <div class="splash"></div>
          </nav>

          <ul class="icons flex justif-center align-center">
            <!-- <IconDark
              v-if="$colorMode.preference == 'light'"
              class="icon mr-4 cursor-pointer"
              @click="toggleColorMode"
            />
            <IconLight
              v-else
              class="icon mr-4 cursor-pointer"
              @click="toggleColorMode"
            /> -->
            <IconGlobe
              class="globe-icon cursor-pointer"
              @click.prevent="toggleLang()"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconMenu from '@/assets/icons/menu.svg?inline'
// import IconLight from '@/assets/icons/light.svg?inline'
// import IconDark from '@/assets/icons/dark.svg?inline'
import IconClose from '@/assets/icons/close.svg?inline'
import IconGlobe from '@/assets/icons/globe.svg?inline'

export default {
  components: {
    // IconLight,
    // IconDark,
    IconMenu,
    IconClose,
    IconGlobe,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  watch: {
    $route() {
      const nav = this.$refs.navbar
      const menu = this.$refs.menu
      this.isMenuOpen = false
      menu.hidden = true
      nav.classList.remove('nav--open')

      document.body.style.position = ''
      document.body.style.top = ``
    },
  },

  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'dark' ? 'light' : 'dark'
    },
    toggleLang() {
      // this.$store.commit('toggleLang')
      const locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      this.$i18n.locale = locale
      this.$store.commit('i18n/setLocale', locale)
    },
    toggleMenu() {
      const nav = this.$refs.navbar
      const menu = this.$refs.menu
      const menuToggle = this.$refs.navtoggle
      this.isMenuOpen = !this.isMenuOpen
      menuToggle.setAttribute('aria-expanded', String(this.isMenuOpen))
      menu.hidden = !this.isMenuOpen
      nav.classList.toggle('nav--open')
      if (this.isMenuOpen) {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
      } else {
        document.body.style.position = ''
        document.body.style.top = ``
      }
    },
  },
}
</script>
