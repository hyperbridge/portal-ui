<template>
    <div class="simple-list-item">
        <Button
            status="none"
            :to="to"
            :href="link">
            <slot />
        </Button>
    </div>
</template>

<script>
export default {
    name: 'SimpleListItem',
    props: ['to', 'link']
}
</script>

<style lang="scss" scoped>
    .simple-list-item {
        padding: 5px 0;
        width: 100%;
        a {
            color: #fff;
        }
    }
</style>
