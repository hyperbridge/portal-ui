<template>
    <CustomModal
        v-if="activated"
        title="Sign In"
        @close="$store.state.application.activeModal = null">
        <div
            slot="body"
            class=""
            style="width: 100%">
            <Loading
                :enabled="loading"
                size="lg" />

            <div v-if="!loading">
                <div class="row">
                    <div
                        class="col-12"
                        style="text-align: center">
                        <h2>Sign in to Portal</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <Button
                            size="xl"
                            centered
                            class="mb-3"
                            style="display: block"
                            @click="socialLogin('google')">
                            Sign in with Google
                        </Button>
                        <Button
                            size="xl"
                            centered
                            class="mb-3"
                            style="display: block"
                            @click="socialLogin('github')">
                            Sign in with Github
                        </Button>
                    </div>
                </div>
                <div
                    v-access="`socialSignIn`"
                    class="row">
                    <div class="col-12">
                        <Button
                            status="second-info"
                            size="xl"
                            centered
                            class="mb-3"
                            style="display: block"
                            @click="socialLogin('twitter')">
                            Sign in with Twitter
                        </Button>
                        <Button
                            status="second-info"
                            size="xl"
                            centered
                            class="mb-3"
                            style="display: block"
                            @click="socialLogin('facebook')">
                            Sign in with Facebook
                        </Button>
                    </div>
                </div>
                <div
                    class="row mb-3">
                    <div class="col-12">
                        <HeadingBarWithSimpleColor
                            colorCode="#fff"
                            textAlign="center">
                            or sign in with email
                        </HeadingBarWithSimpleColor>
                    </div>
                </div>
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
                                @keyup.enter="next">
                        </div>
                    </div>
                </div>

                <div
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
                </div>
            </div>
        </div>

        <div
            v-if="!loading"
            slot="footer"
            class="text-right w-100">
            <Button
                status="plain"
                style="float: left; margin-right: 20px"
                @click="$store.commit('application/activeModal', 'register')">
                Don't have an account? Sign Up
            </Button>
            <Button
                size="md"
                @click="next">
                Sign In
            </Button>
        </div>
    </CustomModal>
</template>

<script>
export default {
    components: {
        'Icon': () => import('../../').then(m => m.Icon),
        'Popup': () => import('../../').then(m => m.Popup),
        'TermsPopup': () => import('../../').then(m => m.TermsPopup),
        'CustomModal': () => import('../../').then(m => m.CustomModal),
        'HeadingBarWithSimpleColor': () => import('../../').then(m => m.HeadingBarWithSimpleColor),
        'Button': () => import('../../').then(m => m.Button),
        'TermsBlock': () => import('../../').then(m => m.TermsBlock),
        'PrivacyBlock': () => import('../../').then(m => m.PrivacyBlock),
        'Loading': () => import('../../').then(m => m.Loading),
    },
    props: ['activated'],
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            loading: false,
        }
    },
    methods: {
        async next() {
            const { email, password } = this
            this.errors = []
            this.$store.commit('auth/clearAuthenticateError')
            this.loading = true

            if (!email ||
                !password) {
                this.errors.push('Missing fields.')
                return
            }

            const res = await this.$store.dispatch('application/login', { email, password })
                // Just use the returned error instead of mapping it from the store.
                .catch(error => {
                    console.warn(error)

                    // Convert the error to a plain object and add a message.
                    const type = error.className
                    error = Object.assign({}, error)
                    error.message = type === 'not-authenticated'
                        ? 'Incorrect email or password.'
                        : 'An error prevented login.'
                    this.errors = [error.message]

                    this.loading = false
                })

            if (!this.$store.state.application.signedIn) return

            this.$store.commit('application/activeModal', null)
            this.loading = false

            if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect)
            }

            this.errors.push('Missing fields.')
        },
        async socialSigin() {
            const { email, password } = this
            this.errors = []
            this.$store.commit('auth/clearAuthenticateError')
            this.loading = true

            if (!email ||
                !password) {
                this.errors.push('Missing fields.')
                return
            }

            await this.$store.dispatch('application/login', { email, password })
                // Just use the returned error instead of mapping it from the store.
                .catch(error => {
                    console.warn(error)

                    // Convert the error to a plain object and add a message.
                    const type = error.className
                    error = Object.assign({}, error)
                    if(type === 'not-authenticated'){
                        this.socialSignup()
                    } else {
                        error.message = 'An error prevented login.'
                    }
                    this.errors = [error.message]
                    this.loading = false
                })

            this.$store.commit('application/activeModal', null)
            this.loading = false

            if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect)
            }

            this.errors.push('Missing fields.')
        },
        async socialSignup() {
            console.log('socialSignup')
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
                        this.$store.commit('application/activateModal', null)
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
        },
        socialLogin(social) {
            this.$hello.init({
                google: process.env.GOOGLE_CLIENT_ID,
                github: process.env.GITHUB_CLIENT_ID
            }, {
                redirect_uri: process.env.SOCIAL_LOGIN_REDIRECT_URI
            }, {
                oauth_proxy: process.env.OAUTH_PROXY
            })

            this.$hello(social).login({
                scope: ['email']
            })

            this.$hello.on('auth.login', async (auth) => {
                const socialToken = auth.authResponse.access_token
                const userInfo = await this.$hello(auth.network).api('me')

                const userId = userInfo.GOOGLE_CLIENT_ID
                this.email = auth.network == 'github' ? `${userInfo.login}.com` : userInfo.email
                this.password = 'socialLogin'
                this.socialSigin()
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .popup__content {
        background: transparent;
        color: #fff;
        text-align: left;
    }
</style>
