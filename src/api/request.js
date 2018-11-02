import Axios from 'axios'

Axios.defaults.baseURL = '//' + window.location.host;

export default {
	METHOD_GET: 'get',
	METHOD_POST: 'post',
	METHOD_PATCH: 'patch',
	METHOD_DELETE: 'delete',

	sendRequest(type, url, data = {}, config = {}) {
		return new Promise((resolve, reject) => {
			if (! (type == this.METHOD_GET ||
				type == this.METHOD_POST ||
				type == this.METHOD_PATCH || 
				type == this.METHOD_DELETE)) {
				return false;
			}

			if (type == this.METHOD_GET || type == this.METHOD_DELETE) {
				config.params = data;
			} else {
				config = data;
			}

			Axios[type](url, config).then((resp) => {
				resolve(resp.data);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}