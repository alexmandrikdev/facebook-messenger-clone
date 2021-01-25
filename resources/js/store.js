import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    },
    mutations: {
        setIsAuthenticated(state, value) {
            localStorage.setItem('isAuthenticated', value);

            state.isAuthenticated = value;
        },
    },
});
