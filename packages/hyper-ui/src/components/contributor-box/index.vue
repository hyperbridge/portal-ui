<template>
    <div class="contributor-box">
        <div class="contributor-box__title">
            Become a product Hunt contributor
        </div>
        <div class="contributor-box__description">
            <div class="text-white margin-bottom-15">
                Becoming a Product Hunt contributor allows you to hunt products.
            </div>
            <div class="margin-bottom-10">
                4 steps left!
            </div>
            <ProgressBar :values="{ reached: '1', goal: '4'}" />
            <div class="text-right margin-top-15">
                <Button status="second-info" @click=" showDetails = !showDetails ">
                    Learn More
                </Button>
            </div>
        </div>
        <div
            v-if="showDetails"
            class="contributor-box__details"
            :class="{'is-active': showDetails}">
            <div
                v-for="(step, idx) in steps"
                :key="`step-${idx}`"
                class="contributor-box__details-item margin-right-40">
                <div class="d-flex flex-column">
                    <Checkbox :value="step.value">
                        {{ step.label }}
                    </Checkbox>
                    <div v-if="step.description" class="margin-left-20 padding-left-5 margin-top-5">
                        {{ step.description }}
                    </div>
                </div>
                <Button status="second-success">
                    Completed
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'ProgressBar': () => import('../../').then(m => m.ProgressBar),
        'Checkbox': () => import('../../').then(m => m.Checkbox)
    },
    props: {
        steps: Array
    },
    data() {
        return {
            showDetails: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .contributor-box{
        background: #26263d;
        padding: 25px;
        border-radius: 5px;
        display: inline-flex;
        max-width: 100%;
        color: #fff;
        flex-direction: column;
    }
    .contributor-box__title{
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        font-size: 22px;
        font-weight: 500;
        display: flex;
        width: 100%;
    }
    .contributor-box__details{
        height: 0;
        overflow: hidden;
        transition: all 200ms ease-in-out;
        &.is-active{
            height: auto;
        }
    }
    .contributor-box__details-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 15px 0 0;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .05);
        &:last-child{
            border-bottom: 0;
            padding-bottom: 0;
        }
    }
</style>


