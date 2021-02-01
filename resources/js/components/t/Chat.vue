<template>
    <div class="flex-1 overflow-hidden">
        <chat-header :toggle-info-menu="toggleInfoMenu" :user="user" />
    </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue';
export default {
    components: { ChatHeader },
    props: {
        toggleInfoMenu: {
            type: Function,
            required: true,
        },
        user: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style scoped></style>
