<template>
    <div class="row margin-bottom-30">
        <div class="col-12">
            <Block
                title="Top 20 Items"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true"
                showActions>
                <template slot="additional-action">
                    <span
                        class="margin-right-15"
                        hidden>Sort by:</span>
                    <HeadingBarFields
                        v-for="(opt, index) in sortOptions"
                        :key="index"
                        :name="opt.title"
                        :icon="opt.icon"
                        :activeUp="sortBy.property === opt.property ? sortBy.asc : null"
                        @clickUp="setSort(opt.property, true)"
                        @clickDown="setSort(opt.property, false)" />
                </template>

                <div class="filter-block d-flex justify-content-between align-items-center margin-bottom-20">
                    <div class="d-inline-flex align-items-center">
                        <DropdownMenu
                            class="margin-right-10"
                            title="FILTER BY PRODUCTS">
                            <List
                                :items="selectableProducts"
                                @click="item => item.selected = !item.selected" />
                        </DropdownMenu>
                        <DropdownMenu
                            class="margin-right-10"
                            title="FILTER BY GENRE">
                            <List
                                :items="selectableGenres"
                                @click="item => item.selected = !item.selected" />
                        </DropdownMenu>
                        <InputSearcher
                            v-model="phrase"
                            class="assets-explorer__input-searcher" />
                    </div>
                    <nuxt-link
                        tag="div"
                        :to="{
                            name: 'Marketplace',
                            query: { showFilters: true }
                        }">
                        <Button
                            v-if="assets.length"
                            tag="div"
                            status="lightpurple"
                            iconHide>
                            View All
                        </Button>
                    </nuxt-link>
                </div>
                <transition name="slide-in-top">
                    <div v-if="filtersActive">
                        <div class="flex-center-wrap">
                            <OptionTag
                                v-if="phrase"
                                title="Name:"
                                :text="phrase"
                                @delete="phrase = ''" />
                            <OptionTag
                                v-if="selectedProducts.length"
                                title="PRODUCTS:"
                                @delete="selectedProducts.forEach(product => product.selected = false)">
                                <OptionTag
                                    v-for="(product, index) in selectedProducts"
                                    :key="index"
                                    :text="product.name"
                                    isChildren
                                    @delete="product.selected = false" />
                            </OptionTag>
                            <OptionTag
                                v-if="selectedGenres.length"
                                title="GENRES:"
                                @delete="selectedGenres.forEach(genre => genre.selected = false)">
                                <OptionTag
                                    v-for="(genre, index) in selectedGenres"
                                    :key="index"
                                    :text="genre.name"
                                    isChildren
                                    @delete="genre.selected = false" />
                            </OptionTag>
                            <OptionTag
                                v-if="sortBy.property"
                                title="SORT BY:"
                                @delete="sortBy.property = ''; sortBy.asc = true">
                                <OptionTag
                                    title="Property:"
                                    isChildren
                                    :isParent="false"
                                    @delete="sortBy.property = ''">
                                    <select v-model="sortBy.property">
                                        <option
                                            v-for="opt in sortOptions"
                                            :key="opt.property"
                                            :value="opt.property">
                                            {{ opt.title }}
                                        </option>
                                    </select>
                                </OptionTag>
                                <OptionTag
                                    v-if="sortBy.property === 'price'"
                                    title="Price:"
                                    :isParent="false"
                                    isChildren>
                                    <select v-model="sortBy.priceProp">
                                        <option
                                            v-for="priceProp in priceProps"
                                            :key="priceProp"
                                            :value="priceProp">
                                            {{ priceProp | upperFirstChar }}
                                        </option>
                                    </select>
                                </OptionTag>
                                <OptionTag
                                    title="Direction:"
                                    isChildren
                                    :isParent="false"
                                    hideButton
                                    @delete="sortBy.asc = !sortBy.asc">
                                    {{ sortBy.asc ? 'Ascending' : 'Descending' }}
                                    <Icon
                                        name="arrow-up"
                                        class="sort-button"
                                        :class="{ 'desc': !sortBy.asc }"
                                        @click="sortBy.asc = !sortBy.asc" />
                                </OptionTag>
                            </OptionTag>
                        </div>
                    </div>
                </transition>
                <ContentNavigation
                    v-if="filteredAssets.length"
                    :items="filteredAssets">
                    <AssetsList
                        slot-scope="{ items }"
                        :items="items"
                        :itemInRow="2" />
                </ContentNavigation>
                <div v-else-if="filtersActive">
                    <p>
                        No products were found using these filters. Want to <Button
                            status="plain"
                            @click="$store.commit('application/activeModal', 'comingSoon')">
                            Check for updates
                        </Button>?
                    </p>
                    <Button
                        status="info"
                        size="md"
                        iconHide
                        @click="clearFilters()">
                        Clear filters
                    </Button>
                </div>
                <p v-else>
                    Nothing could be found. Want to <Button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Check for updates
                    </Button>?
                </p>
            </Block>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssetsExplorer',
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'ContentNavigation': () => import('../../').then(m => m.ContentNavigation),
        'Block': () => import('../../').then(m => m.Block),
        'HeadingBarFields': () => import('../../').then(m => m.HeadingBarFields),
        'Dropdown': () => import('../../').then(m => m.Dropdown),
        'InputSearcher': () => import('../../').then(m => m.InputSearcher),
        'AssetsList': () => import('../../').then(m => m.AssetsList),
        'DropdownMenu': () => import('../../').then(m => m.DropdownMenu),
        'List': () => import('../../').then(m => m.List),
        'OptionTag': () => import('../../').then(m => m.OptionTag)
    },
    props: {
        assets: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            phrase: '',
            selectableGenres: [],
            selectableProducts: [],
            sortBy: {
                property: '',
                priceProp: 'current',
                asc: true
            },
            sortOptions: [
                { title: 'Name', property: 'name', icon: 'language' },
                { title: 'Price', property: 'price', icon: 'dollar-sign' }
            ]
        }
    },
    methods: {
        clearFilters() {
            this.phrase = ''
            this.sortBy.property = ''
            this.sortBy.asc = true
            this.selectedProducts.forEach(product => product.selected = false)
            this.selectedGenres.forEach(genre => genre.selected = false)
        },
        setSort(prop, direction) {
            const { property, asc } = this.sortBy
            this.sortBy.property = property === prop && direction === asc
                ? null
                : prop
            this.sortBy.asc = direction
        }
    },
    computed: {
        genres(){
            return []
        },
        products() {
            return []
        },
        selectedProducts() {
            return this.selectableProducts.filter(product => product.selected)
        },
        selectedProductsNames() {
            return this.selectedProducts.map(product => product.name)
        },
        selectedGenres() {
            return this.selectableGenres.filter(genre => genre.selected)
        },
        filtersActive() {
            return Boolean(this.selectedProducts.length ||
                    this.phrase ||
                    this.selectedGenres.length ||
                    this.sortBy.property)
        },
        filteredAssets() {
            const { property, asc, priceProp } = this.sortBy
            const { phrase, selectedProductsNames } = this
            const sortDir = dir => asc ? dir : dir * -1

            return this.assets
                .filter(asset => phrase
                    ? asset.name.toLowerCase().includes(phrase.toLowerCase())
                    : true)
                .filter(asset => selectedProductsNames.length
                    ? selectedProductsNames.includes(asset.productName)
                    : true)
                .sort((a, b) => property
                    ? property === 'price'
                        ? a.price[priceProp] > b.price[priceProp]
                            ? sortDir(1)
                            : a.price[priceProp] < b.price[priceProp] ? sortDir(-1) : 0
                        : a[property] > b[property]
                            ? sortDir(1)
                            : a[property] < b[property] ? sortDir(-1) : 0
                    : 0)
        },
        priceProps() {
            return Object.keys(this.assets[0].price)
        }
    },
    mounted() {
        this.selectableGenres = this.genres.map(name => ({ name, selected: false }))
        this.selectableProducts = this.products.map(name => ({ name, selected: false }))
    }
}
</script>

<style lang="scss" scoped>
    .assets-explorer__input-searcher {
        margin-left: 5px;
    }
    .sort-button {
        cursor: pointer;
        margin-left: 4px;
        transition: transform .2s ease;
        &.desc {
            transform: rotate(180deg);
        }
    }
    @media (max-width: 768px) {
        .filter-block{
            display: none!important;
        }
    }
</style>
