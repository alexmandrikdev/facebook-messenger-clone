import Vue from 'vue';
import Router from 'vue-router';

import Register from './views/Register.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: Register,
        },
    ],
});

export default router;
