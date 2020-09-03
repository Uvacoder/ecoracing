<template>
  <section class="gallery p-110">
    <div
      v-lazyload
      class="section-header animate__animated invisible"
      data-animation="zoomIn"
    >
      <span class="wings-icon"></span>
      <h2 class="mb-2">
        <span class="uppercase">{{ $t('home.works') }} </span>
      </h2>
    </div>
    <tabs>
      <tab :name="$t('gallery.all')" :selected="true">
        <div class="gallery__images">
          <div
            v-for="(image, index) in galleryMedia"
            :key="index"
            class="image__wrapper w-full h-full relative"
          >
            <LazyImage
              data-animation="fadeIn"
              :source="image.thumb"
              class="cursor-pointer animate__animated invisible w-full"
              @click="openGallery(index)"
            />
            <div class="overlay p-4 cursor-pointer" @click="openGallery(index)">
              <div
                class="overlay__inner border-2 flex items-center justify-center h-full border-bordercolor"
              >
                <icon-glasses class="w-8 fill-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </tab>
      <tab :name="$t('gallery.gallery')" :selected="false">
        <div class="gallery__images">
          <div
            v-for="(image, index) in galleryMedia3"
            :key="index"
            class="image__wrapper w-full h-full relative"
          >
            <LazyImage
              data-animation="fadeIn"
              :source="image.thumb"
              class="cursor-pointer w-full animate__animated invisible"
              @click="openGallery(index)"
            />
            <div class="overlay p-4 cursor-pointer" @click="openGallery(index)">
              <div
                class="overlay__inner border-2 flex items-center justify-center h-full border-bordercolor"
              >
                <icon-glasses class="w-8 fill-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </tab>
      <tab :name="$t('gallery.garage')" :selected="false">
        <div class="gallery__images">
          <div
            v-for="(image, index) in galleryMedia2"
            :key="index"
            class="image__wrapper w-full h-full relative"
          >
            <LazyImage
              data-animation="fadeIn"
              :source="image.thumb"
              class="cursor-pointer w-full animate__animated invisible"
              @click="openGallery(index)"
            />
            <div class="overlay p-4 cursor-pointer" @click="openGallery(index)">
              <div
                class="overlay__inner border-2 flex items-center justify-center h-full border-bordercolor"
              >
                <icon-glasses class="w-8 fill-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </tab>
    </tabs>

    <no-ssr placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      <LightBox
        ref="galerylightbox"
        :media="galleryMedia"
        :show-caption="true"
        :show-light-box="false"
      ></LightBox>
    </no-ssr>
  </section>
</template>

<script>
import IconGlasses from '@/assets/icons/glasses.svg?inline'
import Tabs from '@/components/GalleryTabs.vue'
import Tab from '@/components/Tab.vue'
export default {
  components: {
    IconGlasses,
    Tabs,
    Tab,
  },
  data() {
    return {
      selectedId: 1,
      galleryMedia2: [
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/32_Ford_Tudor_Intro_1_1495x992-775x517.jpg',
          sources: [
            {
              src: 'https://www.youtube.com/embed/hsZ9RWq4Hhc',
              type: 'video/mp4',
            },
          ],
          type: 'video',
          caption: 'Monsters Inc.',
          width: 800,
          height: 600,
        },
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Cars_photography_muscle_cars_vehicles_ford_mustang_2560x1600-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Cars_photography_muscle_cars_vehicles_ford_mustang_2560x1600-775x517.jpg',
          caption: 'Balea Lake Chalet, Romania',
        },
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1954_Mercedes_Benz_300_SL_W198_300_tetro_supercar_supercars_gullwing____h_2048x1536-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1954_Mercedes_Benz_300_SL_W198_300_tetro_supercar_supercars_gullwing____h_2048x1536-775x517.jpg',
          caption: 'Zell am See, Austria',
        },
      ],

      galleryMedia: [
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/32_Ford_Tudor_Intro_1_1495x992-775x517.jpg',
          sources: [
            {
              src: 'https://www.youtube.com/embed/hsZ9RWq4Hhc',
              type: 'video/mp4',
            },
          ],
          type: 'video',
          caption: 'Monsters Inc.',
          width: 800,
          height: 600,
        },
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Cars_photography_muscle_cars_vehicles_ford_mustang_2560x1600-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Cars_photography_muscle_cars_vehicles_ford_mustang_2560x1600-775x517.jpg',
          caption: 'Balea Lake Chalet, Romania',
        },
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1954_Mercedes_Benz_300_SL_W198_300_tetro_supercar_supercars_gullwing____h_2048x1536-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1954_Mercedes_Benz_300_SL_W198_300_tetro_supercar_supercars_gullwing____h_2048x1536-775x517.jpg',
          caption: 'Zell am See, Austria',
        },

        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Duesenberg_Vintage_Car_2560x1920-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Duesenberg_Vintage_Car_2560x1920-775x517.jpg',
          caption: 'Maybug',
        },
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/muscle_cars_1969_monochrome_dodge_charger_rt_burnout_hot_rod_smoke_muscle_car_tuning_1440x900-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/muscle_cars_1969_monochrome_dodge_charger_rt_burnout_hot_rod_smoke_muscle_car_tuning_1440x900-775x517.jpg',
          caption: 'An RC Car',
        },
        {
          categoryId: 3,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1962_Ferrari_250_GTO_Series_I_supercar_supercars_classic____d_2048x1536-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1962_Ferrari_250_GTO_Series_I_supercar_supercars_classic____d_2048x1536-775x517.jpg',
          caption: 'Two tourists on a mountain',
        },
        {
          categoryId: 3,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_33534497_original-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_33534497_original-775x517.jpg',
          caption: 'Dog',
        },
        {
          categoryId: 3,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/2009_Zenvo_ST1_supercar_car_sports_orange_4000x2995-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/2009_Zenvo_ST1_supercar_car_sports_orange_4000x2995-775x517.jpg',
          caption:
            "Mmm, Beer! - This should be a short description, as it is after all, beer, but let's make it long so that we can test how the footer looks",
        },
      ],
      galleryMedia3: [
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Duesenberg_Vintage_Car_2560x1920-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Duesenberg_Vintage_Car_2560x1920-775x517.jpg',
          caption: 'Maybug',
        },
        {
          categoryId: 2,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/muscle_cars_1969_monochrome_dodge_charger_rt_burnout_hot_rod_smoke_muscle_car_tuning_1440x900-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/muscle_cars_1969_monochrome_dodge_charger_rt_burnout_hot_rod_smoke_muscle_car_tuning_1440x900-775x517.jpg',
          caption: 'An RC Car',
        },
        {
          categoryId: 3,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1962_Ferrari_250_GTO_Series_I_supercar_supercars_classic____d_2048x1536-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/1962_Ferrari_250_GTO_Series_I_supercar_supercars_classic____d_2048x1536-775x517.jpg',
          caption: 'Two tourists on a mountain',
        },
        {
          categoryId: 3,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_33534497_original-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_33534497_original-775x517.jpg',
          caption: 'Dog',
        },
        {
          categoryId: 3,
          thumb:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/2009_Zenvo_ST1_supercar_car_sports_orange_4000x2995-775x517.jpg',
          src:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/2009_Zenvo_ST1_supercar_car_sports_orange_4000x2995-775x517.jpg',
          caption:
            "Mmm, Beer! - This should be a short description, as it is after all, beer, but let's make it long so that we can test how the footer looks",
        },
      ],
      categories: [
        { name: 'all', id: '1' },
        { name: 'Gallery', id: '2' },
        { name: 'Garage', id: '3' },
      ],
    }
  },
  methods: {
    openGallery(index) {
      //   console.log(this.$refs.galerylightbox.showImage(index))
      this.$refs.galerylightbox.showImage(index)
    },
  },
}
</script>
