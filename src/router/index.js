import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue'
import Photos from '../views/Photos.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/photos',
        name: 'Photos',
        component: Photos,
    },
    {
        path: '/photos/:id',
        name: 'PhotosId',
        component: Photos,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router