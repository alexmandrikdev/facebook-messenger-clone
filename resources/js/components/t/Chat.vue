<template>
    <div class="flex flex-col flex-1 overflow-hidden">
        <chat-header
            :toggle-info-menu="toggleInfoMenu"
            :user="user"
            @close="$emit('close')"
        />

        <div class="overflow-y-auto flex-1">
            <user-info :user="user" />
        </div>
    </div>
</template>

<script>
import UserInfo from './chat/UserInfo.vue';
import ChatHeader from './ChatHeader.vue';

export default {
    components: { ChatHeader, UserInfo },
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
