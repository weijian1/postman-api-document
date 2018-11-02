<template>
	<div class="url-group">
		<el-tag :type="tagColorType">{{ method }}</el-tag>
		<pre v-highlightjs="toUrlStr(url)"><code class="http"></code></pre>
	</div>
</template>

<script>
	export default {
		props: {
			method: {
				required: true
			},
			url: {
				required: true
			}
		},

		methods: {
			toUrlStr(url) {
				if (typeof url == 'string') {
					return url;
				}

				return `${url.host}/` + url.path.join('/'); 
			}
		},

		computed: {
			tagColorType() {
				switch (this.method.toLocaleLowerCase()) {
					case 'get':
						return 'success';
					case 'post':
						return 'warning';
					case 'patch':
						return '';
					case 'put':
						return '';
					case 'delete':
						return 'danger';
					default:
						return '';
				}
			}
		}
	}
</script>

<style scoped>
	.url-group {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	.url-group .el-tag {
		line-height: 28px;
		height: 28px;
	}
	.url-group pre {
		flex: 1;
		margin: 0;
		margin-left: 5px;
	}

	code {
		border-radius: 4px;
		line-height: 1.5;
	}
</style>