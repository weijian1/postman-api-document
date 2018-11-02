<template>
	<div class="api-params" v-if="data">
	  <h4>{{ title }}</h4>
	  <el-table :data="data" border>
	    <el-table-column prop="key" label="参数名"></el-table-column>
	    <el-table-column prop="value" label="值" v-if="showValue"></el-table-column>
	    <el-table-column label="描述">
	    	<template slot-scope="scope">
	    		<span v-html="scope.row.description"></span>
	    	</template>
	    </el-table-column>
	    <el-table-column prop="disabled" label="可选参数" width="80"></el-table-column>
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
</style>