<template>
    <div class="group-content">
        <div class="group-content__msgs">
            <ScrollableContent>
                <slot name="messages" />
            </ScrollableContent>
            <ChatAnswerField :user="currentUser" :sendMessage="sendMessage" />
        </div>
        <div class="chat__user-list">
            <slot name="users" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        // 'ChatUser': () => import('../../').then(m => m.ChatUser),
        'ChatAnswerField': () => import('../../').then(m => m.ChatAnswerField),
        'ScrollableContent': () => import('../../').then(m => m.ScrollableContent)
    },
    props: {
        currentUser: Object,
        sendMessage: Function
    },
    methods: { }
}
</script>

<style lang="scss" scoped>
    .group-content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .group-content__msgs{
        height: 100%;
        width: calc( 100% - 250px );
        padding: 10px 5px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .chat__user-list{
        width: 250px;
        padding: 20px 0 20px 10px;
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
</style>
