import Vue from 'vue'
import VueRouter from 'vue-router'
import EventsList from '../views/EventsList.vue'
import EventDetail from '../views/EventDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Eventslist',
    component: EventsList
  },
  {
    path: '/EventDetails/:id',
    name: 'EventDetail',
    component: EventDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
