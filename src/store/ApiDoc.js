const state = {
	apiDocInfo: {},
	apiDocList: [],

	currentApiDocItem: null
}

const mutations = {
	setApiDocData(state, data) {
		state.apiDocInfo = data.info;
		state.apiDocList = data.item;
	},
	setCurrentApiDoc(state, data) {
		state.currentApiDocItem = data;
	}
}

const actions = {
	doGetApiDoc(context) {
		return this._vm.$api.api.doc('static/collection.json').then(resp => {
			context.commit('setApiDocData', resp);
		});
	},

	doSetCurrentApiDoc(context, data) {
		context.commit('setCurrentApiDoc', data);
	}
}

export default {
	state,
	mutations,
	actions
}