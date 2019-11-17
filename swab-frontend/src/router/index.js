import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Consults from "../components/Consults";
import Career from "../views/Career";
import StartOwn from "../views/StartOwn";

Vue.use(VueRouter);

const routes = [
  {
    path:'/404',
    name:'NotFound',
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { hideNavigation: true }
  },{
    path: '/career',
    name: 'Career',
    component: Career,
    meta: { hideNavigation: true }
  },{
    path: '/startown',
    name: 'StartOwn',
    component: StartOwn,
    meta: { hideNavigation: true }
  },
  {
    path: '/consults', // :name
    name: 'Consults',
    component: Consults,
    meta: { hideNavigation: true }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router
