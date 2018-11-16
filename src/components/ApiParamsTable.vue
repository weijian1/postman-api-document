<template>
	<div class="api-params" v-if="data">
	  <h4>{{ title }}</h4>
	  <el-table :data="data" border>
	    <el-table-column label="参数名">
	    	<template slot-scope="scope">
	    		<span v-html="scope.row.key"></span>
	    		<el-tag size="mini" class="tag-optional-params" v-if="scope.row.disabled && scope.row.disabled == true">可选</el-tag>
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

	.tag-optional-params {
		margin-left: 4px;
	}
</style>