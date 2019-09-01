<template>
    <CustomModal
        v-if="activated"
        title="Sign Up"
        @close="$store.state.application.activeModal = null">
        <div
            slot="body"
            class=""
            style="width: 100%">
            <Loading
                :enabled="loading"
                size="lg" />

            <div v-if="!loading">
                <p hidden>
                    To manage your product listing, you'll need to verify your connection with this company. <br>
                    What you'll get with verification:
                    <br><br>
                    <i class="fas fa-check" /> Allow new customers to find you on BlockHub Search<br>
                    <i class="fas fa-check" /> Promote your business with bounties<br>
                    <i class="fas fa-check" /> Track product analytics to understand your customers<br>
                    <i class="fas fa-check" /> Respond to customer reviews<br>
                    <i class="fas fa-check" /> And much more<br>
                    <br>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input
                                v-model="email"
                                type="text"
                                class="form-control"
                                placeholder="E-mail"
                                name="email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>Password</label>
                            <input
                                v-model="password"
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                name="password"
                                @keyup.enter="next()">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Repeat Password</label>
                            <input
                                v-model="repeatPassword"
                                type="password"
                                class="form-control"
                                placeholder="Repeat Password"
                                name="repeatPassword"
                                @keyup.enter="next()">
                        </div>
                    </div>
                </div>
                <div
                    class="row"
                    hidden>
                    <div class="col">
                        <Toggle
                            v-model="agreement"
                            labelPosition="right"
                            :customLabel="true">
                            <template slot="label">
                                I agree to the
                                <Button
                                    status="plain"
                                    @click="terms = true">
                                    terms
                                </Button> and
                                <Button
                                    status="plain"
                                    @click="privacy = true">
                                    privacy policy
                                </Button>
                            </template>
                        </Toggle>
                    </div>
                </div>

                <p
                    v-if="errors.length"
                    class="errors">
                    <br>
                    <strong>Please correct the following error(s):</strong>
                    <ul>
                        <li
                            v-for="error in errors"
                            :key="error">
                            {{ error }}
                        </li>
                    </ul>
                </p>
            </div>
        </div>

        <div
            v-if="!loading"
            slot="footer"
            class="text-right w-100">
            <Button
                status="plain"
                style="float: left"
                @click="$store.commit('application/activeModal', 'login')">
                Already registered? Sign In
            </Button>
            <Button
                size="md"
                @click="next()">
                Continue
            </Button>
        </div>

        <TermsPopup
            title="Terms"
            :activated="terms"
            width="800"
            @close="terms = false">
            <div
                slot="header"
                class="h4">
                Terms and Conditions for BlockHub
            </div>
            <div slot="body">
                <div class="termsBlock">
                    <TermsBlock />
                </div>
            </div>
        </TermsPopup>

        <TermsPopup
            title="Privacy"
            :activated="privacy"
            width="800"
            @close="privacy = false">
            <div
                slot="header"
                class="h4">
                Privacy Policy for BlockHub
            </div>
            <div slot="body">
                <div class="termsBlock">
                    <PrivacyBlock />
                </div>
            </div>
        </TermsPopup>
    </CustomModal>
</template>

<script>
export default {
    components: {
        'TermsPopup': () => import('../../').then(m => m.TermsPopup),
        'CustomModal': () => import('../../').then(m => m.CustomModal),
        'TermsBlock': () => import('../../').then(m => m.TermsBlock),
        'PrivacyBlock': () => import('../../').then(m => m.PrivacyBlock)
    },
    props: ['activated'],
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            repeatPassword: null,
            loading: false,
            agreement: null,
            terms: null,
            privacy: null
        }
    },
    methods: {
        next() {
            const { email, password } = this
            this.errors = []
            this.$store.commit('accounts/clearCreateError')

            this.loading = true

            if (email &&
                password) {
                // Automatically log the user in after successful signup.
                this.$store.dispatch('accounts/create', { email, password })
                    .then(res => {
                        this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password })
                        this.$store.commit('application/activeModal', null)
                        this.loading = false
                    })
                // .then(response => this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password }))
                // Just use the returned error instead of mapping it from the store.
                    .catch(error => {
                        // Convert the error to a plain object and add a message.
                        const type = error.errorType
                        error = Object.assign({}, error)
                        error.message = type === 'uniqueViolated'
                            ? 'That email address is unavailable.'
                            : 'An error prevented signup.'
                        this.errors = [error.message]
                        
                        this.loading = false
                    })

                return
            }

            this.errors.push('Missing fields.')
        }
    }
}
</script>

<style lang="scss" scoped>
    .Popup__content {
        background: transparent;
        color: #fff;
        text-align: left;
    }
</style>
