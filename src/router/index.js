// default
import Vue from 'vue'
import Router from 'vue-router'

// Pages
import MainPage from '../pages/MainPage.vue'
import NotFound from '../pages/404.vue'

Vue.use(Router)

// Routering
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: MainPage,
		},
		{
			path: '*',
			name: 'NotFound',
			component: NotFound,
		},
	],
})
