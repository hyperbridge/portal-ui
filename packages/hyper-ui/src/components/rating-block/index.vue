<template>
    <Block
        title="Rating"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <div
            v-if="items.length > 0"
            class="w-100">
            <ul class="rating-block__list">
                <li
                    v-for="(item, index) in items"
                    :key="index">
                    <div class="rating-block__info">
                        <span class="rating-block__name">{{ item.name }}</span>
                        <span class="rating-block__number">{{ item.value }}</span>
                    </div>
                    <RatingStars
                        :number="item.value"
                        class="rating-block__stars" />
                </li>
            </ul>
            <Button
                v-if="fullReviewsPath"
                status="outline-white"
                :to="fullReviewsPath">
                See Full Reviews
            </Button>
            <Button
                v-if="rateGamePath"
                status="outline-white"
                :to="rateGamePath">
                Rate this game
            </Button>
        </div>
        <div v-else>
            <h4>No reviews yet.</h4>
            <Button
                tag="button"
                status="outline-white"
                @click="$emit('goto')">
                Be the first reviewer
            </Button>
        </div>
    </Block>
</template>

<script>
export default {
    components: {
        'RatingStars': () => import('../../').then(m => m.RatingStars),
        'Button': () => import('../../').then(m => m.Button),
        'Block': () => import('../../').then(m => m.Block)
    },
    props: {
        items: {
            type: [Array, Object]
        },
        fullReviewsPath: {
            type: String,
            default: null
        },
        rateGamePath: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .rating-block__list {
        padding: 0;
        li {
            list-style: none;
            display: block;
            overflow: hidden;
            font-size: 14px;
            margin-bottom: 8px;
            color: #fff;
        }
    }

    .rating-block__info {
        display: inline-block;
        float: left;
        width: calc(100% - 90px);
    }

    .rating-block__name {
        float: left;
        width: 80%;
        font-weight: bold;
    }

    .rating-block__number {
        float: right;
        width: 20%;
        text-align: right;
    }

    .rating-block__stars {
        float: right;
        text-align: left;
        width: 80px;
    }

</style>
