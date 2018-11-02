<template>
	<div class="api-code">
		<h4 v-show="title">{{ title }}</h4>
		<pre v-highlightjs="formatResponseData(data, dataType)"><code :class="dataType"></code></pre>
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

	code {
		line-height: 1.5;
		border-radius: 4px;
	}
</style>