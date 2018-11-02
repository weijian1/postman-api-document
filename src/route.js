import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import MainLayout from './layout/MainLayout.vue'
import PageApiDoc from './pages/ApiDoc.vue'

const routes = [
	{ path: '/', redirect: '/api/doc', component: App },
	{ path: '/api', component: MainLayout, children: [
		{ path: 'doc', component: PageApiDoc }
	]}
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;