<template>
  <div>
    <div class="tabs-nav">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="`nav-item layer${index + 1}`"
        >
          <a
            :href="tab.href"
            :class="{ active: tab.isActive }"
            @click.prevent="selectTab(tab.name, index)"
          >
            {{ tab.name }}
          </a>
        </li>
      </ul>
      <slot name="tabs-nav" />
    </div>
    <div ref="tabs" class="tabs-container">
      <slot :tabs="tabs" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tabs = ref([]);

const selectTab = (tabName, tabIndex) => {
  tabs.value.forEach((tab, i) => {
    tab.isActive = tabIndex === i;
  });
};

onMounted(() => {
  tabs.value = [
    // Initialize your tabs here or fetch them dynamically
    { name: "Tab 1", href: "#", isActive: true },
    { name: "Tab 2", href: "#", isActive: false },
    // Add more tabs as needed
  ];
});
</script>

<style lang="scss" scoped>
@mixin gradient_center($start_color, $center_color, $end_color) {
  background: linear-gradient(
    to right,
    $start_color 0%,
    $center_color 50%,
    $end_color 100%
  );
}

.tabs-nav {
  border-bottom: none;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    padding: 8px 80px;
    margin: 15px 0;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    @include gradient_center(rgba(0, 0, 0, 0.1), #111, rgba(0, 0, 0, 0.1));
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      top: 0;
      left: 0;
      width: 100%;
      @include gradient_center(
        rgba(94, 167, 43, 0),
        rgba(94, 167, 43, 0.8),
        rgba(94, 167, 43, 0)
      );
    }
    &:after {
      top: unset;
      bottom: 0;
    }
    .nav-item {
      list-style: none;
      margin-right: 20px;
      a {
        color: #fff;
        padding: 0 15px;
        font-size: 15px;
        line-height: 32px;
        border: none;
        position: relative;
        display: inline-block;
        opacity: 0.6;
        font-weight: bold;
        &.active {
          opacity: 1;
        }
        &:hover {
          text-decoration: none;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
