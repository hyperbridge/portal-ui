<template>
    <Block
        :title="title"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <slot />
    </Block>
</template>

<script>
export default {
    name: 'PromotionsList',
    components: {
        'Block': () => import('../../').then(m => m.Block),
        'PromotionItem': () => import('../../').then(m => m.PromotionItem)
    },
    props: ['title']
}
</script>

<style lang="scss" scoped>
    .block__content{
        padding: 0!important;
    }
</style>
