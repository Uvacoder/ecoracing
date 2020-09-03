<template>
  <section class="news py-110 bg-orange-100">
    <div class="container">
      <div
        class="news__wrapper cursor-move gap-6 grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        <post
          v-for="post in posts"
          :key="post.id"
          v-lazyload
          data-animation="zoomIn"
          class="animate__animated invisible"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Post from '@/components/partials/Post.vue'

export default {
  layout: 'default',
  components: {
    Post,
  },
  data() {
    return {
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
        {
          id: 5,
          name: 'Cum sociis natoque penatib et magnis parturient.',
          small_desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus vitae felis at feugiat. Sed pellentesque, turpis sit amet',
          image:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/2011_G_Power_BMW_M_3_Tornado_R_S_tuning_engine_engines_3888x2592-1170x780.jpg',
        },
        {
          id: 6,
          name:
            'Nulla ut nibh nisl. Maecenas dictum urna ut sagittis.            ',
          small_desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus vitae felis at feugiat. Sed pellentesque, turpis sit amet',
          image:
            'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/kWcNeHlolIA-775x517.jpg',
        },
      ],
    }
  },
}
</script>
