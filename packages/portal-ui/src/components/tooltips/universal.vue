<template>
  <div class="tooltip-universal__wrapper">
    <div
      class="tooltip-universal__content"
      @mouseover="debounce(() => showTooltip = true, delay)"
      @mouseout="debounce(() => showTooltip = false, delay + 1)"
    >
      <slot />
      <Icon v-if="!iconHide" name="question-circle" />
    </div>
    <div v-if="showTooltip" class="tooltip-universal" :class="position">
      <slot name="tooltip">
        <div class="tooltip-universal__default" :class="[position, theme, defaultClass]">
          <h4 v-if="title">{{ title }}</h4>
          {{ text }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { debounce } from "@/mixins";

export default {
  name: "TooltipUniversal",
  mixins: [debounce],
  components: {
    Icon: () => import("../../").then(m => m.Icon)
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "right", "bottom", "left"].includes(val);
      }
    },
    text: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: "light",
      validator(val) {
        return ["light", "dark"].includes(val);
      }
    },
    iconHide: {
      type: Boolean,
      default: null
    },
    defaultClass: {
      type: String,
      default: null
    },
    delay: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      showTooltip: false
    };
  }
};
</script>

<style lang="scss" scoped>
@use 'sass:math';

.tooltip-universal__content {
  position: relative;
  width: 100%;
  height: 100%;
  .fa-question-circle {
    position: absolute;
    font-size: 10px;
    top: 0;
    right: -12px;
  }
}

.tooltip-universal__wrapper {
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
}

$distance: 10px;
$triangle: 15px;
$triangleHalf: math.div($triangle, 2);
$triangleDist: $triangleHalf + 2;

.tooltip-universal {
  position: absolute;
  z-index: 999;
  animation: slide-fade 0.15s ease;
  &.top {
    bottom: calc(100% + #{$distance});
  }
  &.right {
    left: calc(100% + #{$distance});
  }
  &.bottom {
    top: calc(100% + #{$distance});
  }
  &.left {
    right: calc(100% + #{$distance});
  }
}

.tooltip-universal__default {
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(28, 32, 50, 0.6);
  min-width: 140px;
  h4 {
    margin-top: 0;
    margin-bottom: 5px;
  }
  &.dark {
    background-color: #1c2032;
    &:before {
      background-color: #1c2032;
    }
  }
  &.light {
    background-color: #5d75f7;
    &:before {
      background-color: #5d75f7;
    }
  }
  &.top:before {
    bottom: #{-1 * $triangleHalf};
    left: $triangleDist;
  }
  &.right:before {
    left: #{-1 * $triangleHalf};
    top: $triangleDist;
  }
  &.bottom:before {
    top: #{-1 * $triangleHalf};
    left: $triangleDist;
  }
  &.left:before {
    right: #{-1 * $triangleHalf};
    top: $triangleDist;
  }
  &:before {
    width: $triangle;
    height: $triangle;
    position: absolute;
    content: "";
    transform: rotate(45deg);
  }
}

@keyframes slide-fade {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

