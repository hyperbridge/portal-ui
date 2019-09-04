<template>
    <div class="chat-friends-suggestion">
        <div
            class="chat-friends-suggestion__btn"
            @click="toggleList">
            <i class="fas fa-user-plus" />
            Suggested friends
            <i
                class="fas mr-2"
                :class="[ open ? 'fa-angle-down' : 'fa-angle-right' ]" />
        </div>
        <div
            v-if="open"
            class="chat-friends-suggestion__list">
            <ChatUser
                v-for="item in list"
                :key="item.name"
                :avatar="item.avatar"
                :name="item.name"
                :game="item.game">
                <div>
                    <Button
                        status="opacity-info"
                        size="xs">
                        Add
                    </Button>
                    <Button
                        status="plain"
                        size="xs">
                        <i class="fas fa-times" />
                    </Button>
                </div>
            </ChatUser>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'ChatUser': () => import('../../').then(m => m.ChatUser),
        'Button': () => import('../../').then(m => m.Button),
    },
    props: {
        list: [Array, Object]
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleList() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat-friends-suggestion{
        display: flex;
        flex-direction: column;
    }
    .chat-friends-suggestion__btn{
        padding: 5px 10px;
        display: flex;
        align-items: center;
        color: #fff;
        background: #3d3d5e;
        font-size: 14px;
        flex-basis: 30px;
        flex-grow: 0;
        flex-shrink: 0;
        i{
            &:first-child{
                margin-right: 8px;
                color: #4c7be5;
            }
            &:last-child{
                margin-left: auto;
            }
        }
    }
    .chat-friends-suggestion__list{
        padding: 10px;
        background: #2a2944;
        max-height: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        color: #fff;
    }
</style>
