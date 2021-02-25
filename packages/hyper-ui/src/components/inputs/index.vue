<script>
export default {
    props: ['value', 'bgColor', 'textColor', 'error'],
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: e => this.$emit('input', e.target.value)
            }
        }
    },
    render(h) {
        return h('input', {
            staticClass: 'input',
            on: this.listeners,
            attrs: {
                ...this.$attrs,
                ...this.$props
            },
            domProps: {
                value: this.value
            },
            style: {
                'background': this.bgColor,
                'color': this.textColor,
                'border': this.error ? '1px solid red' : ''
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .input {
        background: #222235;
        border-radius: 3px;
        padding: 0 10px;
        height: 33px;
        color: #fff;
        user-select: none;
        box-shadow: none;
        outline: none;
        width: 100%;
	    border: 1px solid #363742;
        &::placeholder{
            color: rgba(255, 255, 255, .5);
        }
    }
</style>
