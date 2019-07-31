<template>
    <div class="private-content">
        <ScrollableContent>
            <slot />
        </ScrollableContent>
        <ChatAnswerField />
    </div>
</template>

<script>
export default {
    components: {
        'ChatAnswerField': () => import('../../').then(m => m.ChatAnswerField),
        'ScrollableContent': () => import('../../').then(m => m.ScrollableContent)
    }
}
</script>

<style lang="scss" scoped>
    .private-content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
