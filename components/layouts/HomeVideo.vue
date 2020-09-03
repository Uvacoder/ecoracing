<template>
  <section class="video py-110">
    <div class="container">
      <div class="section-header">
        <span class="wings-icon"></span>
        <h2>
          <span
            v-lazyload
            class="uppercase animate__animated invisible"
            data-animation="zoomIn"
          >
            {{ $t('home.videos') }}
          </span>
        </h2>
      </div>
      <div class="video__wrapper grid grid-rows-1 grid-30-70">
        <div class="video__names py-8">
          <div
            v-for="video in videos"
            :key="video.id"
            class="video__name"
            :class="video.active ? 'active' : ''"
            @click="changeVideo(video.id)"
          >
            <div
              v-lazyload
              :data-animation="rotateLeftAnimation"
              class="cursor-pointer bg-bglighter p-8 border animate__animated invisible delay-75"
            >
              <div class="meta-data mb-2">
                <time class="published" datetime="2016-04-26T08:53:32+00:00">{{
                  video.date
                }}</time>
              </div>
              <h4>
                <div class="text-sm name text-white lg:text-lg xl:text-xl">
                  {{ $t(video.name) }}
                </div>
              </h4>
            </div>
          </div>
        </div>

        <div class="video__thumb cursor-pointer" @click="openGallery(0)">
          <div
            v-lazyload
            class="animate__animated invisible video__image h-full"
            :data-animation="fadeRightAnimation"
          >
            <img :src="img" class="w-full h-full cursor-pointer" />
          </div>
          <no-ssr placeholder="Loading...">
            <!-- this component will only be rendered on client-side -->
            <LightBox
              ref="lightbox"
              :media="media"
              :show-caption="true"
              :show-light-box="false"
            ></LightBox>
          </no-ssr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          name: 'videos.video1',
          date: 'vides.date',
          img:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_7989309_original-775x517.jpg',
          active: true,
        },
        {
          id: 2,
          name: 'videos.video2',
          date: 'vides.date',
          img:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/kWcNeHlolIA-775x517.jpg',
          active: false,
        },
        {
          id: 3,
          name: 'videos.video3',
          date: 'videos.date',
          img:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/GoodGuys_32-775x517.jpg',
          active: false,
        },
      ],
      img:
        'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_7989309_original-775x517.jpg',
      media: [
        {
          thumb:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx1TQ3PfnhWmLUWcxrGj3atDCZVTVBKetMOWVVQ4ipIStW03pY',
          sources: [
            {
              src: 'https://www.w3schools.com/html/mov_bbb.mp4',
              type: 'video/mp4',
            },
          ],
          type: 'video',
          caption: 'Monsters Inc.',
          width: 800,
          height: 600,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('i18n', [
      'rotateInDownLeft',
      'fadeRightAnimation',
      'rotateLeftAnimation',
    ]),
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },
    changeVideo(id) {
      this.videos.filter((video) => {
        video.active = false
        if (video.id === id) {
          this.img = video.img
          video.active = true
          return video
        }
      })
    },
  },
}
</script>
