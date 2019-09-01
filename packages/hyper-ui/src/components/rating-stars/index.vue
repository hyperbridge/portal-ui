<template>
    <span>
        <Icon
            v-for="(star, index) in stars"
            :key="index"
            :name="star" />
    </span>
</template>

<script>
export default {
    components: {
        'Icon': () => import('../../').then(m => m.Icon)
    },
    props: {
        number: {
            required: true
        }
    },
    computed: {
        stars() {
            const stars = []
            const number = Number(this.number)
            const parsedNumber = Math.floor(number).toString()
            for (let i = 0; i < parsedNumber; i++) {
                stars.push('star')
            }
            return Number.isInteger(number) ? stars : [...stars, 'star-half']
        }
    }
}
</script>


