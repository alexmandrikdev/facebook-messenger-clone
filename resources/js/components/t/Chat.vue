<template>
    <div class="flex-1 overflow-hidden">
        <chat-header :toggle-info-menu="toggleInfoMenu" />
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
    },
};
</script>

<style scoped></style>
