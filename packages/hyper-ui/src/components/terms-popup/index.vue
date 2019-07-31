<template>
    <TermsPopup
        title="Terms"
        :activated="activated"
        width="800"
        @close="$emit('close')">
        <div
            slot="header"
            class="h4">
            Terms of Service Agreement
        </div>
        <div slot="body">
            <div class="termsBlock">
                <TermsBlock />
            </div>
        </div>
    </TermsPopup>
</template>

<script>
export default {
    components: {
        'TermsPopup': () => import('../../').then(m => m.TermsPopup),
        'TermsBlock': () => import('../../').then(m => m.TermsBlock)
    },
    props: ['activated']
}
</script>

<style lang="scss" scoped>
</style>
