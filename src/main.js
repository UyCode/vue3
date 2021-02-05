import {createApp} from 'vue'
import store from './store'
import router from './router';
import * as ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import './plugins/axios'

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount("#app");


/*const app = createApp(App)
app.use(ElementPlus, VueAxios, axios, router)
app.mount('#app')*/

//createApp(App).use(Axios).mount('#app')
/* 
const vm = app.mount('#app');
console.log(vm, "created"); */

/* console.log(vm.message);
console.log(vm.count);
console.log(vm.$emit);
 */