<template>
	<el-tree :data="data" 
			 :props="defaultProps" 
			 :render-after-expand="false" 
			 :default-expand-all="true"
			 :highlight-current="true"
			 @node-click="onNodeClick"
			 ></el-tree>
</template>

<script>
	export default {
		data() {
			return {
				defaultProps: {
				  children: 'item',
				  label: 'name'
				}
			}
		},

		props: {
			data: {

			}
		},

		methods: {
			onNodeClick(data, node, tree) {
				this.$emit('onApiMenuChange', data);
			}
		}
	}
</script>

<style scoped>
	.el-tree {
		margin-top: 10px;
	}

	.el-tree /deep/ .el-tree-node__content {
		height: 35px;
		line-height: 35px;
	}

	.el-tree /deep/ .el-tree-node.is-current .el-tree-node__content {
		background-color: #409eff;
		color: white;
	}
</style>