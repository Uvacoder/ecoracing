<template>
  <div :class="rtl ? 'rtl' : ''">
    <div v-lazyload class="slider h-screen w-screen relative ltr">
      <agile
        :nav-buttons="false"
        :autoplay-speed="5000"
        :speed="2500"
        fade
        :pause-on-hover="false"
        pause-on-dots-hover
        autoplay
        class="sliders"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="h-screen w-screen"
        >
          <div
            class="h-full w-full slide-img relative flex items-center flex-col sliders-overlay"
            :style="`background-image: url('${slide.src}')`"
          >
            <div class="top-contacts md:flex justify-center items-center mb-18">
              <Contacts
                v-for="(contact, index2) in contacts"
                :key="index2"
                v-lazyload
                data-animation="backInDown"
                class="mb-8 animate__animated invisible text-footertext"
                :title="contact.title"
                :value="contact.value"
              >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <!-- <div v-html="contact.icon"></div> -->
                <component
                  :is="contact.icon"
                  class="fill-primary z-10 relative block"
                ></component>
              </Contacts>
            </div>
            <div
              v-lazyload
              class="top-logo w-64 invisible animate__animated z-10 relative block"
              data-animation="fadeInDown"
            >
              <img src="https://ecozone.b-cdn.net/website3(1).png" />
            </div>
            <div
              v-lazyload
              class="top-slogan text-center invisible animate__animated"
              data-animation="fadeInDown"
            >
              <h2 class="white uppercase poppins text-xl z-10 relative block">
                {{ $t('home.slogan') }}
              </h2>
              <h2 class="white uppercase poppins text-4xl z-10 relative block">
                {{ $t(slide.caption) }}
              </h2>
            </div>
          </div>
        </div>
      </agile>
    </div>
    <navbar />
    <Nuxt />
    <app-footer />
  </div>
</template>
<script>
// import ColorMode from '@/components/layouts/ColorMode.vue'
import Navbar from '@/components/layouts/Navbar.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
// import Contacts from '@/components/partials/Contacts.vue'
import { VueAgile } from 'vue-agile'
import IconMail from '@/assets/icons/mail.svg?inline'
import IconPhone from '@/assets/icons/phone.svg?inline'
import IconAddress from '@/assets/icons/address.svg?inline'
import { mapGetters } from 'vuex'

export default {
  components: {
    agile: VueAgile,
    Navbar,
    AppFooter,
    // Contacts,
  },
  data() {
    return {
      contacts: [
        { title: 'form.phone', value: 'contact.phone', icon: IconPhone },
        {
          title: 'form.email',
          value: 'contact.email',
          icon: IconMail,
        },
        {
          title: 'form.address',
          value: 'contact.address',
          icon: IconAddress,
        },
      ],
      slides: [
        {
          src: 'https://ecozone.b-cdn.net/image.jpg',
          caption: 'home.slides.slide1',
        },
        {
          src: 'https://ecozone.b-cdn.net/image(1).jpg',
          caption: 'home.slides.slide2',
        },
        {
          src: 'https://ecozone.b-cdn.net/image(2).jpg',
          caption: 'home.slides.slide3',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('i18n', ['rtl']),
  },
}
</script>

<style lang="scss" scoped>
.slide-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.sliders-overlay {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  // z-index: 1;
}
.dark-mode {
  .sliders-overlay {
    position: relative;
    &::before {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
}

.topnav__contact {
  &-content {
    & p {
      color: var(--bg) !important;
    }
  }
}

// .agile
// 	&__dots
// 		bottom: 10px
// 		flex-direction: column
// 		right: 30px
// 		position: absolute

// 	&__dot
// 		margin: 5px 0

// 		button
// 			background-color: transparent
// 			border: 1px solid #fff
// 			cursor: pointer
// 			display: block
// 			height: 10px
// 			font-size: 0
// 			line-height: 0
// 			margin: 0
// 			padding: 0
// 			transition-duration: .3s
// 			width: 10px

// 		&--current,
// 		&:hover
// 			button
// 				background-color: #fff

// // Slides styles
// .slide
// 	display: block
// 	height: 500px
// 	object-fit: cover
// 	width: 100%
//
</style>
