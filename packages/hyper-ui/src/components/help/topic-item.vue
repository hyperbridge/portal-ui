<template>
    <div
        class="topiListItem"
        :class="['block-size-' + size]">
        <Button
            status="none"
            :href="link"
            :to="to">
            <i :class="['fas fa-' + icon ]" />
            <slot />
        </Button>
    </div>
</template>

<script>
export default {
    name: 'TopicListItem',
    props: ['link', 'to', 'icon', 'size'],
    components: {
        'Button': () => import('../../').then(m => m.Button),
    }
}
</script>

<style lang="scss" scoped>
    .topiListItem{
        .Button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px 5px;
            text-align: center;
            color: #fff;
            font-weight: bold;
            height: 100%;
            font-size: 16px;
            background: rgba(0, 0, 0, .13);
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
            cursor: pointer;
            i{
                font-size: 22px;
                margin-bottom: 15px;
            }
            &:hover{
                text-decoration: none;
                background-color: rgba(0, 0, 0, .3);
            }
        }
        &.block-size-lg{
            .Button{
                font-size: 18px;
                i{
                    font-size: 32px;
                }
            }
        }
    }
</style>
