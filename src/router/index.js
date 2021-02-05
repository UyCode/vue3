// 1.step one: define component
//import {Router, createRouter} from 'vue-router';
import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Todo')
    }
]

const router = createRouter({
    'history': createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})

export default router