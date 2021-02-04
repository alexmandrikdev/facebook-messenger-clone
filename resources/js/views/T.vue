<template>
    <div class="flex flex-row h-screen overflow-hidden relative">
        <conversation-selector-menu
            class="absolute md:static z-20 bg-white top-0 bottom-0 transition-positioning"
            :class="[
                displayedSectionOnMobile === 'conversation-selector-menu'
                    ? 'left-0'
                    : '-left-full',
            ]"
        />
        <div
            class="md:flex-1 bg-white flex-row border-l border-black-opacity-10 md:flex z-10 w-full md:w-auto relative md:static top-0 right-0 left-0 bottom-0 transition-positioning"
        >
            <chat
                :toggle-info-menu="toggleInfoMenu"
                :user="user"
                @close="$router.push('/t')"
            />

            <info-menu
                :user="user"
                class="bg-white absolute md:static top-0 bottom-0 md:w-4/12 md:max-w-94.75 md:min-w-62.25 md:border-l md:border-black-opacity-10 transition-positioning"
                :class="[
                    infoMenuToggler
                        ? 'md:flex -right-full'
                        : 'md:hidden left-0 right-0',
                ]"
                @close="infoMenuToggler = !infoMenuToggler"
            />
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
            displayedSectionOnMobile: this.calcDisplayedSectionOnMobile(),
        };
    },
    watch: {
        id: function() {
            this.fetchUser();
            this.$store.commit('updateSearchInputValue', null);

            this.displayedSectionOnMobile = this.calcDisplayedSectionOnMobile();
        },
    },
    mounted() {
        this.fetchUser();
    },
    methods: {
        toggleInfoMenu() {
            this.infoMenuToggler = !this.infoMenuToggler;
        },
        fetchUser() {
            if (this.id) {
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
            }
        },
        calcDisplayedSectionOnMobile() {
            return this.id === null ? 'conversation-selector-menu' : 'chat';
        },
    },
};
</script>

<style scoped>
.border-black-opacity-10 {
    @apply border-black border-opacity-10;
}
</style>
