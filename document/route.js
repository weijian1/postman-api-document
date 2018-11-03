import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import MainLayout from './layout/MainLayout.vue'
import PageHome from './pages/Home.vue'
import PagePostmanTorial from './pages/PostmanTutorial.vue'
import PageGenerateDoc from './pages/GenerateDoc.vue'

const routes = [
	{ path: '/', redirect: '/home', component: MainLayout, children: [
		{ path: 'home', component: PageHome },
		{ path: 'postman-tutorial', component: PagePostmanTorial },
		{ path: 'generate-doc', component: PageGenerateDoc }
	]},
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;