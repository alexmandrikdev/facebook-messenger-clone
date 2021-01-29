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
        authUser: JSON.parse(localStorage.getItem('authUser')),
    },
    mutations: {
        setIsAuthenticated(state, value) {
            localStorage.setItem('isAuthenticated', value);

            state.isAuthenticated = value;
        },
        setAuthUser(state, value) {
            localStorage.setItem('authUser', JSON.stringify(value));

            state.authUser = value;
        },
    },
    actions: {
        login({ commit }, authUser) {
            commit('setIsAuthenticated', true);
            commit('setAuthUser', authUser.data);

            router.push('/t');
        },
        logout({ commit }) {
            axios.post('/logout').then(() => {
                commit('setIsAuthenticated', false);
                commit('setAuthUser', null);

                router.push('/login');
            });
        },
    },
});
