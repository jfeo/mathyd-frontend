import Vue from 'vue';
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App.vue";
import router from "./router.js"

Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')