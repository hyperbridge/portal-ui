<template>
  <video
    :controls="controls"
    :width="width"
    :height="height"
    :autoplay="autoplay"
    :poster="poster"
    :preload="preload"
  >
    <template v-for="item in video">
      <source :src="item.src" :type="`video/${item.format}`" />
    </template>
    Your browser does not support the video tag.
  </video>
</template>
<script setup>
import { onMounted, defineProps, toRefs } from 'vue'

const props = defineProps({
  video: {
    type: [Array, Object],
    required: true
  },
  controls: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  preload: {
    type: Boolean,
    default: 'auto'
  },
  poster: {
    type: String,
    default: ''
  }
})

const { video, controls, width, height, autoplay, preload, poster } = toRefs(props)

onMounted(() => {
  emit('ready')
})
</script>