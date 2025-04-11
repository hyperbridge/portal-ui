<template>
    <div class="author">
        <Img class="author__img" :src="img" />
        {{ name }}
    </div>
</template>

<script>
export default {
    components: {
        'Img': () => import('../../').then(m => m.Img)
    },
    props: {
        img: {
            type: String,
            default: null,
            required: false
        },
        name: {
            type: String,
            default: null,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.author {
    display: flex;
    align-items: center;
    font-weight: bold;
    &__img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        border-radius: 100%;
    }
}
</style>


