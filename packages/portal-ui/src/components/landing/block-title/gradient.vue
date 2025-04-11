<template>
  <div :class="['landing__block-title', `text-${align}`]">
    <div v-if="$slots.before" style="padding: 0 10px">
      <slot name="before" />
    </div>
    <div
      :class="[
        'landing__block-title-gradient',
        gradientDirection,
        `size-${size}`,
      ]"
    >
      <component
        :is="tag"
        :style="{
          color: color,
          fontSize: fontSize + 'px',
          fontWeight: fontWeight,
        }"
      >
        <slot />
      </component>
    </div>
    <div v-if="$slots.after" style="padding: 0 10px">
      <slot name="after" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "h2",
  },
  size: {
    type: String,
    default: "md",
  },
  fontSize: {
    type: [Number, String],
    default: 28,
  },
  color: {
    type: String,
    default: "#fff",
  },
  align: {
    type: String,
    default: "left",
  },
  fontWeight: {
    type: String,
    default: "bold",
  },
});

const gradientDirection = computed(() => {
  switch (props.align) {
    case "left":
      return "left-align";
    case "center":
      return "center-align";
    case "right":
      return "right-align";
    default:
      return "left-align";
  }
});
</script>

<style lang="scss" scoped>
@mixin gradient($direction, $start_color, $end_color) {
  background: linear-gradient($direction, $start_color 0%, $end_color 100%);
}

@mixin gradient_center($start_color, $center_color, $end_color) {
  background: linear-gradient(
    to right,
    $start_color 0%,
    $center_color 50%,
    $end_color 100%
  );
}

.landing__block-title-gradient {
  position: relative;
  filter: drop-shadow(0 0px 15px #30314c);
  margin-bottom: 15px;
  &.left-align {
    padding: 4px 40px 4px 10px;
    border-radius: 2px 0 0 2px;
    display: inline-flex;
    text-align: left;
    @include gradient(130deg, rgba(94, 167, 43, 0), rgba(94, 167, 43, 1));
    &.size-md {
      padding: 8px 70px 8px 10px;
    }
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      top: 0;
      left: 0;
      width: 100%;
      @include gradient(
        to left,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3)
      );
    }
  }
  &.center-align {
    padding: 4px 50px;
    border-radius: 2px 0 0 2px;
    display: inline-flex;
    text-align: center;
    position: relative;
    @include gradient_center(
      rgba(94, 167, 43, 0),
      rgba(94, 167, 43, 1),
      rgba(94, 167, 43, 0)
    );
    &.size-md {
      padding: 8px 70px;
    }
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      top: 0;
      left: 0;
      width: 100%;
      @include gradient_center(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0)
      );
    }
  }
  &.right-align {
    padding: 4px 10px 4px 50px;
    border-radius: 0 2px 2px 0;
    display: inline-flex;
    text-align: right;
    @include gradient(50deg, rgba(94, 167, 43, 0), rgba(94, 167, 43, 1));
    &.size-md {
      padding: 8px 10px 8px 70px;
    }
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      top: 0;
      left: 0;
      width: 100%;
      @include gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3)
      );
    }
  }
  h2 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    padding: 0;
    margin: 0;
  }
}
</style>
