<template>
  <div class="activity-block">
    <div class="activity-block__head">
      <span>
        <i class="fas" :class="'fa-' + labelIcon"></i>
        <slot name="label" />
      </span>
      <slot name="title" />
    </div>
    <div class="activity-block__body align-items-center">
      <div>
        <Button
          status="second-info"
          size="md"
          class="mr-3"
          @click="$emit('install')"
        >
          Install Portal
        </Button>
        <Button
          status="second-info"
          size="md"
          class="mr-3"
          @click="$emit('play')"
        >
          Play Now
        </Button>
        <Button
          status="second-info"
          size="md"
          class="mr-3"
          @click="$emit('help')"
        >
          Get Help
        </Button>
      </div>
      <div class="d-flex flex-column text-center">
        <div style="font-size: 14px; line-height: 15px; opacity: 0.6">
          <slot name="description" />
        </div>
        <div class="d-flex justify-content-between">
          <Button
            status="plain"
            size="sm"
            class="p-0"
            style="min-height: 20px; line-height: 14px"
          >
            View your stats
          </Button>
          <Button
            status="plain"
            size="sm"
            class="p-0"
            style="min-height: 20px; line-height: 14px"
          >
            View global stats
          </Button>
        </div>
      </div>
      <div style="width: 240px" class="d-flex flex-column ml-auto">
        <div class="mb-1">
          {{ earnedAchievements }} of {{ totalAchievements }} ({{
            getPercent
          }}%) achievements earned:
        </div>
        <ProgressBar :percentages="getPercent" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useSlots, useEmit } from "vue";
import ProgressBar from "../progress-bar";

const props = defineProps({
  labelIcon: {
    type: String,
    default: null,
  },
  totalAchievements: {
    type: [String, Number],
    default: 1,
  },
  earnedAchievements: {
    type: [String, Number],
    default: 0,
  },
});

const emit = defineEmits(["install", "play", "help"]);

const getPercent = computed(() => {
  const percent = Math.round(
    (Number(props.earnedAchievements) * 100) / Number(props.totalAchievements)
  );
  return percent >= 100 ? "100" : percent;
});
</script>
<style scoped lang="scss">
.activity-block {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.activity-block__head {
  padding: 8px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    45deg,
    rgb(57, 147, 53) 0%,
    rgba(57, 130, 53, 0.5) 100%
  );
  color: rgba(255, 255, 255, 0.85);
  font-size: 17px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  span {
    margin: 0 15px 0 -20px;
    display: flex;
    padding: 3px 7px;
    color: #fff;
    align-items: center;
    background: rgb(57, 147, 53);
    z-index: 2;
    box-shadow: 1px 1px 4px #000;
    font-size: 12px;
    i {
      margin-right: 8px;
    }
  }
}
.activity-block__body {
  padding: 15px;
  background: linear-gradient(
    45deg,
    rgba(61, 62, 93, 1) 0%,
    rgba(76, 75, 114, 1) 100%
  );
  display: flex;
  align-items: center;
  color: #fff;
}
</style>
