<template>
    <div class="games-list">
        <div class="col-3 p-0">
            <GamesNavigation
                :list="games"
                :activeId="currentID"
                @choose="getGame" />
        </div>
        <div class="col-9 p-0">
            <GameTab :name="game.name"
                        :subName="game.sub_name"
                        :image="game.image"
                        :friends="game.friends"
                        :achievements="game.achievements"
                        :downloadContent="game.download_content"
                        :news="game.news" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'GameTab': () => import('../../').then(m => m.GameTab),
        'GamesNavigation': () => import('../../').then(m => m.GamesNavigation)
    },
    props: {
        games: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            game: {},
            currentID: ''
        }
    },
    watch: {
        game() {
            this.currentID = this.game.id
        }
    },
    mounted() {
        this.game = this.games[1]
    },
    methods: {
        getGame(id) {
            this.games.forEach(el => {
                if (el.id == id) {
                    console.log(el)
                    this.game = el
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .games-list{
        display: flex;
        width: 100%;
    }
</style>
