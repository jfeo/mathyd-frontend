import VueRouter from 'vue-router';

import Home from './components/Home.vue';

const routes = [
    {
        path: '/',
        component: Home
    }
]

export default new VueRouter({
    routes
});