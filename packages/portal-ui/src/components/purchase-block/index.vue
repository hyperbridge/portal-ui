<template>
    <Block
        :title="title"
        class="purchase-block"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <div
            v-if="tags"
            class="purchase-block__tags col-12">
            <div
                v-for="(tag, index) in tags"
                :key="index">
                {{ tag }}
            </div>
        </div>

        <div
            v-if="!isUnavailable"
            class="purchase-block__price col-12">
            <span v-if="price">{{ price | convertCurrency }}</span><span v-else>$0.00</span>
        </div>

        <div
            v-if="eligibleTokens || offersPurchases || releaseDate || isPurchased || isUnavailable"
            class="purchase-block__info col-12">
            <div v-if="eligibleTokens">
                Eligible for up to <i
                    class="fas fa-coins mx-1"
                    style="color: #FADC72" /> RXS +{{ eligibleTokens }}
            </div>
            <div v-if="offersPurchases">
                Offers In-Game Purchases
            </div>
            <div
                v-if="releaseDate"
                class="release-date">
                Release date: {{ releaseDate | customDate('MM/DD/YYYY') }}
            </div>

            <div
                v-if="isPurchased"
                class="purchased-status">
                <i class="fas fa-check" />
                Purchased
            </div>

            <div
                v-if="isUnavailable"
                class="unavailable-status">
                <i class="fas fa-ban" />
                Unavailable
            </div>
        </div>

        <div class="purchase-block__buttons-group padding-bottom-30 col-12">
            <Button
                v-if="isReleased && price"
                status="outline-success"
                :href="purchaseLink"
                iconHide
                size="xl"
                :shadow="false"
                @click="onClickPurchase">
                Proceed to Purchase
            </Button>

            <Button
                v-if="!price && isReleased"
                status="success"
                size="lg"
                icon="download"
                :href="purchaseLink"
                @click="onClickPurchase">
                Free Download
            </Button>

            <Button
                v-if="demoLink"
                iconHide
                icon="download"
                :href="demoLink">
                Download Demo
            </Button>

            <Button
                v-if="playLink"
                iconHide
                status="success"
                size="xl"
                icon="download"
                :href="playLink">
                Play Now
            </Button>

            <ButtonFav
                target="Wishlist"
                :active="inWishlist"
                class="mt-3"
                @click="$emit('addToWishlist')" />

            <ButtonFav
                target="Shortcuts"
                :active="inShortcut"
                activeIcon="link"
                unactiveIcon="unlink"
                class="mt-3"
                @click="$emit('addToShortcut')" />

            <ButtonFav
                target="Collection"
                :active="inShortcut"
                activeIcon="link"
                unactiveIcon="unlink"
                class="mt-3"
                @click="$emit('addToCollection')" />
        </div>
    </Block>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'ButtonFav': () => import('../../').then(m => m.ButtonFav),
        'Block': () => import('../../').then(m => m.Block),
        'Button': () => import('../../').then(m => m.Button),
        'AddCollectionPopup': () => import('../../').then(m => m.AddCollectionPopup)
    },
    props: {
        tags: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: 'Title'
        },
        price: {
            type: Number,
            default: 0
        },
        eligibleTokens: {
            type: Number,
            default: 0
        },
        releaseDate: {
            type: String,
            default: new Date()
        },
        offersPurchases: {
            type: Boolean,
            default: false
        },
        isUnavailable: {
            type: Boolean,
            default: false
        },
        isPurchased: {
            type: Boolean,
            default: false
        },
        isReleased: {
            type: Boolean,
            default: false
        },
        demoLink: {
            type: String,
            default: null
        },
        playLink: {
            type: String,
            default: null
        },
        inWishlist: {
            type: Boolean,
            default: false
        },
        inShortcut: {
            type: Boolean,
            default: false
        },
        purchaseLink: {
            type: String,
            default: null
        },
        fullReviewsLink: {
            type: String,
            default: null
        },
        resourceType: {
            type: String,
            default: null
        },
        resourceId: {
            type: Number,
            default: null
        },
        onClickPurchase: {
            type: Function,
            default: () => null
        }
    },
    data() {
        return {}
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .purchase-block {
        margin: 0;
    }
    .purchase-block__price{
        font-size: 38px;
        line-height: 38px;
        font-weight: 500;
        padding: 0;
        margin: 0;
        display: inline-block;
    }
    .purchase-block__tags{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: -5px -3px 20px;
        div{
            padding: 0px 7px;
            margin: 3px;
            font-size: 13px;
            border-radius: 5px;
            color: #1C2032;
            background: #FADC72;
            font-weight: bold;
            text-transform: capitalize;
        }
    }
    .purchase-block__info{
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        padding: 0;
        .release-date{
            font-size: 16px;
            margin-top: 15px;
        }
        .purchased-status{
            font-size: 20px;
            color: #43C981;
            margin-top: 15px;
            i{
                margin-right: 8px;
            }
        }
        .unavailable-status{
            font-size: 20px;
            color: #F75D5D;
            margin-top: 15px;
            i{
                margin-right: 8px;
            }
        }
    }
    .purchase-block__buttons-group{
        display: inline-flex;
        flex-direction: column;
        padding: 0;
        .button{
            width: auto;
            margin: 0 auto 15px 0;
            align-self: flex-start;
            justify-content: flex-start;
        }
        .wishlist-btn{
            color: #fff;
            opacity: .8;
            background: transparent;
            padding: 0;
            border: none;
            margin: 15px auto 0 0;
            width: auto;
            &:hover,
            &.is-in{
                text-decoration: none;
                opacity: 1;
                cursor: pointer;
                i{
                    color: #F75D5D;
                }
            }
            &:active,
            &:focus{
                outline: none;
                box-shadow: none;
            }
        }
    }
</style>
