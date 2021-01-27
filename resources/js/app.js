require('./bootstrap');

import Vue from 'vue';
import router from './router';
import store from './store/index';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
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

Vue.use(VueApollo);

const authLink = setContext((_, { headers }) => {
    let token = RegExp('XSRF-TOKEN[^;]+').exec(document.cookie);
    token = decodeURIComponent(
        token ? token.toString().replace(/^[^=]+./, '') : '',
    );
    return {
        headers: {
            ...headers,
            'X-XSRF-TOKEN': token,
        },
    };
});

const httpLink = createHttpLink({
    uri: '/graphql', // The graphql endpoint url
    credentials: 'same-origin',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

// Create the provider for Vue
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

// Initialize vue instance
new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App),
}).$mount('#app');
