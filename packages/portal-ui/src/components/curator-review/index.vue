<template>
    <div class="curator-review">
        <Img
            :src="review.game.img"
            class="curator-review__img" />
        <div class="curator-review__header">
            <Author
                :name="review.author.name"
                :img="review.author.img" />
            <span style="font-size: 22px">
                <i class="fas fa-star" />
                <strong>{{ review.rate }}</strong>
            </span>
        </div>
        <transition name="fade-scale">
            <p
                v-if="read_more"
                :key="1">
                {{ review.text }}
            </p>
            <p v-else>
                {{ review.text.substring(0, 240) }}...
            </p>
        </transition>
        <a
            href="#"
            class="text-white font-weight-bold"
            @click.prevent="read_more = !read_more">
            {{ read_more ? 'SHOW LESS' : 'MORE...' }}
        </a>
        <h4 class="curator-review__more-header">
            More curated by {{ review.author.name }}
        </h4>
        <ul class="moreReviews">
            <li
                v-for="(sub_review, index) in review.moreReviews"
                :key="index"
                class="sub-review">
                <Img
                    :src="sub_review.game.img"
                    class="sub-review__img" />
                <div class="sub-review__details">
                    <h5 class="margin-bottom-5">
                        <a
                            href="#"
                            class="text-white font-weight-bold">{{ sub_review.game.title }}</a>
                    </h5>
                    <div class="text-white font-weight-bold">
                        <!--<RatingStars :number="sub_review.rate"/>-->
                        <span style="font-size: 22px">{{ sub_review.rate }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <Button>
            <strong>VIEW CURATOR PAGE</strong>
        </Button>
    </div>
</template>

<script>
export default {
    name: 'CuratorReview',
    components: {
        'Author': () => import('../../').then(m => m.Author),
        'RatingStars': () => import('../../').then(m => m.RatingStars),
        'Button': () => import('../../').then(m => m.Button)
    },
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            read_more: false
        }
    }
}
</script>

<style lang="scss" scoped>
.curator-review {
    position: relative;
    background-color: #1C1F31;
    box-sizing: border-box;
    padding: 10px;
    margin: 5px;
    border-radius: 4px;
    color: #fff;
    min-width: 275px;
    &__ {
        &img {
            width: 100%;
            max-height: 120px;
            border-radius: 4px;
            object-fit: cover;
        }
        &header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0;
            .author{
                font-size: 22px;
                font-weight: bold;
            }
        }
        &more-header {
            margin-top: 25px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
        }
    }
    p{
        white-space: normal;
    }
}

.moreReviews {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style-type: none;
}

.sub-review {
    display: flex;
    margin: 7px 0;
    align-items: flex-start;
}

.sub-review__img {
    object-fit: cover;
    width: 45%;
    max-height: 80px;
    height: 100%;
    min-height: 60px;
    border-radius: 4px;
}

.sub-review__details {
    padding: 0 10px;
    box-sizing: border-box;
}

.fade-scale-enter-active, .fade-scale-leave-active {
    transition: opacity .2s ease, transform .5s ease;
}

.fade-scale-leave-active {
    position: absolute;
}

.fade-scale-enter, .fade-scale-leave-to {
    opacity: 0;
    transform: scale(.9);
}
</style>

