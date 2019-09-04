<template>
    <Popup
        ref="modal"
        :activated="activated"
        type="custom"
        width="250">
        <div
            slot="customClose"
            hidden />
        <div
            slot="customContent"
            class="unlock-modal">
            <div class="tab-container">
                <div class="tab-card">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <h3>Password</h3>
                                <label class="sr-only">Password</label>
                                <input
                                    class="form-control"
                                    v-focus
                                    ref="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    @keyup.enter="unlock()">
                                <br>
                                <Button
                                    :class="{'wrong': wrongPassword}"
                                    class="Button--lg"
                                    @click="unlock()">
                                    Unlock
                                </Button>
                                <br>
                                <p class="margin-top-20">
                                    <span style="color: #aaa">Can't remember?</span> <Button
                                        class="plain"
                                        @click="recovery = true">
                                        Recover your account
                                    </Button>
                                </p>
                                <div
                                    v-if="recovery"
                                    class="row recovery-box">
                                    <div
                                        v-if="!password"
                                        class="col-12">
                                        <div class="form-group">
                                            <label class="sr-only">Enter your secret question #1</label>
                                            <!-- http://goodsecurityquestions.com/examples/ -->
                                            <p>{{ secretQuestion1 }}</p>
                                            <div class="input-group mb-4">
                                                <input
                                                    v-model="secretAnswer1"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Secret Answer"
                                                    name="secretAnswer1">
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        v-if="!password"
                                        class="col-12">
                                        <div class="input-group">
                                            <p>What is your birthday?</p>
                                            <label class="sr-only">Enter your birthday</label>
                                            <Datepicker
                                                v-model="birthday"
                                                placeholder="Birthday"
                                                input-class="form-control form-calendar__text"
                                                name="birthday"
                                                calendar-class="form-calendar"
                                                minimumView="day"
                                                maximumView="year"
                                                initialView="year"
                                                :format="customBirthdayFormatter" />
                                        </div>
                                    </div>
                                    <div
                                        v-if="!password"
                                        class="col-12 margin-bottom-20">
                                        <Button
                                            class="outline-green"
                                            @click="recoverPassword">
                                            Submit
                                        </Button>
                                    </div>
                                    <div
                                        v-if="recoveryError"
                                        class="col-12">
                                        <div class="alert alert-danger mb-4">
                                            {{ recoveryError }}
                                        </div>
                                    </div>
                                    <p
                                        v-if="password"
                                        class="col-12">
                                        <strong>Success!</strong>
                                        <br>
                                        Your password has been recovered without a third-party. It was all you. Isn't that awesome? Now don't lose it!
                                        <br><br>
                                        <strong>Your password is:</strong>
                                        <br>
                                        {{ password }}
                                        <br><br>
                                        <Button @click="recovery = false">
                                            I Understand
                                        </Button>
                                    </p>
                                    <div
                                        v-if="!password"
                                        class="col-12">
                                        <p><strong>Can't remember?</strong></p>
                                        <p><em>If you can't remember, you can download your account file, reset your account and try again later.</em></p>
                                        <p>
                                            <Button @click="exportAccount">
                                                Export Saved Account
                                            </Button>
                                        </p>
                                        <p>
                                            <Button @click="clearAccount">
                                                Clear Saved Account
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Popup>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Popup': () => import('../../').then(m => m.Popup)
    },
    props: ['activated'],
    data() {
        return {
            recovery: false,
            wrongPassword: false,
            password: null,
            secretAnswer1: null,
            birthday: null,
            recoveryError: null
        }
    },
    computed: {
        secretQuestion1() {
            if (!DB.store.data[0].application.account.secretQuestion1) return 'Secret question not found'

            const expanded = {}
            expanded['last_name_first_kissed'] = 'What is the first name of the person you first kissed?'
            expanded['first_name_favorite_aunt_uncle'] = 'What is the first name of the your favorite aunt or uncle?'
            expanded['favorite_high_school_teacher'] = 'What is the last name of your favorite teacher in high school?'
            expanded['last_name_teacher_failing_grade'] = 'What is the last name of the teacher who gave you your first failing grade?'
            expanded['wedding_reception'] = 'What is the name of the plac eyour wedding reception was held?'
            expanded['city_sibling_live'] = 'In what city or town does your nearest sibling live?'

            return expanded[DB.store.data[0].application.account.secretQuestion1]
        }
    },
    mounted() {
        const self = this
        this.$desktop.on('promptPasswordRequest', data => {
            if (!data.error) return

            self.wrongPassword = true

            setTimeout(() => {
                self.wrongPassword = true
            }, 350)
        })
    },
    methods: {
        unlock() {
            this.wrongPassword = false

            this.$desktop.resolvePromptPasswordRequest(this.$refs.password.value)
        },
        async recoverPassword() {
            this.recoveryError = null

            const data = await this.$desktop.sendCommand('recoverPasswordRequest', {
                secretQuestion1: this.secretQuestion1,
                secretAnswer1: this.secretAnswer1.toLowerCase(),
                birthday: moment(this.birthday).format('DD-MM-YYYY')
            })

            if (data.error) {
                this.recoveryError = data.error.message

                return
            }

            this.recoveryError = null
            this.password = data.password
        },
        customBirthdayFormatter(date) {
            return moment(date).format('DD-MM-YYYY')
        },
        exportAccount() {
            this.$desktop.sendCommand('exportAccountFileRequest')
        },
        clearAccount() {
            this.$desktop.sendCommand('deleteAccountRequest')
        }
    }
}
</script>

<style lang="scss" scoped>
    .popup {
        background: #383853 !important;
    }
    .unlock-modal{
        background: transparent;
        color: #fff;
    }
    .tab-card {
        background: #383853;
        border-radius: 5px;
        padding: 8px 10px;
        border: 1px solid #373752;
        margin-bottom: 15px;
        &:last-child {
            margin: 0;
        }
        input {
            border: none;
            box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
            background: #303049;
        }
        .Button--lg {
            border: 2px solid transparent;

            &.wrong {
                position: relative;
                left: 0;
                border-color: #ed1c24;
                animation: wrong-log 0.3s !important;
            }
        }
    }

    .recovery-box {
        border: 3px dashed rgba(0, 0, 0, .4);
        padding: 20px;
        margin-top: 20px;
        background: #515171;
    }

    @keyframes wrong-log {
        0%, 100% {left: 0px;}
        20%, 60% {left: 15px;}
        40% , 80% {left: -15px;}
    }
</style>

<style lang="scss">
    .vdp-datepicker {
        width: 100%;
    }

    .form-calendar {
        background-color: #27273A !important;
        border-color: rgba(255,255,255,.2) !important;
        box-shadow: 0 0 15px rgba(1, 1, 1, .35);
        .up:hover, .up:focus {
            color: black !important;
        }
    }
    .form-calendar__text, .form-calendar__text:focus {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.4) inset;
        border: none !important;
        background-color: #303049 !important;
    }
</style>
