<template>
    <vue-custom-scrollbar
        class="w-4/12 max-w-94.75 min-w-62.25 border-l border-black-opacity-10 overflow-y-auto flex-col"
        :class="[infoMenuToggler ? 'hidden md:flex' : 'flex md:hidden']"
    >
        <img
            src="/images/profile-picture-placeholder.png"
            :alt="[
                user ? `${user.first_name} ${user.last_name}` : `Facebook User`,
            ]"
            class="w-20 h-20 mx-auto mt-4 mb-2.75 rounded-full object-cover object-center"
        />

        <div class="text-4.25 font-semibold text-center leading-5 p-4 pt-0">
            <template v-if="user">
                {{ user.first_name }} {{ user.last_name }}
            </template>
            <template v-else>
                Facebook User
            </template>
        </div>
    </vue-custom-scrollbar>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import '../../../css/vue-custom-scrollbar.css';

export default {
    components: { vueCustomScrollbar },
    props: {
        infoMenuToggler: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped></style>
