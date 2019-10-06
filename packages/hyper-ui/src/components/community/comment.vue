<template>
    <div>
        <div
            class="community-item__comment"
            :class="{ 'is-reply': reply }">
            <ButtonArrows
                v-if="rate"
                size="xl"
                colored>
                <span
                    :class="{
                        'up': rate > 400,
                        'down': rate < 0
                    }">{{ rate }}</span>
            </ButtonArrows>
            <div
                class="comment-container"
                :class="{ 'w-100' : !rate }">
                <DropdownMenu
                    dropPosition="right"
                    style="right: 5px; top: 10px;" />
                <div class="comment-content">
                    <div v-if="author" class="user-info">
                        <Img :src="author.img" />
                        <div>
                            <h6>{{ author.name }}</h6>
                            <span class="time">{{ date | timeAgoShort }}</span>
                        </div>
                    </div>
                    <div class="text">
                        {{ text }}
                    </div>
                </div>
                <div class="sub-comments-list">
                    <slot />
                </div>
            </div>
        </div>

        <CommunityReply
            v-if="canReply"
            class="margin-bottom-10"
            @replyMode="reply = $event" />
    </div>
</template>

<script>

export default {
    name: 'Comment',
    components: {
        'DropdownMenu': () => import('../../').then(m => m.Dropdown4),
        'CommunityReply': () => import('../../').then(m => m.ProductCommunityReply),
        'ButtonArrows': () => import('../../').then(m => m.ButtonArrows)
    },
    props: {
        rate: Number,
        author: Object,
        date: String,
        text: String,
        canReply: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            reply: false
        }
    }
}
</script>


<style lang="scss" scoped>
.community-item__comment {
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    padding: 0 10px;
    margin: 10px 0;
    transition: background-color .3s ease;
    color: #fff;
    .comment-container {
        width: calc(100% - 65px);
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .4);
        position: relative;
        @media (max-width: 767px) {
            width: 100%;
            margin-left: 15px;
            flex-direction: column;
        }
        .comment-content{
            padding: 15px 20px;
            display: flex;
            /*justify-content: space-between;*/
            @media (max-width: 767px) {
                flex-direction: column;
            }
            .user-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: auto;
                max-width: 30%;
                margin-right: 20px;
                img {
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                    border-radius: 100%;
                    margin-right: 10px;
                }
                h6 {
                    padding: 0;
                    margin: 0;
                    font-weight: bold;
                    font-size: 14px;
                    color: #fff;
                }
                .time {
                    float: right;
                }
                @media (max-width: 767px) {
                    margin-bottom: 10px;
                }
            }
            .text {
                width: auto;
                font-size: 14px;
                line-height: 17px;
            }
        }
        .sub-comments-list {
            border-top: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .up {
        color: #43C981;
    }
    .down {
        color: #F75D5D;
    }
}
</style>

