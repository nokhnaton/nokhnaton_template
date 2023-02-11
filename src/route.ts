import { createRouter, createWebHashHistory } from 'vue-router'
import CalenderVue from './components/Calender.vue'
import graphRenderVue from './components/graphRender.vue'
import HelloWorld from './components/HelloWorld.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    }
  ]
})
