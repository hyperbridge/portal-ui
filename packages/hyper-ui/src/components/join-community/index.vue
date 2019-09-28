<template>
    <div v-if="!signedIn" class="join-community">
        <div class="join-community__wrapper">
            <Img src="../../static/img/logo.fw.png" />
            <div class="h5 font-weight-bold">Join the BlockHub community!</div>
            <div>Discover the best games before they're mainstream.</div>
            <Button
                class="margin-top-15"
                status="outline-white"
                @click="$store.commit('application/activeModal', 'register')"
            >Sign Up</Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Button: () => import("../../").then(m => m.Button),
        Img: () => import("../../").then(m => m.Img)
    },
    computed: {
        signedIn() {
            return this.$store.state.application.signedIn;
        }
    }
};
</script>

<style lang="scss" scoped>
.join-community__wrapper {
    padding: 20px 10px;
    border-radius: 5px;
    background: rgba(93, 95, 136, 0.5);
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    img {
        max-width: 90%;
        height: auto;
        margin: 0 auto 15px;
        display: block;
    }
    .button {
        margin: 20px auto auto;
    }
}
</style>

