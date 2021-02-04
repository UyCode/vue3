import {createApp} from 'vue'
import VueAxios from 'vue-axios'
import router from './router/index';
//import * as Router from 'vue-router'
//import ElementPlus from 'element-plus';
import * as ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from "axios";

const app = createApp(App)
app.use(ElementPlus, VueAxios, axios, router)
app.mount('#app')

//createApp(App).use(Axios).mount('#app')
/* 
const vm = app.mount('#app');
console.log(vm, "created"); */

/* console.log(vm.message);
console.log(vm.count);
console.log(vm.$emit);
 */