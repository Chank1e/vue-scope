import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/getter',
    name: 'Getter',
    component: () => import('@/views/Getter.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('@/views/Computed.vue')
  },
  {
    path: '/performance-computed',
    name: 'PerformanceComputed',
    component: () => import('@/views/PerformanceTestComputed.vue')
  },
  {
    path: '/performance-getter',
    name: 'PerformanceGetter',
    component: () => import('@/views/PerformanceTestGetter.vue')
  },
  {
    path: '/scope',
    name: 'Scope',
    component: () => import('@/views/ScopeTest.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
