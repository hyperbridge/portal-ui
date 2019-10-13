<template>
    <div class="product-grid-wrapper">
<!--        {{ products }}-->
        <ProductCardDynamic
            v-for="(product, index) in products"
            :key="index"
            :id="product.id"
            :price="product.price"
            :mediumTile="product.meta.images.mediumTile"
            :video="product.video"
            :shortDescription="product.shortDescription"
            :previewImages="product.meta.images.review"
            :developerTags="product.developerTags" />
    </div>
</template>

<script>
export default {
    components: {
        'ProductCardDynamic': () => import('../../').then(m => m.ProductCardDynamic)
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../css/helpers/mixins.scss';

.product-grid-wrapper {
    margin-bottom: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    @include width-max-lg {
        flex-direction: column;
    }
}

@include width-min-lg {
    .product-grid-wrapper:hover {
        .product-grid__item {
            transform: translateX(-15%);
        }

        .product-grid__item:hover {
            transform: scale(1.3);
            ~ .product-grid__item {
                transform: translateX(15%);
            }
        }
    }
}
</style>

