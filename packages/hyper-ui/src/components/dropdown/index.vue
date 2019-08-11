<template>
	<div class="dropdown"
	     :class="{'dropdown--with-bg': withBg}">
		<div @click="toggleMenu()" class="dropdown__toggle">
			{{ selectedOption.name.length ? selectedOption.name : placeholderText }}
			<i class="ml-2" :class="`fas fa-${!showMenu ? 'chevron-down' : 'chevron-up'}`"></i>
		</div>
		<ul class="dropdown__menu" v-if="showMenu">
			<li v-for="option in options" v-if="options">
				<a href="javascript:void(0)" @click="updateOption(option)">
					{{ option.name }}
				</a>
			</li>
			<li v-else>
				No options
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			options: {
				type: [Array, Object]
			},
			selected: Object,
			placeholder: [ String ],
			withBg: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectedOption: {
					name: ''
				},
				showMenu: false,
				placeholderText: 'Please select an item',
			}
		},
		mounted() {
			if ( this.selected ) this.selectedOption = this.selected;
			if (this.placeholder)
			{
				this.placeholderText = this.placeholder;
			}
		},
		methods: {
			updateOption(option) {
				this.selectedOption = option;
				this.showMenu = false;
				this.$emit('updateOption', this.selectedOption);
			},
			toggleMenu() {
				this.showMenu = !this.showMenu;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dropdown {
		min-width: 60px;
		position: relative;
		display: inline-block;
		vertical-align: middle;
		font-size: 14px;
		a:hover {
			text-decoration: none;
		}
		&--with-bg{
			.dropdown__toggle{
				background-color: #24243b;
				border: 1px solid #363742;
				border-radius: 4px;
				padding: 0 8px;
			}
		}
	}

	.dropdown__toggle {
		color: #fff;
		width: auto;
		text-transform: none;
		transition: background 0s ease-out;
		height: 30px;
		font-size: 12px;
		line-height: 28px;
		&:hover {
			cursor: pointer;
		}
	}

	.dropdown__menu {
		position: absolute;
		top: 100%;
		right: 0;
		z-index: 1000;
		float: left;
		min-width: 100px;
		padding: 0;
		margin: 2px 0 0;
		list-style: none;
		font-size: 14px;
		text-align: left;
		background-color: #24243b;
		border: 1px solid #363742;
		border-radius: 4px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
		background-clip: padding-box;
		> li {
			list-style: none;
			border-bottom: 1px solid rgba(255, 255, 255, .03);
			&:last-child{
				border-bottom: none;
			}
			> a {
				padding: 7px 15px;
				display: block;
				line-height: 1.6;
				color: #fff;
				white-space: nowrap;
				text-decoration: none;
				&:hover {
					color: #6d87ff;
				}
			}
			overflow: hidden;
			width: 100%;
			position: relative;
			margin: 0;
		}
	}
</style>
