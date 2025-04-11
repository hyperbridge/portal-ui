<template>
    <div class="landing-feature-item">
        <a
            v-if="link"
            :href="link">
            <Img
                :src="img"
                :alt="title" />
        </a>
        <Img
            v-else
            :src="img"
            :alt="title" />
        <LandingBlockTitle fontSize="18">
            <a
                v-if="link"
                :href="link">
                {{ title }}
            </a>
            <template v-else>
                {{ title }}
            </template>
        </LandingBlockTitle>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LandingFeatureItem',
    components: {
        'LandingBlockTitle': () => import('../../').then(m => m.LandingBlockTitle)
    },
    props: {
        img: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        }
    }

}
</script>

<style lang="scss" scoped>
    .landing-feature-item{
        color: #fff;
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 15px;
        }
    }
</style>
