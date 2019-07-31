<template>
    <div class="video">
        <LoadingBarCircle v-if="showLoader" />
        <youtube
            v-if="youtube"
            :video-id="youtube"
            :player-vars="playerVars"
            :fitParent="true"
            :height="height"
            :width="width"
            :resize="true"
            class="youtube-video"
            @ready="isReady" />
        <Twitch
            v-else-if="twitch"
            :channel="twitch"
            :height="height"
            :width="width"
            class="twitch-video"
            @ready="isReady" />
        <LocalVideo
            v-else-if="src"
            :src="src"
            :height="height"
            :width="width"
            @ready="isReady" />
        <slot v-else />
    </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
    components: {
        'Twitch': () => import('../../').then(m => m.Twitch),
        'LocalVideo': () => import('./_local.vue').then(m => m.default),
        'LoadingBarCircle': () => import('../../').then(m => m.LoadingBarCircle)
    },
    props: {
        src: {
            type: String,
            default: null
        },
        youtube: {
            type: String,
            default: null
        },
        twitch: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: '450'
        },
        width: {
            type: String,
            default: '800'
        },
        poster: {
            type: String,
            default: null
        },
        videoType: {
            type: String,
            default: 'video/mp4'
        },
        controls: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            playerVars: {
                autoplay: 0
            },
            showLoader: true
        }
    },
    methods: {
        isReady() {
            console.log('ready')
            this.showLoader = false
        }
    }
}
</script>

<style lang="scss">
    .video{
        position: relative;
        display: inline-flex;
        max-width: 100%;
        .youtube-video,
        .twitch-video,
        video{
            max-width: 100%!important;
        }
        iframe{
            max-width: 100%;
        }
    }
</style>
