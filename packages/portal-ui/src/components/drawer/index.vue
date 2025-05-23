<template>
    <div>
        <div
            id="fixed-panel"
            class="fixed-panel invert">
            <div class="fixed-panel__content scroll">
                <template v-if="developerMode">
                    <h5 v-access="'realm.read'">
                        Your Realms
                    </h5>

                    <Button
                        v-for="(realm, index) in realms"
                        :key="`realm${realm.id}`"
                        v-access="'realm.read'"
                        status="none"
                        :to="`/realm/${realm.id}`">
                        <span class="icon icon-letter-circle">{{ realm.name && realm.name.slice(0) }}</span>
                        <span class="text">{{ realm.name }}</span>
                    </Button>

                    <Button
                        v-access="'realm.read'"
                        status="none"
                        to="/profile/1/realms">
                        See More...
                    </Button>

                    <hr v-access="'realm.read'">

                    <h5 v-if="developerMode && products.length">
                        Your Products
                    </h5>

                    <Button
                        v-for="(product) in products"
                        :key="`product${product.id}`"
                        status="none"
                        :to="`/product/${product.id}`">
                        <span class="icon icon-letter-circle">{{ product.name.slice(0, 1) }}</span>
                        <span class="text">{{ product.name }}</span>
                    </Button>

                    <Button
                        v-if="developerMode && products.length > 3"
                        status="none"
                        to="/business/products">
                        See More...
                    </Button>

                    <hr v-if="developerMode && products.length">

                    <h5><i class="fas fa-code" /> Developer</h5>

                    <Button
                        status="none"
                        to="/business">
                        <span class="icon fas fa-list-alt" />
                        <span class="text">My Content</span>
                    </Button>
                    <Button
                        v-access="'payments'"
                        status="none"
                        to="/business/developer/payment">
                        <span class="icon fas fa-info-circle" />
                        <span class="text">Payment Settings</span>
                    </Button>
                    <Button
                        v-access="'realm.read'"
                        status="none"
                        to="/business/realm/new">
                        <span class="icon fa fa-plus" />
                        <span class="text">New Realm</span>
                    </Button>
                    <Button
                        status="none"
                        to="/business/product/new">
                        <span class="icon fa fa-plus" />
                        <span class="text">New Game</span>
                    </Button>
                    <Button
                        status="none"
                        to="/business/project/new">
                        <span class="icon fa fa-plus" />
                        <span class="text">New Crowdfund</span>
                    </Button>

                    <hr>
                </template>

                <div v-if="signedIn">
                    <Button
                        status="plain"
                        tag="button"
                        to="/account"
                        class="text-left"
                        size="md"
                        icon="user">
                        Account
                    </Button>
                    <Button
                        status="plain"
                        tag="button"
                        to="/account/profiles"
                        class="text-left"
                        size="md"
                        icon="id-card">
                        Profiles
                    </Button>
                    <Button
                        v-access="'wallet.read'"
                        status="plain"
                        tag="button"
                        to="/account/wallets"
                        class="text-left"
                        size="md"
                        icon="credit-card">
                        Wallets
                    </Button>

                    <hr>

                    <Button
                        status="plain"
                        tag="button"
                        to="/profile/1"
                        class="text-left"
                        size="md"
                        icon="user">
                        Current Profile
                    </Button>
                    <Button
                        status="plain"
                        tag="button"
                        to="/settings/activity"
                        class="text-left"
                        size="md"
                        icon="list-alt">
                        Activity Log
                    </Button>
                    <Button
                        v-access="'contact'"
                        status="plain"
                        tag="button"
                        to="/profile/1/contacts"
                        class="text-left"
                        size="md"
                        icon="users">
                        Contacts
                    </Button>

                    <hr>

                    <Button
                        status="plain"
                        to="/settings"
                        class="text-left"
                        size="md"
                        tag="button"
                        icon="cog">
                        Settings
                    </Button>

                    <Button
                        status="plain"
                        tag="button"
                        to="/account/signout"
                        class="text-left"
                        size="md"
                        icon="sign-out-alt">
                        Sign Out
                    </Button>

                    <hr>
                </div>

                <Button
                    status="plain"
                    to="/sitemap"
                    tag="button"
                    class="text-left"
                    size="md"
                    icon="list-alt">
                    Sitemap
                </Button>

                <div
                    v-if="!developerMode"
                    class="developer-banner">
                    <div class="img">
                        <img
                            src="/img/block-sdk.png">
                    </div>
                    <div class="text">
                        <h3>Are you a developer?</h3>
                        <p>Start developing for blockchain with Portal SDK</p>
                        <Button
                            status="info"
                            to="/developer#apply"
                            iconHide>
                            Start Developing
                        </Button>
                        <Button
                            status="dark"
                            to="/help/topic/0/article/developer-program"
                            iconHide>
                            Learn More
                        </Button>
                    </div>
                </div>

                <div class="d-flex justify-content-start">
                    <div
                        v-if="!developerMode"
                        class="dev-block become_dev active">
                        <h5><i class="fas fa-code" />Become Developer</h5>
                        <ul>
                            <li>
                                <Button
                                    status="none"
                                    to="/developer#apply">
                                    <i class="fas fa-list-alt" />
                                    Apply Now
                                </Button>
                            </li>
                            <li>
                                <Button
                                    status="none"
                                    to="/developer#faq">
                                    <i class="fas fa-info-circle" />
                                    Developer FAQ
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    v-if="showPreviewPanel"
                    class="preview-panel col-12 mt-4">
                    <div>
                        <Button @click="toggleDesktopMode()">
                            Desktop Mode {{ desktopMode ? 'ON' : 'OFF' }}
                        </Button>
                        <Button @click="rotateOperatingSystem()">
                            Operating System {{ operatingSystem === 'mac' ? 'MAC' : (operatingSystem === 'windows' ? 'WINDOWS' : 'LINUX' ) }}
                        </Button>
                        <Button @click="rotateEnvironmentMode()">
                            Environment Mode {{ environmentMode ? environmentMode.toUpperCase() : 'NOT FOUND' }}
                        </Button>
                        <Button @click="toggleSignedIn()">
                            Signed {{ signedIn ? 'IN' : 'OUT' }}
                        </Button>
                        <Button @click="$store.state.application.account.isVerified = !$store.state.application.account.isVerified">
                            Account {{ $store.state.application.account.isVerified ? 'VERIFIED' : 'NOT VERIFIED' }}
                        </Button>
                        <Button @click="toggleDeveloperMode()">
                            Developer Mode {{ developerMode ? 'ON' : 'OFF' }}
                        </Button>
                        <Button @click="rotateEditorMode()">
                            Editor Mode {{ $store.state.application.editorMode.toUpperCase() }}
                        </Button>
                        <Button @click="toggleAccessOverride()">
                            Access Override {{ $store.state.application.accessOverride ? 'ON' : 'OFF' }}
                        </Button>
                        <Button @click="toggleSimulator()">
                            Simulator {{ simulatorMode ? 'ON' : 'OFF' }}
                        </Button>

                        <br><br>
                    </div>
                    <div>
                        <Button @click="importSeedData()">
                            Import Seed Data
                        </Button>
                        <Button @click="resetSeedData()">
                            Reset Seed Data
                        </Button>
                        <br><br>
                    </div>
                    <div>
                        <Button @click="$store.state.application.connection.auto = !$store.state.application.connection.auto">
                            Auto Connect is {{ $store.state.application.connection.auto ? 'ON' : 'OFF' }}
                        </Button>
                        <Button @click="$store.state.application.connection.internet = !$store.state.application.connection.internet">
                            Internet is {{ $store.state.application.connection.internet ? 'CONNECTED' : 'DISCONNECTED' }}
                        </Button>
                        <Button @click="$store.state.application.connection.datasource = !$store.state.application.connection.datasource">
                            Datasource is {{ $store.state.application.connection.datasource ? 'CONNECTED' : 'DISCONNECTED' }}
                        </Button>
                        <Button
                            v-if="desktopMode"
                            @click="$store.state.application.connection.operator = !$store.state.application.connection.operator">
                            Operator is {{ $store.state.application.connection.operator ? 'CONNECTED' : 'DISCONNECTED' }}
                        </Button>
                        <Button
                            v-if="desktopMode"
                            @click="$store.state.application.connection.ethereum = !$store.state.application.connection.ethereum">
                            Ethereum is {{ $store.state.application.connection.ethereum ? 'CONNECTED' : 'DISCONNECTED' }}
                        </Button>
                        <br><br>
                    </div>
                    <div>
                        <Button @click="saveSettings()">
                            Save Settings
                        </Button>
                        <Button @click="resetSettings()">
                            Reset Settings
                        </Button>
                        <br><br>
                    </div>
                    <div
                        v-if="desktopMode"
                        hidden>
                        <input
                            ref="desktopMessage"
                            type="text">
                        <Button @click="sendDesktopMessage">
                            Send Message To Desktop
                        </Button>
                    </div>
                    <div
                        v-if="developerMode"
                        hidden>
                        <h4>Access Manager</h4>
                        <select
                            id="darklaunch-editor"
                            class="form-control"
                            multiple="multiple">
                            <!-- <option
                                v-for="(flag) in $store.state.application.darklaunchFlags"
                                :key="flag.code"
                                :selected="$store.state.application.account.darklaunchFlags.map(flag => flag.enabled ? flag.code : null).includes(flag.code)">
                                {{ flag.code }} - {{ flag.description }}
                            </option> -->
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="backdrop"
            class="backdrop"
            data-action="fixedpanel-toggle" />
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    components: {
        'Button': () => import('../../').then(m => m.Button)
    },
    props: [],
    data() {
        return {
            showPreviewPanel: true // ['preview', 'staging', 'local'].includes(this.$store.state.application.environmentMode)
        }
    },
    computed: {
        developerMode() { return this.$store.state.application.developerMode },
        desktopMode() { return this.$store.state.application.desktopMode },
        signedIn() { return this.$store.state.application.signedIn },
        simulatorMode() { return this.$store.state.application.simulatorMode },
        operatingSystem() { return this.$store.state.application.operatingSystem },
        environmentMode() { return this.$store.state.application.environmentMode },
        realms() {
            return this.$store.getters['realms/list']
        },
        products() {
            return this.$store.getters['products/list']
        }
    },
    watch: {
    },
    updated() {
    },
    mounted() {
        this.$store.dispatch('realms/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        this.$store.dispatch('products/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })
    },
    created() {
        // if (process.client) {
            this.$('body').off('click').on('click', "[data-action='fixedpanel-toggle']", e => {
                const btn = this.$('#sidebar-toggle-btn span')

                if (this.$('body').hasClass('show-sidebar')) {
                    this.$('body').removeClass('show-sidebar')
                    this.$(btn).removeClass('fa-times').addClass('fa-cog')
                    this.$('.snotify').show()
                } else {
                    this.$('body').addClass('show-sidebar')
                    this.$(btn).removeClass('fa-cog').addClass('fa-times')
                    this.$('.snotify').hide()
                }
            })
        // }
    },
    methods: {
        ensureDesktopWelcome(to) {
            // if (this.$store.state.application.desktopMode
            // && !this.$store.state.application.signedIn
            // && (!to ? true : (
            //     to.path !== '/account/signup'
            //     && to.path !== '/account/signin'
            //     && to.path !== '/welcome'
            //     && to.path !== '/unlock'
            // ))) {
            //     this.$router.push({ path: '/welcome' })
            // }
        },
        toggleDesktopMode() {
            this.$store.state.application.desktopMode = !this.$store.state.application.desktopMode
        },
        toggleSignedIn() {
            this.$store.state.application.signedIn = !this.$store.state.application.signedIn
        },
        toggleDeveloperMode() {
            this.$store.state.application.developerMode = !this.$store.state.application.developerMode
        },
        toggleAccessOverride() {
            this.$store.state.application.accessOverride = !this.$store.state.application.accessOverride
        },
        toggleSimulator() {
            this.$store.commit('application/setSimulatorMode', !this.$store.state.application.simulatorMode)
        },
        rotateEditorMode() {
            // if (this.$store.state.application.editorMode === 'editing') {
            //     this.$store.state.application.editorMode = 'viewing'
            // } else if (this.$store.state.application.editorMode === 'viewing') {
            //     this.$store.state.application.editorMode = 'publishing'
            // } else {
            //     this.$store.state.application.editorMode = 'editing'
            // }
        },
        rotateOperatingSystem() {
            if (this.$store.state.application.operatingSystem === 'mac') {
                this.$store.state.application.operatingSystem = 'windows'
            } else if (this.$store.state.application.operatingSystem === 'windows') {
                this.$store.state.application.operatingSystem = 'linux'
            } else {
                this.$store.state.application.operatingSystem = 'mac'
            }
        },
        rotateEnvironmentMode() {
            if (this.$store.state.application.environmentMode === 'production') {
                this.$store.commit('application/updateEnvironmentMode', 'staging')
            } else if (this.$store.state.application.environmentMode === 'staging') {
                this.$store.commit('application/updateEnvironmentMode', 'beta')
            } else if (this.$store.state.application.environmentMode === 'beta') {
                this.$store.commit('application/updateEnvironmentMode', 'preview')
            } else if (this.$store.state.application.environmentMode === 'preview') {
                this.$store.commit('application/updateEnvironmentMode', 'local')
            } else {
                this.$store.commit('application/updateEnvironmentMode', 'production')
            }
        },
        importSeedData() {
            this.$portal.importSeedData()
        },
        resetSeedData() {
            this.$portal.resetSeedData()
        },
        saveSettings() {
            this.$portal.saveDatabase()

            this.$portal.Notification.info('', 'Settings saved', {
                timeout: 2000,
                pauseOnHover: true
            })
        },
        resetSettings() {
            window.resetSettings()
        },
        sendDesktopMessage() {
            if (!window.isElectron) {
                return alert('Not on desktop')
            }

            this.$desktop.sendCommand('ping', this.$refs.desktopMessage.value)
            this.$desktop.on('pong', (event, msg) => console.log('Message from desktop: ', msg))
        }
    }
}
</script>
