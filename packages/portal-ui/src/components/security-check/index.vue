<template>
    <Block
        title="Security check"
        noGutter
        :bgColor="false">
        <div class="security-check">
            <p>
                Please help us keep this account secure
                with a quick security check.
            </p>
            <div class="invert">
                <div class="form-group">
                    <select
                        v-model="confirmType"
                        class="form-control"
                        :disabled="codeIsSend"
                        @change=" value = '' ">
                        <option
                            value=""
                            selected>
                            Choose confirm type
                        </option>
                        <option value="email">
                            Email
                        </option>
                        <option value="phone">
                            Phone
                        </option>
                    </select>
                </div>
            </div>

            <template v-if="confirmType == 'email' && !codeIsSend">
                <div class="invert">
                    <div class="form-group">
                        <Input
                            v-model="value"
                            type="email"
                            class="form-control"
                            placeholder="Your email" />
                    </div>
                </div>
                <Button
                    status="second-info"
                    @click="sendCode">
                    Send Code
                </Button>
            </template>

            <template v-if="confirmType == 'phone' && !codeIsSend">
                <div class="invert">
                    <div class="form-group">
                        <Input
                            v-model="value"
                            type="number"
                            class="form-control"
                            placeholder="Your phone number" />
                    </div>
                </div>
                <Button
                    status="second-info"
                    @click="sendCode">
                    Send Code
                </Button>
            </template>

            <template v-if="codeIsSend">
                <p>
                    We have sent a security code to your Portal account {{ confirmType == 'email' ? 'email address' : 'phone number' }}.
                    Enter the code below
                </p>
                <div class="invert">
                    <div class="form-group">
                        <Input
                            v-model="code"
                            type="text"
                            class="form-control"
                            placeholder="Security Code"
                            :error="wrongCode" />
                        <small
                            v-if="wrongCode"
                            style="color: red!important;">
                            Wrong code
                        </small>
                    </div>
                </div>
                <Button
                    status="second-info"
                    @click="$emit('codeSubmit', code)">
                    Submit
                </Button>
                <Button
                    status="opacity-info"
                    class="mt-3"
                    @click="$emit('codeCancel')">
                    Cancel
                </Button>
                <div class="d-flex justify-content-between mt-3">
                    <Button
                        status="plain"
                        size="sm"
                        class="p-0"
                        @click="$emit('reset')">
                        Can't login?
                    </Button>
                    <Button
                        status="plain"
                        size="sm"
                        class="p-0"
                        @click="$emit('login')">
                        Reset Code
                    </Button>
                </div>
            </template>
        </div>
    </Block>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
    },
    props: {
        codeIsSend: {
            type: Boolean,
            default: false
        },
        wrongCode: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            confirmType: '',
            getCode: false,
            value: '',
            code: ''

        }
    },
    methods: {
        sendCode() {
            this.$emit('sendCode', this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    .security-check{
        display: flex;
        flex-direction: column;
    }
</style>
