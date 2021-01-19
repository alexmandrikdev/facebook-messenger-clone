import Vue from 'vue';
import Router from 'vue-router';

import Register from './views/Register.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/login',
            component: Login,
        },
    ],
});

export default router;
