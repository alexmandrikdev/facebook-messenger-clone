<template>
    <div class="flex flex-col flex-1 overflow-hidden">
        <chat-header :toggle-info-menu="toggleInfoMenu" :user="user" />

        <div class="overflow-y-auto flex-1">
            <div class="mt-5">
                <img
                    src="/images/profile-picture-placeholder.png"
                    :alt="[
                        user
                            ? `${user.first_name} ${user.last_name}`
                            : `${$store.state.authUser.first_name} ${$store.state.authUser.last_name}`,
                    ]"
                    class="w-15 h-15 mx-auto rounded-full object-cover object-center"
                />

                <div class="text-4.25 font-semibold text-center mt-1">
                    <template v-if="user">
                        {{ user.first_name }} {{ user.last_name }}
                    </template>
                    <template v-else>
                        Facebook User
                    </template>
                </div>
            </div>
        </div>
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
