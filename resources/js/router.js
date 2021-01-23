import Vue from 'vue';
import Router from 'vue-router';

import store from './store';

import Register from './views/Register.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/',
            component: function() {
                console.log(store.state);
                if (store.state.isAuthenticated) {
                    // return import('./views/Index.vue')
                } else {
                    return import('./views/Login.vue');
                }
            },
        },
    ],
});

export default router;
