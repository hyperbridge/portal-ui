<template>
    <BasicPopup
        :activated="activated"
        @close="$emit('close')">
        <template slot="header">
            <div class="h2 p-0">
                Got Portal?
            </div>
        </template>

        <template slot="body">
            <p>
                You need to have the Portal desktop application installed before ypu can install and launch <strong>{{ gameName }}</strong>.
                Do you have Portal installed on this computer?
            </p>
            <div class="d-flex mt-3 justify-content-between align-items-center">
                <a
                    class="action"
                    href="#"
                    @click="$emit('play')">
                    <div class="h5 font-weight-bold p-0 m-0">
                        Yes, Portal is installed
                    </div>
                    <div>
                        Play this game now
                    </div>
                </a>

                <a
                    class="action"
                    href="https://store.steampowered.com/about/"
                    target="_blank">
                    <div class="h5 font-weight-bold p-0 m-0">
                        No, I need Portal
                    </div>
                    <div>
                        Read about and download Portal
                    </div>
                </a>
            </div>
        </template>

        <template slot="footer">
            <div class="d-flex align-items-center justify-content-between border-top pt-4">
                <img
                    src="/img/icons/steam-square-icon.png"
                    alt="Portal"
                    width="45"
                    style="opacity: .5"
                    class="mr-4">
                <div>
                    Portal is premier desktop gaming platform. It's free to join and ease to use.
<!--                    <Button-->
<!--                        status="plain"-->
<!--                        href="https://store.steampowered.com/about/"-->
<!--                        class="p-0">-->
<!--                        Learn more about Portal-->
<!--                    </Button>-->
                </div>
            </div>
        </template>
    </BasicPopup>
</template>

<script>
export default {
    components: {
        'BasicPopup': () => import('../../').then(m => m.BasicPopup),
        'Button': () => import('../../').then(m => m.Button)
    },
    props: {
        activated: {
            type: Boolean,
            default: false
        },
        gameName: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .action{
        display: flex;
        flex-direction: column;
        padding: 6px 10px;
        text-align: left;
        background: #0e86ca;
        color: #fff;
        border: 1px solid #00aeff;
        border-radius: 2px;
        text-shadow: 1px 1px 1px #000;
        width: 47%;
        &:hover{
            background: #00aeff;
            cursor: pointer;
            text-decoration: none;
        }
    }
    .border-top{
        border-color: rgba(255, 255, 255, .1)!important;
    }
</style>
