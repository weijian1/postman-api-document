<template>
	<div class="api-params" v-if="data">
	  <h4><span>{{ title }}</span><font-awesome-icon class="icon-copy" :icon="['fa', 'copy']" size="1x" @click="copyData"></font-awesome-icon></h4>
	  <el-table :data="data" border class="params-table">
	    <el-table-column label="参数名">
	    	<template slot-scope="scope">
	    		<div class="params-wrapper">
		    		<span v-html="scope.row.key"></span>
		    		<el-tag size="mini" class="tag-optional-params" v-if="scope.row.disabled && scope.row.disabled == true">可选</el-tag>
	    		</div>
	    	</template>
	    </el-table-column>
	    <el-table-column prop="value" label="值" v-if="showValue"></el-table-column>
	    <el-table-column label="描述">
	    	<template slot-scope="scope">
	    		<span v-html="scope.row.description"></span>
	    	</template>
	    </el-table-column>
	  </el-table>
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
				required: true
			},

			data: {
				required: true
			},
			showValue: {
				default: false
			}
		}, 

		methods: {
			copyData() {
				let copyStr = `{\n`;

				for (let i = 0; i < this.data.length; i++) {
					let item = this.data[i];
					let paramKey = item.key;
					let paramValue = this.showValue == true ? item.value : '';
					let paramStr = '';

					paramStr = `\t${paramKey}: "${paramValue}"`;
					paramStr += i == this.data.length - 1 ? '' : ',';
					paramStr += `\n`;

					copyStr += paramStr;
				}

				copyStr += `}`;

				this.$utils.clipboard.copyText(copyStr);
			}
		}
	}
</script>

<style scoped>
	code {
		border-radius: 3px;
	}

	.api-params {
		margin-top: 20px;
	}

	.api-params h4 {
		margin: 0;
		margin-bottom: 10px;
	}

	.api-params h4 span {
		margin-right: 10px;
	}

	.api-params h4 .icon-copy {
		color: #409eff;
		cursor: pointer;
	}

	.tag-optional-params {
		margin-left: 4px;
	}
</style>