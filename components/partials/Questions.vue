<template>
  <div class="questions">
    <div
      v-for="question in questions"
      :id="`title_${question.id}`"
      :key="question.id"
      class="question accordion border-2 border-bordercolor my-10 px-8"
      @click="toggleItem(question.id)"
    >
      <div
        class="flex justify-between accordion__title cursor-pointer border-bordercolor"
      >
        <div class="flex py-4">
          <IconQuestionmark class="fill-primary w-6 mr-2" />
          <span> {{ $t(question.question) }} </span>
        </div>
        <icon-collapse class="w-6 collapse-icon fill-white" />
      </div>
      <div class="accordion__content">
        {{ $t(question.answer) }}
      </div>
    </div>
  </div>
</template>

<script>
import IconQuestionmark from '@/assets/icons/questionmark.svg?inline'
import IconCollapse from '@/assets/icons/collapse.svg?inline'

export default {
  components: {
    IconQuestionmark,
    IconCollapse,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleItem(id) {
      const item = document.querySelector(`#title_${id}`)
      item.classList.toggle('active')
      // ques[0].active = !ques[0].active
    },
  },
}
</script>
<style lang="scss" scoped>
.accordion {
  &__content {
    padding: 0;
    visibility: hidden;
    height: 0;
  }
  & .collapse-icon {
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
  }
  &.active {
    border-color: var(--color-primary);
    & .accordion__content {
      padding: 16px 28px 20px;
      visibility: visible;
      height: auto;
    }
    & .accordion__title {
      @apply border-b-2;
    }
    & .collapse-icon {
      transform: rotate(0);
    }
  }
}
</style>
