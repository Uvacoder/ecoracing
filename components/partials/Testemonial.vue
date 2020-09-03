<template>
  <div
    v-lazyload
    data-animation="fadeIn"
    class="testemonial animate__animated invisible"
  >
    <div class="testemonial__icon"></div>
    <div class="testemonial__text">
      <p>
        {{ testemonial.content }}
      </p>
    </div>
    <div class="testemonial__meta">
      <div class="testemonial__meta-author">
        <span class="author-name block">{{ testemonial.name }}</span>
        <em>{{ testemonial.title }}</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testemonial: {
      type: Object,
      required: true,
    },
  },
}
</script>
