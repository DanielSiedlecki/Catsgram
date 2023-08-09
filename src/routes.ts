import Home from './components/Home.vue'
import SearchComponent from './components/SearchComponent.vue'
import MyProfileComponent from './components/MyProfileComponent.vue'
import SectionIsBuilding from './components/Elements/SectionIsBuilding.vue'
import { createRouter, createWebHistory } from "vue-router";


const routes: Array<any> = [

    {
        path: '/',
        component: Home,
        name: 'Home'
    },

    {
        path: '/search',
        component: SearchComponent,
        name: 'Search'
    },

    {
        path: '/myprofile',
        component: MyProfileComponent,
        name: 'MyProfile'
    },
    {
        path: '/reels',
        component: SectionIsBuilding,
        name: 'Reels'
    },
    {
        path: '/newpost',
        component: SectionIsBuilding,
        name: 'New Post'
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'exact-active-link',
    routes
})

export default router