import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import mianApp from './mianApp.vue'


// 引入样式表
import './assets/css/normalize.css'
import './assets/css/mdCode.css'
import routes from './assets/js/router.js'


//开启debug模式
Vue.config.debug = true;

// 注册
Vue.use(VueRouter);
Vue.use(VueResource);

// 创建一个路由器实例，并且配置路由规则
const router = new VueRouter({
  mode: 'history', 
  base: __dirname,//格式路径#
  routes: routes
})

// 路由器会创建一个 mianApp 实例，并且挂载到选择符.$mount() #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(mianApp) 
}).$mount('#app') //将App组件渲染到index.html，id=#app的div里面

