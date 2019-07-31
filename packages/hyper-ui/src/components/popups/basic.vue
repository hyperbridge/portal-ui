<template>
    <transition
        name="fade"
        :duration="100">
        <div
            v-if="activated"
            class="basiPopup"
            @click.self.prevent="$emit('close')">
            <div
                class="basiPopup__item"
                :style="{ 'width': + width + 'px'}">
                <div class="position-relative">
                    <div class="basiPopup__content">
                        <div
                            class="basiPopup__close"
                            @click="$emit('close')">
                            <i class="fas fa-times" />
                        </div>
                        <div
                            v-if="$slots.header"
                            class="basiPopup__header">
                            <slot name="header" />
                        </div>
                        <div
                            v-if="$slots.body"
                            class="basiPopup__body"
                            :class="{'margin-top-20' : $slots.header, 'margin-bottom-20' : $slots.footer}">
                            <slot name="body" />
                        </div>
                        <div
                            v-if="$slots.footer"
                            class="basiPopup__footer">
                            <slot name="footer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        activated: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '500'
        }
    }
}
</script>

<style lang="scss" scoped>
    .basiPopup {
        display: flex;
        width: 100%;
        height: 100vh;
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.7);
    }

    .basiPopup__close {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: .7;
        -webkit-transition: 0.2s ease-out;
        -moz-transition:  0.2s ease-out;
        transition:  0.2s ease-out;
        font-size: 22px;
        z-index: 999;
        img {
            width: 24px;
        }
        &:hover {
            opacity: 1;
            cursor: pointer;
            -webkit-transform: rotateZ(180deg);
            -moz-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
    }

    .basiPopup__item {
        display: flex;
        position: relative;
        z-index: 30;
        flex-direction: column;
        width: 400px;
        max-width: 90%;
        color: #fff;
    }

    .basiPopup__content {
        background: #1C2032;
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }

    .basiPopup__header{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        width: 100%;
        padding-right: 100px;
        display: block;
        color: #fff;
        h2,h3,h4,h5,
        .h2,.h3,.h4,.h5{
            color: #fff;
            padding: 0;
            margin: 0;
        }
    }
    .basiPopup__body{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: auto;
        color: #fff;
        max-height: 60vh;
        /*margin: 20px 0;*/
    }
    .basiPopup__footer{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 30px;
        flex-wrap: wrap;
        .Button{
            &.color-red{
                color: #F75D5D;
                &:hover{
                    color: #cb4d4d;
                }
            }
        }
    }

</style>
