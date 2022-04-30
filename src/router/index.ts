import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/About',
        name: 'About',
        meta: {
            title: 'About',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/About.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/Home.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
