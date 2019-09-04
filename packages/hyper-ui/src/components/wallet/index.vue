<template>
    <div>
        <div class="wallet__info">
            <img
                src="/img/icons/token-icon.png"
                alt="Token">
            <div class="h2">
                0 HBX
            </div>
            <div class="h4">
                $ 0.00 USD
            </div>
            <div class="wallet__actions margin-top-20">
                <Button
                    status="opacity-success"
                    size="lg"
                    class="mx-2">
                    Deposit
                </Button>
                <Button
                    status="opacity-info"
                    size="lg"
                    class="mx-2">
                    Send
                </Button>
            </div>
        </div>
        <div class="wallet__history">
            <div class="h5">
                History
            </div>
            <div class="wallet__history-list">
                <div class="text-center">
                    No transaction history
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WalletPopup',
    props: {},
    components: {
        'Button': () => import('../../').then(m => m.Button)
    },
}
</script>

<style lang="scss" scoped>
    .wallet__info{
        display: flex;
        flex-direction: column;
        padding: 30px 0;
        justify-content: center;
        align-items: center;
        color: #fff;
        img{
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
        }
    }
    .wallet__history{
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .wallet__history-list{
        display: flex;
        flex-direction: column;
        color: #fff;
        padding-top: 10px;
        margin-top: 5px;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }
</style>
