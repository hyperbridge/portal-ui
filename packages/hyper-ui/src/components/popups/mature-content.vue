<template>
	<BasicPopup
		:activated="activated"
		@close="$emit('close')">
		<template slot="header">
			<div class="h3 p-0">
				Warframe is for mature audiences
			</div>
		</template>

		<template slot="body">
			<div class="img d-flex justify-content-center margin-bottom-30">
				<img src="/img/mature-icon.svg" height="150" />
			</div>
			<div class="h4 text-center">
				You must be at least eighteen years old to view this game.
				Are you over eighteen and willing to view mature content?
			</div>
		</template>

		<template slot="footer">
			<div class="d-flex align-items-center justify-content-center w-100">
				<Button
					status="second-success"
					size="lg"
					href="#3"
					class="margin-right-10">
					Continue
				</Button>
				<Button
					status="second-warning"
					size="lg"
					href="#3"
					class="margin-left-10">
					Nope
				</Button>
			</div>
		</template>
	</BasicPopup>
</template>

<script>
	export default {
		components: {
			'BasicPopup': () => import('../../').then(m => m.BasicPopup),
			'Button': () => import('../../').then(m => m.Button)
		},
		props: {
			activated: {
				type: Boolean,
				default: false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.action{
		display: flex;
		flex-direction: column;
		padding: 6px 10px;
		text-align: left;
		background: #0e86ca;
		color: #fff;
		border: 1px solid #00aeff;
		border-radius: 2px;
		text-shadow: 1px 1px 1px #000;
		width: 47%;
		&:hover{
			background: #00aeff;
			cursor: pointer;
			text-decoration: none;
		}
	}
	.border-top{
		border-color: rgba(255, 255, 255, .1)!important;
	}
</style>
