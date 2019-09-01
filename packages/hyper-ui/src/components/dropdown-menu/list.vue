<template>
    <Dropdown
        :id="id"
        :name="title"
        class="product-genre"
        :showBg="true">
        <div class="dropdown-list__content">
            <a
                v-for="(item, index) in list"
                :key="index"
                :href="`#item-${index+1}`"
                :class="{ 'content__item--active': item.selected }"
                @click.prevent="$emit('click', item)">{{ item.name }}</a>
        </div>
    </Dropdown>
</template>

<script>
export default {
    name: 'DropdownList',
    components: {
        'Dropdown': () => import('../../').then(m => m.Dropdown)
    },
    props: {
        id: {
            type: String,
            default: 'dropdown-list'
        },
        title: {
            type: String,
            default: null
        },
        list: {
            type: Array,
            default: () => []
        },
        activeList: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
    .dropdown-list__content {
        max-height: 260px;
        overflow-y: auto;
    }
    .content__item--active {
        background: rgba(255,255,255,.1);
    }
</style>
