import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Blogs/Home.vue';
import SympyDiffGeom_Module from '../Blogs/SympyDiffGeom_Module.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/sympyDiffGeom_module',
        name: 'SympyDiffGeom_Module',
        component: SympyDiffGeom_Module,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;