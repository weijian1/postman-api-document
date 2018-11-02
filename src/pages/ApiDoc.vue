<template>
	<div>
		<div class="api-item-wrapper" v-if="currentApiDocItem != null">
			<h3 class="title">{{ currentApiDocItem.name }}</h3>
			<div class="description" v-if="currentApiDocItem.request.description" v-html="currentApiDocItem.request.description"></div>

			<ApiUrlGroup :method="currentApiDocItem.request.method" :url="currentApiDocItem.request.url"></ApiUrlGroup>

			<ApiParamsTable title="请求参数 (Request Params)" :data="requestParams"></ApiParamsTable>
			<ApiParamsTable :title="`请求体 (Request Body) (` + currentApiDocItem.request.body.mode + ')'" 
							:data="getRequestBody()"></ApiParamsTable>


			<div class="response-demo" v-if="currentApiDocItem.response.length > 0">
				<h4>Demo</h4>
				<el-tabs type="border-card">
				  <el-tab-pane :label="example.name" v-for="(example, index) in currentApiDocItem.response" :key="index">
				  	<h3>{{ example.name }}</h3>
				  	<ApiUrlGroup :method="example.originalRequest.method" :url="example.originalRequest.url"></ApiUrlGroup>
				  	<ApiParamsTable title="请求参数 (Request Params)" :data="example.originalRequest.url.query" :showValue="true"></ApiParamsTable>
				  	<ApiParamsTable :title="`请求体 (Request Body) (` + example.originalRequest.body.mode + ')'" 
							:data="getRequestBody(example.originalRequest.body)" :showValue="true"></ApiParamsTable>

					<div class="response-data">
						<ApiCodeData :data="example.body" :dataType="example._postman_previewlanguage" title="返回数据"></ApiCodeData>
					</div>
				  </el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import ApiParamsTable from './../components/ApiParamsTable'
	import ApiUrlGroup from './../components/ApiUrlGroup'
	import ApiCodeData from './../components/ApiCodeData'

	export default {
		data() {
			return {

			}
		},

		components: {
			ApiParamsTable,
			ApiUrlGroup,
			ApiCodeData
		},

		mounted() {
			(async () => {
				await this.$store.dispatch('doGetApiDoc');
			})();
		},

		methods: {
			getRequestBody(body = this.currentApiDocItem.request.body) {
				if (body.mode && 
					body[body.mode].length > 0) {
					return body[body.mode];
				}

				return null;
			}
		},

		computed: {
			currentApiDocItem() {
				let currentApiDocItem = this.$store.state.ApiDoc.currentApiDocItem;
				return currentApiDocItem;
			},

			requestParams() {
				return this.currentApiDocItem.request.url.query;
			}
		}
	}
</script>

<style scoped>
	.api-item-wrapper .title {
		margin-top: 0;
	}
</style>