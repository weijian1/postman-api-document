import clipboard from './clipboard'

let utils = {
	clipboard
}

export default {
	install: (Vue, options) => {
		Vue.prototype.$utils = utils;
	}
};
