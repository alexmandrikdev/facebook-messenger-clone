import Vue from 'vue';
import Router from 'vue-router';

import store from './store';

import Register from './views/Register.vue';
import Index from './views/Index.vue';
import Login from './views/Login.vue';
import T from './views/T.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: Register,
            meta: {
                onlyForUnauthenticated: true,
            },
        },
        {
            path: '/',
            component: Index,
            meta: {
                onlyForUnauthenticated: true,
            },
        },
        {
            path: '/t',
            component: T,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/login/:password?',
            name: 'login',
            component: Login,
            props: true,
            meta: {
                onlyForUnauthenticated: true,
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (
        to.matched.some(record => record.meta.onlyForUnauthenticated) &&
        store.state.isAuthenticated
    ) {
        next({
            path: '/t',
        });
    }

    if (
        to.matched.some(
            record => record.meta.requiresAuth && !store.state.isAuthenticated,
        )
    ) {
        next({
            path: '/',
        });
    }

    next();
});

export default router;
