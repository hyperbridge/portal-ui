<template>
  <div class="landing-slider">
    <transition v-if="currentSlide" name="fade">
      <div class="landing-slider__main">
        <Swiper ref="swiperTop" class="gallery-top">
          <SwiperSlide v-for="(slide, index) in items" :key="index">
            <div class="p-3">
              <video v-if="slide.type === 'video'" :poster="slide.poster" :preload="preload" :controls="controls" :autoplay="autoplay" loop>
                <source type="video/webm" :src="slide.src" />
              </video>
              <Img v-else :src="slide.image" />
              <LandingBlockTitle v-if="slide.title" fontSize="32" class="text-uppercase p-0 mt-4 mb-0">
                {{ slide.title }}
              </LandingBlockTitle>
              <LandingBlockTitle v-if="slide.subtitle" tag="div" fontSize="16" fontWeight="normal">
                {{ slide.subtitle }}
              </LandingBlockTitle>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </transition>
    <div class="landing-slider__thumbs">
      <Swiper ref="swiperThumbs" :options="swiperOptionThumbs">
        <SwiperSlide v-for="(slide, index) in items" :key="index">
          <Img :src="slide.poster" />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-next swiper-button-white" @click="slider.slidePrev()" />
      <div class="swiper-button-prev swiper-button-white" @click="slider.slideNext()" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import LandingBlockTitle from '../../LandingBlockTitle.vue'
import Img from 'path/to/your/img/component' // Adjust the import path accordingly

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const swiperOptionThumbs = {
  slidesPerView: 6,
  spaceBetween: 4,
  touchRatio: 0.2,
  centeredSlides: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

const currentSlide = ref({})
const autoplay = ref(false)
const controls = ref(true)
const preload = ref(false)
const swiperTop = ref(null)
const swiperThumbs = ref(null)

onMounted(() => {
  const swiperTopInstance = swiperTop.value.swiper
  const swiperThumbsInstance = swiperThumbs.value.swiper
  swiperThumbsInstance.controller.control = swiperTopInstance
})
</script>
<style lang="scss" scoped>
@mixin gradient ($direction, $start_color, $end_color) {
  background: linear-gradient($direction, $start_color 0%, $end_color 100%); /* Chrome10-25,Safari5.1-6 */
}
.landing-slider__main {
  margin-bottom: 15px;
  video,
  img {
    width: 100%;
    height: auto;
    box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.6), 3px 6px 15px rgba(0, 0, 0, 0.6), 3px 6px 15px rgba(0, 0, 0, 0.6);
  }
}
.landing-slider__thumbs {
  padding: 0 50px;
  position: relative;
  width: 90%;
  margin: 0 5%;
  .swiper-slide {
    padding: 3px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 0 8px #000;
      transition: all 200ms ease-in-out;
      &:hover {
        cursor: pointer;
      }
    }
    &:hover {
      cursor: pointer;
      @include gradient(45deg, #438e2a, #79ff4b);
    }
    &.swiper-slide-active {
      @include gradient(45deg, #aa3f00, #ff6600);
    }
  }
  .swiper-button-white {
    transform: scale(0.7);
  }
}
</style>