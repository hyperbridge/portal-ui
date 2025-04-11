<template>
    <transition name="fadeIn">
        <div
            v-if="show"
            class="share-block">
            <Searcher
                class="margin-bottom-10" />
            <div class="share-block__users margin-top-20">
                <div class="list">
                    <h5>
                        Favorites
                    </h5>
                    <Author
                        v-for="(author, index) in favoritesList"
                        :key="index"
                        :name="author.name"
                        :img="author.img" />
                </div>
                <div class="list">
                    <h5>
                        Online
                    </h5>
                    <Author
                        v-for="(author, index) in onlineList"
                        :key="index"
                        :name="author.name"
                        :img="author.img" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ShareList',
    components: {
        'Searcher': () => import('../../').then(m => m.Searcher),
        'Author': () => import('../../').then(m => m.Author)
    },
    props: ['onlineList', 'favoritesList', 'show'],
    // data(){
    //     return{
    //         show: this.show
    //     }
    // },
    methods: {
        // toggleList(){
        //     this.show = !this.show
        // }
    }
}
</script>

<style lang="scss" scoped>
    .Input{
        background: rgba(0, 0 ,0, .3);
    }
    .share-block{
        position: absolute;
        width: 200px;
        top: 0;
        transform: translateY(-48%);
        right: -220px;
        padding: 15px;
        background: rgba(0, 0, 0, .85);
        color: #fff;
        border-radius: 5px;
        z-index: 8;
        &:before{
            content: "";
            position: absolute;
            transform: rotate(-90deg);
            top: calc( 50%);
            left: -20px;
            z-index: 7;
            border-style: solid;
            border-width: 0 15px 15px 15px;
            border-color: transparent transparent rgba(0, 0, 0, .85) transparent;
        }
    }
    .share-block__users{
        height: auto;
        max-height: calc( 100% - 50px);
        overflow-x: hidden;
        overflow-y: auto;
        h5{
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
        }
        .author{
            margin: 6px 0;
            display: flex;
            &:last-child{
                margin-bottom: 0;
            }
        }
        .list{
            margin-bottom: 15px;
            &:last-child{
                margin: 0;
            }
        }
    }
</style>
