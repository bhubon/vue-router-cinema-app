import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import("../views/HomeView.vue")
const AboutView = () => import('../views/AboutView.vue')
const MoviesView = () => import('../views/MoviesView.vue')
const NotFound = () => import('../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
