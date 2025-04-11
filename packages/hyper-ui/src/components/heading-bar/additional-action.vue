<template>
    <div
        class="additional-action"
        :class="customClass">
        {{ name }}
        <Icon
            v-if="icon"
            :name="icon"
            class="additional-action__icon" />
        <ButtonArrows
            class="additional-action__button"
            :activeUp="activeUp"
            @clickUp="$emit('clickUp')"
            @clickDown="$emit('clickDown')" />
    </div>
</template>

<script>
export default {
    name: 'AdditionalAction',
    components: {
        'ButtonArrows': () => import('../../').then(m => m.ButtonArrows),
        'Icon': () => import('../../').then(m => m.Icon)
    },
    props: {
        name: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        customClass: {
            type: String,
            default: null
        },
        activeUp: {
            type: Boolean,
            default: undefined
        }
    }
}
</script>

<style lang="scss" scoped>
    .additional-action {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #fff;
        height: 30px;
        margin-left: 10px;
        .additional-action__icon {
            margin-left: 8px;
        }
        .additional-action__button {
            margin: 0 0 0 5px;
        }
    }
</style>
