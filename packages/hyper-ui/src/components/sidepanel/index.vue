<template>
    <div
        id="page-sidepanel"
        class="page-sidepanel invert text-right">
        <div class="page-sidepanel__content">
            <Swiper ref="slider">
                <SwiperSlide v-if="$store.state.application.signedIn">
                    <div class="item">
                        <h3>NOTIFICATION</h3>

                        <div class="slide-chooser">
                            <Button
                                v-if="$store.state.application.signedIn"
                                icon-hide
                                status="plain"
                                class="active"
                                @click="showSlide('notification')">
                                <i class="fa fa-bell" />
                            </Button>
                            <Button
                                v-if="$store.state.application.signedIn"
                                v-access="'message.read'"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('messages')">
                                <i class="fa fa-envelope" />
                            </Button>
                            <Button
                                v-if="$store.state.application.desktopMode"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('updates')">
                                <i class="fa fa-star" />
                            </Button>
                            <Button
                                v-if="navigationKey === 'store'"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('topLists')">
                                <i class="fa fa-trophy" />
                            </Button>
                        </div>

                        <div class="navigation">
                            <div v-if="$store.state.application.account.notifications.length > 0">
                                <Notification
                                    v-for="(notif, index) in $store.state.application.account.notifications"
                                    :key="`${notif.title}index`"
                                    :notification="notif"
                                    @showPopup="$store.commit('application/showNotification', notif)"
                                    @close="$store.state.application.account.notifications.splice(index, 1)" />
                            </div>
                            <div v-else>
                                All clear. Good work!
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    v-if="$store.state.application.signedIn"
                    v-access="'message.read'">
                    <div class="item">
                        <h3>MESSAGES</h3>

                        <div class="slide-chooser">
                            <Button
                                v-if="$store.state.application.signedIn"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('notification')">
                                <i class="fa fa-bell" />
                            </Button>
                            <Button
                                v-if="$store.state.application.signedIn"
                                status="plain"
                                icon-hide
                                class="active"
                                @click="showSlide('messages')">
                                <i class="fa fa-envelope" />
                            </Button>
                            <Button
                                v-if="$store.state.application.desktopMode"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('updates')">
                                <i class="fa fa-star" />
                            </Button>
                            <Button
                                v-if="navigationKey === 'store'"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('topLists')">
                                <i class="fa fa-trophy" />
                            </Button>
                        </div>

                        <div class="navigation">
                            <div class="messages-action">
                                <Button
                                    status="info"
                                    icon="angle-double-right"
                                    size="sm">
                                    Quick Send
                                </Button>
                                <Button
                                    status="info"
                                    icon="envelope"
                                    size="sm">
                                    View All
                                </Button>
                            </div>
                            <div class="message-list">
                                <Message
                                    v-for="(msg, index) in messages"
                                    :key="index"
                                    :msg="msg" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide v-if="$store.state.application.desktopMode">
                    <div class="item">
                        <h3>UPDATES</h3>

                        <div class="slide-chooser">
                            <Button
                                v-if="$store.state.application.signedIn"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('notification')">
                                <i class="fa fa-bell" />
                            </Button>
                            <Button
                                v-if="$store.state.application.signedIn"
                                v-access="'message.read'"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('messages')">
                                <i class="fa fa-envelope" />
                            </Button>
                            <Button
                                v-if="$store.state.application.desktopMode"
                                status="plain"
                                icon-hide
                                class="active"
                                @click="showSlide('updates')">
                                <i class="fa fa-star" />
                            </Button>
                            <Button
                                v-if="navigationKey === 'store'"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('topLists')">
                                <i class="fa fa-trophy" />
                            </Button>
                        </div>

                        <div class="navigation">
                            <ul>
                                <template v-for="(update, index) in updates">
                                    <li
                                        :key="index"
                                        class="mb-4"
                                        style="cursor: pointer"
                                        @click="showUpdateModal(update)">
                                        <div class="h5 font-weight-bold mb-1 pb-0">
                                            {{ update.title }}
                                        </div>
                                        <div class="text">
                                            {{ update.description }}
                                        </div>
                                    </li>
                                </template>
                                <li>
                                    <br>
                                    <button
                                        class="btn btn-outline-info btn-sm"
                                        style="color: #fff;border: 2px solid #fff;">
                                        <span class="icon fa fa-sync" /> Relaunch
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide v-if="navigationKey === 'store'">
                    <div class="item">
                        <h3>TOP LISTS</h3>

                        <div class="slide-chooser">
                            <Button
                                v-if="$store.state.application.signedIn"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('notification')">
                                <i class="fa fa-bell" />
                            </Button>
                            <Button
                                v-if="$store.state.application.signedIn"
                                v-access="'message.read'"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('messages')">
                                <i class="fa fa-envelope" />
                            </Button>
                            <Button
                                v-if="$store.state.application.desktopMode"
                                status="plain"
                                icon-hide
                                style="box-shadow: none"
                                @click="showSlide('updates')">
                                <i class="fa fa-star" />
                            </Button>
                            <Button
                                status="plain"
                                icon-hide
                                class="active"
                                @click="showSlide('topLists')">
                                <i class="fa fa-trophy" />
                            </Button>
                        </div>

                        <div class="navigation">
                            <ul>
                                <li class="title">
                                    TOP 5
                                </li>
                                <li
                                    v-for="(product, index) in $store.state.marketplace.top5"
                                    v-if="index < 5"
                                    :key="index">
                                    <Button
                                        status="none"
                                        :to="`/product/${product.id}`">
                                        <span class="text">{{ product.name }}</span>
                                    </Button>
                                </li>
                                <li class="more">
                                    <Button
                                        status="none"
                                        to="/search">
                                        <span class="text">MORE...</span>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div class="navigation">
                            <ul>
                                <li class="title">
                                    TOP FREE
                                </li>
                                <li
                                    v-for="(product, index) in $store.state.marketplace.topFree.slice(0, 5)"
                                    :key="index">
                                    <Button
                                        status="none"
                                        :to="`/product/${product.id}`">
                                        <span class="text">{{ product.name }}</span>
                                    </Button>
                                </li>
                                <li class="more">
                                    <Button
                                        status="none"
                                        to="/search">
                                        <span class="text">MORE...</span>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div
            class="page-sidepanel__button page-sidepanel__button--lower"
            data-action="sidepanel-hide">
            <div />
        </div>


        <BasicPopup
            :activated="showModal"
            class="text-left"
            @close="hideUpdateModal">
            <div
                slot="header"
                class="d-flex flex-column">
                <div class="h4 m-0 p-0">
                    {{ currentUpdate.title }}
                </div>
                <div>
                    {{ currentUpdate.version }}
                </div>
            </div>
            <div
                slot="body"
                v-html="currentUpdate.content" />
            <small slot="footer">
                Missed an update? <Button
                    status="plain"
                    to="/updates">Check our previous updates hButtonbutton>
            </small>
        </BasicPopup>
    </div>
</template>

<script>

import Vue from 'vue'
import HeadingBar from '@/components/heading-bar/simple-colored'
import DottedList from '@/components/list/dots'

export default {
    components: {
        'Notification': () => import('../../').then(m => m.Notification),
        'Message': () => import('../../').then(m => m.Message),
        'BasicPopup': () => import('../../').then(m => m.BasicPopup),
        'DottedList': () => import('../../').then(m => m.DottedList),
        'HeadingBarWithSimpleColor': () => import('../../').then(m => m.HeadingBarWithSimpleColor)
    },
    props: {
        navigationKey: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            errors: [],
            updateExpanded: null,
            updates: [],
            entries: [],
            currentUpdate: {},
            showModal: false
        }
    },
    computed: {
        swiper() {
            return this.$refs.slider.swiper
        },
        activeProfile() {
            return this.$store.state.application.activeProfile
        },
        messages() {
            return this.activeProfile && this.activeProfile.messages
        }
    },
    async created() {
        if (this.navigationKey === 'store' && this.$store.state.application.desktopMode) {
            const sheetUrl = 'https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json'

            const res = await this.$axios({
                method: 'get',
                url: sheetUrl
            }).catch(err => {
                this.errors.push(`Could not contact update service. Please contact support with this error: ${JSON.stringify(err)}`)
            })

            this.entries = res.data.feed.entry

            for (const entry of this.entries) {
                let el = Vue.compile(`<div>${entry.gsx$content.$t}</div>`)
                el = new Vue({
                    components: {
                        'HeadingBarWithSimpleColor': HeadingBar,
                        'DottedList': DottedList
                    },
                    render: el.render,
                    staticRenderFns: el.staticRenderFns
                }).$mount()

                this.updates.push({
                    version: entry.gsx$version.$t,
                    title: entry.gsx$title.$t,
                    description: entry.gsx$description.$t,
                    content: el.$el.innerHTML // .replace(/\n/g, '<br />')
                })
            }
        }
    },
    methods: {
        showSlide(sl) {
            switch (sl) {
            case 'notification':
                this.swiper.slideTo(0, 1000, false)
                break
            case 'messages':
                this.$el.classList.add('active')
                this.swiper.slideTo(1, 1000, false)
                break
            case 'updates':
                this.$el.classList.add('active')
                this.swiper.slideTo(2, 1000, false)
                break
            case 'topLists':
                this.$el.classList.add('active')
                this.swiper.slideTo(3, 1000, false)
                break
            }
        },
        showUpdateModal(update) {
            this.currentUpdate = update
            this.showModal = true
        },
        hideUpdateModal() {
            this.showModal = false
            this.currentUpdate = []
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-sidepanel {
        z-index: 1;
    }

    .navigation {
        margin-bottom: 30px;
    }

    .navigation .text {
        float: right;
    }
</style>
