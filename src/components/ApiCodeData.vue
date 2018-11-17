<template>
	<div class="api-code">
		<h4 v-show="title">{{ title }}</h4>
		<div class="code-wrapper">
			<pre v-highlightjs="formatResponseData(data, dataType)"><code :class="dataType"></code></pre>
			<font-awesome-icon class="icon-copy" :icon="['fa', 'copy']" size="1x" @click="copyData"></font-awesome-icon>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},

		props: {
			title: {
				required: false
			},
			data: {
				required: true
			},
			dataType: {
				required: true
			}
		},

		methods: {
			copyData() {
				this.$utils.clipboard.copyText(this.formatResponseData(this.data, this.dataType));
			},

			formatResponseData(data, dataType) {
				if (dataType == 'json') {
					return JSON.stringify(JSON.parse(data), null, "  ");
				}

				return data;
			}
		}
	}
</script>

<style scoped>
	.api-code h4 {
		margin-bottom: 10px;
	}

	.code-wrapper {
		position: relative;
	}

	.code-wrapper pre {
		margin: 0;
	}

	.code-wrapper code {
		line-height: 1.5;
		border-radius: 4px;
	}

	.code-wrapper .icon-copy {
		position: absolute;
		color: white;
		top: 10px;
		left: auto;
		right: 10px;
		cursor: pointer;
	}
</style>