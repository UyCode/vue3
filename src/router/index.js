// 1.step one: define component
//import {Router, createRouter} from 'vue-router';
import ComponentBasics from "../components/ComponentBasics";
import HelloWorld from "../components/HelloWorld";
import * as Router from "vue-router";

// 2. define routs
const routes = [
    {path: '/', component: HelloWorld},
    {path: '/about', component: ComponentBasics},
];

export const router = new Router.createRouter(
    {
        "history": Router.createWebHashHistory(),
        routes, // this is short for `routes: routes`
    }
);
