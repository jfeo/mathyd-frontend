import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Assignment from './components/Assignment.vue';
import AssignmentNew from './components/AssignmentNew.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/assignment/new',
        component: AssignmentNew
    },
    {
        path: '/assignment/:assignmentId',
        component: Assignment,
        name: 'assignment',
        props: true
    }
]

export default new VueRouter({
    routes
});