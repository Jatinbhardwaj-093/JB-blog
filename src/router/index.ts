import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../Blogs/Home.vue';
import Sympy3DPolygon_Module from '../Blogs/Sympy3DPolygon_Module.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/sympy3dpolygon_module',
        name: 'Sympy3DPolygon_Module',
        component: Sympy3DPolygon_Module,
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;