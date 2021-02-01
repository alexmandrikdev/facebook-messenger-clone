<template>
    <div class="flex flex-row h-screen">
        <conversation-selector-menu />
        <div
            class="flex-1 flex-row border-l border-black-opacity-10 hidden md:flex"
        >
            <chat :toggle-info-menu="toggleInfoMenu" />

            <info-menu :info-menu-toggler="infoMenuToggler" />
        </div>
    </div>
</template>

<script>
import Chat from '../components/t/Chat.vue';
import ConversationSelectorMenu from '../components/t/ConversationSelectorMenu.vue';
import InfoMenu from '../components/t/InfoMenu.vue';
import gql from 'graphql-tag';

export default {
    components: { Chat, InfoMenu, ConversationSelectorMenu },
    beforeRouteUpdate(to, from, next) {
        this.fetchUser();
        next();
    },
    props: {
        id: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            infoMenuToggler: true,
            user: null,
        };
    },
    mounted() {
        this.fetchUser();
    },
    methods: {
        toggleInfoMenu() {
            this.infoMenuToggler = !this.infoMenuToggler;
        },
        fetchUser() {
            this.$apollo
                .query({
                    query: gql`
                        query fetchUser($id: ID!) {
                            user(id: $id) {
                                first_name
                                last_name
                            }
                        }
                    `,
                    variables: {
                        id: this.id,
                    },
                })
                .then(response => {
                    this.user = response.data.user;
                });
        },
    },
};
</script>

<style scoped>
.border-black-opacity-10 {
    @apply border-black border-opacity-10;
}
</style>
