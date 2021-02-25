<template>
    <Popup
        title="Privacy policy"
        :activated="activated"
        width="800"
        @close="$emit('close')">
        <div class="scroll_block">
            <PrivacyBlock />
        </div>
    </Popup>
</template>

<script>
export default {
    components: {
        'Popup': () => import('../../').then(m => m.Popup),
        'PrivacyBlock': () => import('../../').then(m => m.PrivacyBlock)
    },
    props: ['activated']
}
</script>

<style lang="scss" scoped>
</style>
