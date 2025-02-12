import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CellularView from '@/views/CellularView.vue'
import FwaView from '../views/FwaView.vue'
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/fwa/add",
      name: 'add-fwa',
      component: FwaView,
    },
    {
      path: "/cellular/add",
      name: 'add-cellular',
      component: CellularView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
})

export default router
