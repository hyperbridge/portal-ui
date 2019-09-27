<template>
    <Popup
        ref="modal"
        :activated="activated"
        type="custom"
        width="550"
        @close="$emit('close')">
        <div
            slot="customClose"
            hidden />
        <div
            slot="customContent"
            class="download-modal">
            <Tabs :tabNames="['Download']">
                <Tab :tabId="1">
                    <div>
                        <DownloadBlock :showPreview="false" />
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
        'DownloadBlock': () => import('../../').then(m => m.DownloadBlock)
    },
    props: ['activated'],
    data() {
        return {
        }
    },
    methods: {
        download() {
            this.$store.dispatch('application/downloadAccount', { password: this.$refs.password })
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
