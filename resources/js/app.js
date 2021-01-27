require('./bootstrap');

import Vue from 'vue';
import router from './router';
import store from './store/index';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import Vuelidate from 'vuelidate';
import BaseHamburgerButton from './components/BaseHamburgerButton.vue';

Vue.component('BaseHamburgerButton', BaseHamburgerButton);

Vue.use(Vuelidate);

Vue.directive('click-outside', {
    bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind: function(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
});

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
