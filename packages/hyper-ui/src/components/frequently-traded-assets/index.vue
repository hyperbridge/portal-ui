<template>
    <Block
        title="Traded Assets"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <div v-if="items.length > 0">
            <div class="traded-assets__filter">
                <slot name="filter" />
            </div>
            <ul class="traded-assets__list">
                <li
                    v-for="(item, index) in items"
                    :key="index"
                    class="traded-assets__item">
                    <Button
                        status="none"
                        :to="`/asset/${item.id}`">
                        <Img :src="item.image_data" />
                    </Button>
                </li>
            </ul>
            <Button
                status="outline-white"
                :to="assetsPath">
                Go To Assets
            </Button>
        </div>
        <div v-else>
            <h4>No frequently traded assets yet.</h4>
        </div>
    </Block>
</template>

<script>
export default {
    name: 'FrequentlyTradedAssets',
    components: {
        'Block': () => import('../../').then(m => m.Block),
        'Button': () => import('../../').then(m => m.Button),
        'Img': () => import('../../').then(m => m.Img),
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        assetsPath: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>

    .traded-assets__list {
        padding: 0;
        display: block;
        width: 100%;
        overflow: hidden;
        margin: 10px -10px;
    }

    .traded-assets__item {
        list-style: none;
        display: inline-block;
        float: left;
        width: 25%;
        padding: 10px;
        img {
            /*height: 60px;*/
            width: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
