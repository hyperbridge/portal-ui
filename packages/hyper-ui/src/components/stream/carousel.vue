<template>
    <Block
        v-if="streams"
        class="margin-bottom-30"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <HeadingBar
            slot="title"
            class="mb-0"
            :name="title"
            :showActions="showArrowsState(streams, maxPerView)"
            :showArrows="showArrowsState(streams, maxPerView)"
            :showBackground="showBackground"
            @prevClick="slider.slidePrev()"
            @nextClick="slider.slideNext()" />

        <Swiper
            ref="slider"
            :options="sliderOptions">
            <SwiperSlide
                v-for="(stream, index) in streams"
                :key="index">
                <StreamItem
                    :streamName="stream.userName"
                    :streamAvatar="stream.userAvatar"
                    :streamImg="stream.previews"
                    :streamLink="stream.src"
                    :streamViews="stream.views"
                    :streamId="stream.id" />
            </SwiperSlide>
        </Swiper>
    </Block>
</template>

<script>
export default {
    name: 'ProductSlider',
    components: {
        'StreamItem': () => import('../../').then(m => m.StreamItem)
    },
    props: {
        streams: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: null
        },
        maxPerView: {
            type: Number,
            default: 3
        },
        showBackground: {
            type: Boolean,
            default: null
        }
    },
    data() {
        return {
            sliderOptions: {
                slidesPerView: this.maxPerView,
                spaceBetween: 15,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }
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

<style lang="scss" scoped>
    .block__content {
        padding: 0;
    }
    .swiper-container {
        padding: 20px 15px;
        margin: -15px;
    }
    .swiper-slide {
        height: auto;
    }
    .product-grid__item {
        height: 100%;
    }
    @media (max-width: 768px) {
        .swiper-container {
            margin: 0;
            padding: 0;
        }
    }
</style>
