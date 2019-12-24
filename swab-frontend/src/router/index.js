import Vue from 'vue'
import VueRouter from 'vue-router'
import Cv from "../views/Cv";
import Home from '../views/Home.vue'
import Career from "../views/Career";
import StartOwn from "../views/StartOwn";
import NotFound from "../views/NotFound";
import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
    {
        path: '/404',
        name: 'notfound',
        component: NotFound
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {hideNavigation: true}
    }, {
        path: '/career',
        name: 'career',
        component: Career,
        meta: {hideNavigation: true}
    }, {
        path: '/startown',
        name: 'startown',
        component: StartOwn,
        meta: {hideNavigation: true}
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {hideNavigation: true}
    },
    {
        path: '/cv/:name',
        name: 'curriculum',
        component: Cv,
        meta: {hideNavigation: true},
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {selector: to.hash};
        }
        return {x: 0, y: 0};
    },
    base: process.env.BASE_URL,
    routes
});

export default router
