<template>
    <Popup
        ref="modal"
        :activated="activated"
        type="custom"
        width="850"
        @close="$emit('close')">
        <div
            slot="customClose"
            hidden />
        <div
            slot="customContent"
            class="welcome-modal">
            <Tabs :tabNames="['Welcome']">
                <Tab :tabId="1">
                    <div>
                        <WelcomeBox :prompt="true" />
                    </div>
                    <div
                        slot="footer"
                        class="d-flex align-items-center justify-content-end">
                        <div>
                            <Button @click="$emit('close')">
                                Close
                            </Button>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </Popup>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Popup': () => import('../../').then(m => m.Popup),
        'WelcomeBox': () => import('../../').then(m => m.WelcomeBox)
    },
    props: ['activated'],
    data() {
        return {
        }
    },
    methods: {
        download() {
        }
    }
}
</script>

<style lang="scss" scoped>
    .Popup__content {
        background: transparent;
        color: #fff;
    }
</style>
