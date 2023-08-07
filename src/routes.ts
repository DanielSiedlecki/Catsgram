import Home from './components/Home.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes: Array<any> = [

    {
        path: '/',
        component: Home,
        name: 'Home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'exact-active-link',
    routes
})

export default router