import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './index.vue';
import About from './about.vue';
import conterParents from './conterParents.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/index', component: Index },
    { path: '/about', component: About },
    { path: '/conterParents', component: conterParents },
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
