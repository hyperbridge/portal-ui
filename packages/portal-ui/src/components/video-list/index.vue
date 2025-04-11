<template>
  <div class="video-item">
    <div class="video-item__wrapper">
      <div class="video-item__img">
        <Img :src="poster" />
        <a
          href="#"
          class="video-item__run-btn"
          @click.prevent="toggleModal"
        >
          <i class="fas fa-play-circle"></i>
        </a>
      </div>
      <div class="video-item__info">
        <div>
          <Img :src="avatar" />
        </div>
        <div>
          <div class="h6 p-0 m-0 font-weight-bold user-name">
            {{ author }}
          </div>
        </div>
        <div class="video-item__viewers">
          <i class="fas fa-eye"></i>
          {{ comments.length }}
        </div>
      </div>
    </div>
    <VideoPopup
      :video="video"
      :activated="showModal"
      @close="toggleModal"
    >
      <template v-for="(comment, index) in comments" :key="index">
        <div class="mb-3">
          <Author
            :name="comment.author.name"
            :img="comment.author.img"
            class="mb-1"
          />
          {{ comment.text }}
        </div>
      </template>
    </VideoPopup>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Img from '../../Img.vue'
import VideoPopup from '../../VideoPopup.vue'
import Author from '../../Author.vue'

const props = defineProps({
  poster: {
    type: String,
    default: null
  },
  author: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  video: {
    type: Object,
    default: () => ({})
  },
  comments: {
    type: Array,
    default: () => []
  }
})

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>
<style lang="scss" scoped>
.video-item {
  width: 100%;
}
.video-item__wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, .2);
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 5px;
}
.video-item__img {
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &:before {
    content: "";
    padding-top: 100%;
  }
}
.video-item__run-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 3rem;
  transition: all .25s ease;
  &:hover {
    transform: scale(1.3);
  }
}
.video-item__info {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 15px;
  position: relative;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }
  .text-muted {
    color: #fff !important;
    opacity: .7;
  }
  .video-item__viewers {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: 12px;
    opacity: .4;
    i {
      margin-right: 5px;
    }
  }
}
</style>