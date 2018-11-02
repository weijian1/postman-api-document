import Vue from 'vue'
import ApiRequest from './request'

let apiList = {
	api: {
		doc(url, data) {
			return ApiRequest.sendRequest(ApiRequest.METHOD_GET, url, data);
		}
	}
};

export default {
	install: (Vue, options) => {
		Vue.prototype.$api = apiList;
	}
};
