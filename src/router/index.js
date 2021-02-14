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
		component: () => import('../views/Todo.vue')
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: () => import('../components/Calendar.vue')
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
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
