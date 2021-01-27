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

export default {
    components: { Chat, InfoMenu, ConversationSelectorMenu },
    data() {
        return {
            infoMenuToggler: true,
        };
    },
    methods: {
        toggleInfoMenu() {
            this.infoMenuToggler = !this.infoMenuToggler;
        },
    },
};
</script>

<style scoped>
.border-black-opacity-10 {
    @apply border-black border-opacity-10;
}
</style>
