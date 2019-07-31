<template>
    <div class="model-editor">
        <div
            v-if="model"
            class="row margin-bottom-40">
            <div
                v-if="notice"
                class="col-md-12">
                <p class="alert alert-info">
                    {{ notice }}
                </p>
                <br><br>
            </div>
            <div class="col-md-6">
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-4">
                        <label>Tags</label>
                    </label>
                    <div class="col-sm-8">
                        <Multiselect
                            v-model="model.tags"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="value"
                            track-by="key"
                            :options="tagOptions"
                            :multiple="true"
                            :taggable="true"
                            @tag="addTag" />
                        <span class="form-text" />
                    </div>
                </div>
            </div>

            <div class="col-12">
                <HtmlEditor
                    height="200"
                    :model.sync="model.value" />

                <span class="form-text" />
            </div>

            <div class="col-12 margin-top-10">
                <HeadingBarWithSimpleColor
                    class="mt-4 mb-4"
                    colorCode="#444"
                    textAlign="center"
                    hidden>
                    Advanced Options
                </HeadingBarWithSimpleColor>

                <div @click="toggleAdvanced">
                    <i
                        class="mr-2 fas"
                        :class="advanced ? 'fa-angle-up' : 'fa-angle-down'" />
                    {{ advanced ? 'Hide' : 'Show' }} Advanced
                </div>
            </div>

            <div
                v-if="advanced"
                class="col-12">
                <hr>
            </div>

            <div
                v-if="advanced"
                class="col-md-12">
                <div
                    class="form-group row"
                    style="text-align: center">
                    <br>
                    <h3 style="width: 100%">
                        Raw Data Editor
                    </h3>
                    <br><br>
                    <textarea
                        :value="modelJson"
                        rows="10"
                        cols="50"
                        @input="updateModelRaw($event.target.value)" />
                    <br><br>
                    <span class="form-text" />
                    <JsonEditor
                        v-model="model"
                        :objData="model"
                        style="margin: 0 auto" />
                </div>
            </div>
        </div>

        <div
            slot="menu"
            class="row">
            <div
                v-if="model.id"
                class="col-12 text-right">
                <Button
                    status="info"
                    size="lg"
                    :href="`/model/${model.id}`"
                    target="_blank"
                    icon="eye">
                    View Community
                </Button>
                <Button
                    status="success"
                    size="lg"
                    icon="save"
                    @click="save">
                    Save
                </Button>
            </div>
            <div
                v-if="!model.id"
                class="col-12 text-right">
                <Button
                    status="success"
                    size="lg"
                    icon="plus"
                    @click="create">
                    Create
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
import beautify from 'json-beautify'

export default {
    components: {
        'HtmlEditor': () => import('../../').then(m => m.HtmlEditor),
        'JsonEditor': () => import('../../').then(m => m.JsonEditor),
        'Multiselect': () => import('vue-multiselect').then(m => m.default)
    },
    props: {
        serviceKey: String
    },
    data() {
        return {
            loadingState: true,
            notice: '',
            model: this.$route.params.id === 'new' ? this.$store.state.funding.defaultModel : this.$store.getters['models/get'](this.$route.params.id),
            advanced: false,
            tagOptions: []
        }
    },
    computed: {
        savedModel() {
            return this.$store.getters[`${this.serviceKey}/get`](this.$route.params.id)
        },
        modelJson() {
            return beautify(this.model, null, 2, 100)
        }
    },
    watch: {
        savedModel() {
            this.model = { ...this.model, ...this.savedModel }
        }
    },
    created() {
        if (this.$route.params.id !== 'new') {
            this.$store.dispatch(`${this.serviceKey}/find`, {
                query: {
                    id: Number(this.$route.params.id),
                    $eager: 'tags'
                }
            })
        }
    },
    methods: {
        updateModelRaw(model) {
            this.model = JSON.parse(model)
        },
        addTag(newTag) {
            const tag = {
                key: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
                value: newTag
            }

            this.tagOptions.push(tag)
            this.model.tags.push(tag)
        },
        toggleAdvanced() {
            this.advanced = !this.advanced
        },
        async create() {
            this.model.ownerId = this.$store.state.application.activeProfile.id

            const res = await this.$store.dispatch(`${this.serviceKey}/create`, this.model)

            this.model.id = res.id
            this.notice = 'Congratulations, your community has been created!'

            this.$router.push(`/business/${this.serviceKey}/${this.model.id}`)
        },
        async save() {
            this.model.ownerId = this.$store.state.application.activeProfile.id

            await this.$store.dispatch(`${this.serviceKey}/update`, [this.model.id, this.model, {
                query: {
                    $eager: 'tags'
                }
            }])

            this.notice = 'Community has been saved.'

            window.scrollTo(0, 0)
            // this.model.id = modelResult.id
            // this.successfulCreationMessage = "Congratulations, your model has been created!"

            // this.$router.push('/business/model/' + this.model.id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .note-editor.note-frame .note-editing-area .note-editable {
        background: #30314d !important;
        color: #fff;
    }
</style>
