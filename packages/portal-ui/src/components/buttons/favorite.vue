<template>
  <button
    class="favorite-btn"
    :class="{ 'favorite-btn--active': active }"
    :title="dynamicTitle"
    @click="$emit('click')"
  >
    <Icon :name="active ? unactiveIcon : activeIcon" class="mr-2" />
    {{ dynamicTitle }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  activeIcon: {
    type: String,
    default: "heart",
  },
  unactiveIcon: {
    type: String,
    default: "heart",
  },
});
const emit = defineEmits(["click"]);

const dynamicTitle = computed(() => {
  return (props.active ? "Remove from " : "Add to ") + props.target;
});
</script>

<script>
import Icon from "../components/icon"; // Adjust the path as necessary

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
.favorite-btn {
  color: #fff;
  border-style: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  text-align: left;
  outline: none;
  &:focus .fas {
    animation: clicked 0.6s ease;
  }
}

.favorite-btn .fas {
  color: #d4d4d8;
}

.favorite-btn--active .fas {
  color: #f75d5d;
  filter: drop-shadow(0 0 4px #f75d5d);
}

@keyframes clicked {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(0.9);
  }
  90% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
