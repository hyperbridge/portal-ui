<template>
    <Block
        class="margin-bottom-30"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <HeadingBar
            v-if="products"
            slot="title"
            class="mb-0"
            :name="title"
            :showArrows="showArrowsState(products, maxPerView)"
            :showBackground="true"
            @prevClick="slider.slidePrev()"
            @nextClick="slider.slideNext()" />
        <Swiper
            v-if="products"
            ref="slider"
            :options="sliderOptions">
            <SwiperSlide
                v-for="(product, index) in products"
                :key="index">
                <ProductCardDynamic
                    v-if="dynamic"
                    class="m-0"
                    :id="product.id"
                    :name="product.name"
                    :price="product.meta.price"
                    :mediumTile="product.meta.images.mediumTile"
                    :video="product.meta.video"
                    :shortDescription="product.meta.shortDescription"
                    :previewImages="product.meta.images.preview"
                    :developerTags="product.meta.developerTags" />
                <ProductCard
                    v-else
                    class="m-0"
                    :id="product.id"
                    :name="product.name"
                    :mediumTile="product.meta.images.mediumTile"
                    :shortDescription="product.meta.shortDescription"
                    :developerTags="product.meta.developerTags" />
            </SwiperSlide>
        </Swiper>
    </Block>
</template>

<script>
export default {
    components: {
        'ProductCard': () => import('../../').then(m => m.ProductCard),
        'ProductCardDynamic': () => import('../../').then(m => m.ProductCardDynamic)
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        title: String,
        maxPerView: {
            type: Number,
            default: 3
        },
        dynamic: {
            type: Boolean,
            default: true
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
