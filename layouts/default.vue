<template>
  <div :class="rtl ? 'rtl default-layout' : 'default-layout'">
    <TopNav />
    <Navbar />
    <AppHeader />
    <Nuxt class="min-h-screen" />
    <AppFooter />
  </div>
</template>
<script>
// import ColorMode from '@/components/layouts/ColorMode.vue'
import TopNav from '@/components/layouts/TopNav.vue'
import Navbar from '@/components/layouts/Navbar.vue'
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    TopNav,
    Navbar,
    AppHeader,
    AppFooter,
  },
  computed: {
    ...mapGetters('i18n', ['rtl']),
  },
}
</script>
