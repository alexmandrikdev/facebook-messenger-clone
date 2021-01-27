import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router.js';

import t from './modules/t';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        t,
    },
    state: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    },
    mutations: {
        setIsAuthenticated(state, value) {
            localStorage.setItem('isAuthenticated', value);

            state.isAuthenticated = value;
        },
    },
    actions: {
        logout({ commit }) {
            axios.post('/logout').then(() => {
                commit('setIsAuthenticated', false);
            });

            router.push('/login');
        },
    },
});
