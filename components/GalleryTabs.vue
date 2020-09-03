<template>
  <div>
    <div class="gallery__categories flex justify-center items-center">
      <ul class="gallery__categories-list flex flex-wrap">
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'is-active': tab.isActive }"
          class="curosor-pointer uppercase text-white"
        >
          <a
            :href="tab.href"
            class="tab-link text-white w-full h-full"
            @click="selectTab(tab)"
            >{{ tab.name }}</a
          >
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] }
  },

  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.tabs {
  font-size: 14px;
  & li {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .is-active {
    & a {
      color: var(--color-primary);
    }
  }
  & .tab-link {
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
