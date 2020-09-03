<template>
  <div class="post">
    <div class="post__image relative">
      <LazyImage :source="post.image" alt="post image" />
      <div class="overlay p-4">
        <div
          class="overlay__inner border-2 flex items-center justify-center h-full border-bordercolor"
        >
          <nuxt-link :to="localePath('blog/anything')"
            ><IconLink class="w-6 fill-white"
          /></nuxt-link>
        </div>
      </div>
    </div>
    <div class="post__content p-6 bg-bglighter border-2 border-bordercolor">
      <nuxt-link
        :to="localePath('blog/anything')"
        class="name mt-3 mb-4 hover:text-primary text-white"
      >
        <h2 class="capitalize text-lg hover:text-primary">{{ post.name }}</h2>
      </nuxt-link>
      <div class="description text-sm my-4 text-textcolor">
        {{ post.small_desc }}
      </div>
      <div class="metadata text-sm text-gray">{{ post.date }}</div>
    </div>
  </div>
</template>

<script>
import IconLink from '@/assets/icons/link.svg?inline'

export default {
  components: {
    IconLink,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
