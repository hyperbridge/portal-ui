<template>
  <div
    class="block w-100"
    :class="{
      'bg-gradient': bgGradient,
      'bg-color': bgColor,
      'no-gutter': noGutter,
      'only-content-bg': onlyContentBg,
    }"
  >
    <HeadingBar
      v-if="title"
      :name="title"
      :class="{ 'mb-0': onlyContentBg }"
      :showArrows="false"
      :showActions="showActions"
    >
      <template #additional-action>
        <slot name="additional-action" />
      </template>
    </HeadingBar>
    <slot name="title" />
    <div class="block__content" :class="{ 'no-padding': noPadding }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineAsyncComponent } from "vue";

const HeadingBar = defineAsyncComponent(() =>
  import("../../").then((m) => m.HeadingBar)
);

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  noGutter: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: Boolean,
    default: true,
  },
  bgGradient: {
    type: Boolean,
    default: false,
  },
  onlyContentBg: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
  showActions: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  position: relative;
  color: #fff;
  &:not(.only-content-bg) {
    &.bg-color {
      background: rgba(0, 0, 0, 0.13);
    }
    &.bg-gradient {
      border-radius: 5px 5px 0 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 88%,
        rgba(0, 0, 0, 0.2) 91%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
  &.no-gutter {
    padding: 0;
  }
  &.only-content-bg {
    padding: 0;
    border-radius: 0;
    &.bg-color {
      .block__content {
        padding: 15px;
        background: rgba(0, 0, 0, 0.13);
      }
    }
    &.bg-gradient {
      .block__content {
        padding: 15px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2) 88%,
          rgba(0, 0, 0, 0.2) 91%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    }
  }
  backdrop-filter: blur(2px);
}
.block__content {
  width: 100%;
  &.no-padding {
    padding: 0 !important;
  }
}
</style>
