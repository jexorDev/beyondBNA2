import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Hotels from './components/Hotels.vue'

const routes = [
    { path: '/test', component: HelloWorld },
    { path: '/hotels', component: Hotels },

  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
