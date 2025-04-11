<template>
    <div class="msg-form">
        <Input class="w-100" />
    </div>
</template>

<script>
export default {
    components: {
        'Input': () => import('../../').then(m => m.Input)
    }
}
</script>

<style lang="scss" scoped>
    .msg-form{
        width: 100%;
    }
</style>
