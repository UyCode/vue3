import {createApp} from 'vue'
import VueAxios from 'vue-axios'
//import ElementPlus from 'element-plus';
import * as ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from "axios";

const app = createApp(App).use(ElementPlus, VueAxios, axios)

app.mount('#app')

//createApp(App).use(Axios).mount('#app')
/* 
const vm = app.mount('#app');
console.log(vm, "created"); */

/* console.log(vm.message);
console.log(vm.count);
console.log(vm.$emit);
 */
