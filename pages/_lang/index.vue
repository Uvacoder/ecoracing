<template>
  <div class="home-page">
    <section class="homeabout">
      <div class="container py-110">
        <div class="homeabout__wrapper grid grid-60-40">
          <about-image />
          <div class="homeabout__text">
            <IconP
              v-for="(pargraph, index) in paragraphs"
              :key="index"
              v-lazyload
              class="animate__animated invisible"
              data-animation="zoomIn"
              :title="pargraph.title"
              :content="pargraph.content"
            >
              <component
                :is="pargraph.icon"
                class="fill-primary z-10 relative block"
              ></component>
            </IconP>
          </div>
        </div>
      </div>
    </section>
    <section v-lazyload class="testemonials bg-black py-110 ltr">
      <div class="container">
        <div
          v-lazyload
          class="section-header animate__animated invisible"
          data-animation="zoomIn"
        >
          <span class="wings-icon"></span>
          <h2>
            <span class="uppercase">{{ $t('home.testemonials') }}</span>
          </h2>
        </div>
        <div class="testemonials__wrapper">
          <agile :options="testemonialsOptions">
            <Testemonial
              v-for="testemonial in testemonials"
              :key="testemonial.id"
              :testemonial="testemonial"
            />
          </agile>
        </div>
      </div>
    </section>
    <home-video />
    <home-gallery />
    <section class="news py-110 bg-orange-100 ltr">
      <div class="container">
        <div
          v-lazyload
          class="section-header animate__animated invisible"
          data-animation="zoomIn"
        >
          <span class="wings-icon"></span>
          <h2>
            <span class="uppercase"> {{ $t('home.news') }} </span>
          </h2>
        </div>

        <div
          v-lazyload
          class="news__wrapper cursor-move animate__animated invisible"
          :data-animation="backLeftAnimation"
        >
          <agile :options="testemonialsOptions">
            <post v-for="post in posts" :key="post.id" :post="post" />
          </agile>
        </div>
      </div>
    </section>
    <section
      class="logos bg-secondarybg h-40 w-full flex justify-center items-center"
    >
      <div class="w-1/3">
        <LazyImage
          data-animation="pulse"
          class="animate__animated invisible"
          source="http://ecodemo-3.esolve-eg.com/website4.png"
          alt="logo"
        />
        <h2
          class="text-white text-center uppercase poppins text-xl z-10 relative block"
        >
          {{ $t('home.slogan') }}
        </h2>
      </div>
    </section>
    <section class="mission py-110">
      <div class="container">
        <div class="mission__wrapper grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div
            v-lazyload
            class="mission__content animate__animated invisible"
            :data-animation="bounceInLeftAnimation"
          >
            <h4 class="text-2xl second-header text-white font-bold mb-4">
              {{ $t('home.our_mission') }}
            </h4>
            <p class="mb-4 font-light">
              {{ $t('home.mission_content') }}
            </p>
          </div>

          <div
            v-lazyload
            class="mission__qa animate__animated invisible"
            :data-animation="bounceInRightAnimation"
          >
            <h4 class="text-2xl second-header text-white font-bold">
              {{ $t('home.questions') }}
            </h4>

            <questions :questions="questions" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutImage from '@/components/layouts/AboutImage.vue'
import HomeVideo from '@/components/layouts/HomeVideo.vue'
import HomeGallery from '@/components/layouts/HomeGallery.vue'
import IconP from '@/components/partials/IconParagraph.vue'
import Testemonial from '@/components/partials/Testemonial.vue'
import Post from '@/components/partials/Post.vue'
import IconLight from '@/assets/icons/light.svg?inline'
// import IconCo from '@/assets/icons/co.svg?inline'
// import IconEngine from '@/assets/icons/engine.svg?inline'
// import IconPerformance from '@/assets/icons/performance.svg?inline'

import Questions from '@/components/partials/Questions.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AboutImage,
    IconP,
    Questions,
    IconLight,
    Testemonial,
    HomeGallery,
    Post,
    HomeVideo,
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          question: 'questions.q1',
          active: true,
          answer: 'questions.a1',
        },
        {
          id: 2,
          question: 'questions.q2',
          answer: 'questions.a2',
        },
        {
          id: 3,
          question: 'questions.q3',
          answer: 'questions.a3',
        },
      ],
      testemonialsOptions: {
        slidesToShow: 1,
        rtl: true,
        dots: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      testemonials: [
        {
          id: 1,
          name: '',
          title: 'TOP LEADER SINGERGY',
          content:
            'The test result of treller.using Eco Racing Diesel Sinergy was very good . the weight was 42 ton . the pull was light ,it saved up to 40% . tomorrow he is from Banyuwangi to Kediri city for registration .Mr  Harosono was so sure for  the future prospect. It was no in vain..i told the prospect at 3 am lots of struggle to change the life . I love synergy . ',
        },
        {
          id: 2,
          name: '',
          title: 'TNT ECO RACING',
          content:
            'This is a personal testimony when I used Toyota rush year 2009. I used to spend 1 litre of premium for 10 km , now I fill the tank fully around 40 litres , then I added 2 slicks of eco rising mobile , and after I reached 494 km it spent 35 litres . so in my calculation . there was a saving around 40 % . it used to 10 km for 1  litre . but after I use eco ricing it  took 14 km for 1 lkitre . thank you eco racing . ',
        },
        {
          id: 3,
          name: '',
          title: 'TNT GROUB ',
          content:
            'It has been four-day usage . it was fully used two days ago and it has not filled yet today . from the first usage , it saved 50%. The decrease was in little number . ',
        },
      ],
      posts: [
        {
          id: 1,
          name: 'Sed gravida nisi et risus scelerisque, eu tristique. ',
          small_desc:
            'Proin luctus condimentum tortor, ullamcorper tempus neque blandit ac. Integer pretium augue eu orci accumsan accumsan. Donec',
          image:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_7989309_original-775x517.jpg',
        },
        {
          id: 2,
          name: 'Nulla ut nibh nisl. Maecenas dictum urna ut sagittis.',
          small_desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus vitae felis at feugiat. Sed pellentesque, turpis sit amet',
          image:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/cars_tuning_Subaru_Impreza_WRX_jdm_1920x1080-775x517.jpg',
        },
        {
          id: 3,
          name: 'Vestibulum eu consequat quam. Nunc eget orci metus.',
          small_desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus vitae felis at feugiat. Sed pellentesque, turpis sit amet',
          image:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/GoodGuys_32-775x517.jpg',
        },
        {
          id: 4,
          name:
            'Nulla ut nibh nisl. Maecenas dictum urna ut sagittis.            ',
          small_desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus vitae felis at feugiat. Sed pellentesque, turpis sit amet',
          image:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/kWcNeHlolIA-775x517.jpg',
        },
      ],
      paragraphs: [
        {
          title: 'home.pargraphs.title1',
          content: 'home.pargraphs.content1',
          icon: IconLight,
        },
        {
          title: 'home.pargraphs.title2',
          content: 'home.pargraphs.content2',
          icon: IconLight,
        },
        {
          title: 'home.pargraphs.title3',
          content: 'home.pargraphs.content3',
          icon: IconLight,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('i18n', [
      'rtl',
      'backLeftAnimation',
      'bounceInLeftAnimation',
      'bounceInRightAnimation',
    ]),
  },

  layout: 'home',
}
</script>
