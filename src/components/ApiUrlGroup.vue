<template>
	<div class="url-group">
		<el-tag :type="tagColorType">{{ method }}</el-tag>
		<div class="url-wrapper">
			<pre v-highlightjs="toUrlStr(url)"><code class="http"></code></pre>
			<font-awesome-icon class="icon-copy" :icon="['fa', 'copy']" size="1x" @click="copyData"></font-awesome-icon>
		</div>
	</div>
</template>

<script>
	import Clipboard from 'clipboard'
	export default {
		props: {
			method: {
				required: true
			},
			url: {
				required: true
			}
		},

		created() {
			
		},

		methods: {
			toUrlStr(url) {
				if (typeof url == 'string') {
					return url;
				}

				return `${url.host}/` + url.path.join('/'); 
			},

			copyData() {
				this.$utils.clipboard.copyText(this.toUrlStr(this.url));
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

	.url-wrapper {
		position: relative;
		width: 100%;
	}

	.url-wrapper pre {
		flex: 1;
		margin: 0;
		margin-left: 5px;
	}

	.url-wrapper .icon-copy {
		position: absolute;
		top: 0;
		left: auto;
		right: 10px;
		bottom: 0;
		color: white;
		margin: auto;
		cursor: pointer;
	}

	code {
		border-radius: 4px;
		line-height: 1.5;
	}
</style>