<template>
    <div class="wallet-deposit">
        <div class="wallet-deposit__head">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta vel quam in hendrerit.
            </div>
        </div>

        <div class="wallet-deposit__body mt-auto">
            <div class="wallet-deposit__item">
                <div class="h4">
                    Proin porta vel quam in hendrerit.
                </div>
                <p>
                    Vestibulum magna nisl, vehicula eu orci sed, viverra venenatis nisi.
                    Vivamus nulla metus, tempus id rhoncus ac, ullamcorper eget felis.
                </p>
                <Button
                    status="opacity-info"
                    size="lg">
                    Buy
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        components: {
            'Button': () => import('../../').then(m => m.Button)
        },
    }
</script>

<style lang="scss" scoped>
    .wallet-deposit {
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .wallet-deposit__head {
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        margin-bottom: 15px;
    }
    .wallet-deposit__body{
        display: flex;
        height: 100%;
        flex-direction: column;
        color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .wallet-deposit__item{
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        text-align: center;
        &:last-child{
            border-bottom: 0;
            padding-bottom: 0;
        }
        .c-button{
            margin-top: 15px;
        }
    }
</style>
