import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/todo',
		name: 'todo',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Todo.vue')
	},
	{
		path: '/calendar',
		name: 'Calendar',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../components/Calendar.vue')
	},
	{
		path: '/markdown',
		name: 'Markdown',
		component: () => import('../views/Markdown.vue')
	},
	{
		path: '/slider',
		name: 'Slider',
		component: () => import('../views/Slider.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
