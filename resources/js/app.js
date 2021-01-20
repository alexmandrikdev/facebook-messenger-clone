require('./bootstrap');

import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import Vuelidate from 'vuelidate';
import BaseHamburgerButton from './components/BaseHamburgerButton.vue';

Vue.component('BaseHamburgerButton', BaseHamburgerButton);

Vue.use(Vuelidate);

const apolloClient = new ApolloClient({
    uri: process.env.MIX_GRAPHQL_URL,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App),
}).$mount('#app');
