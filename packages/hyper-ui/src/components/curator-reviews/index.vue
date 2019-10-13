<template>
    <div class="curator-reviews-wrapper">
        <Swiper
            v-if="reviews.length"
            :options="sliderOptions">
            <SwiperSlide
                v-for="(review, index) in reviews"
                :key="index"
                ref="slider">
                <CuratorReview :review="review" />
            </SwiperSlide>
        </Swiper>
        <p v-if="!reviews.length">
            Nothing could be found. Want to <Button
            status="plain"
            @click="$store.commit('application/activeModal', 'comingSoon')">
            Check for updates
        </Button>?
        </p>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'HeadingBar': () => import('../../').then(m => m.HeadingBar),
        'CuratorReview': () => import('../../').then(m => m.CuratorReview),
        'Swiper': () => import('../../').then(m => m.Swiper),
        'SwiperSlide': () => import('../../').then(m => m.SwiperSlide),
    },
    props: {
        reviews: {
            type: Array,
            require: true
        },
        maxPerView: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            sliderOptions: {
                slidesPerView: this.maxPerView,
                spaceBetween: 15
            }
        }
    },
    computed: {
        slider() {
            return this.$refs.slider.swiper
        }
    },
    methods: {
        showArrowsState(el, count) {
            if (el.length > count) {
                return true
            }
            return false
        }
    }
}
</script>

