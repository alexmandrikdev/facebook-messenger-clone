<template>
    <div
        class="md:hidden absolute top-0 right-0 h-screen bg-white z-10 overflow-hidden transition-width duration-500"
        :class="[isOpen ? 'w-screen' : 'w-0']"
    >
        <Header @click="$emit('close')" />

        <div
            style="height: calc(100vh - 52px)"
            class="overflow-scroll flex flex-col items-center w-screen mt-3"
        >
            <img
                src="/images/profile-picture-placeholder.png"
                alt="profile picture"
                class="w-20 h-20 rounded-full object-contain object-center"
            />

            <div class="mt-3 font-bold text-lg">
                {{ $store.state.authUser.first_name }}
                {{ $store.state.authUser.last_name }}
            </div>

            <div class="w-full mt-3">
                <options />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './mobile-options-menu/Header.vue';
import Options from './Options.vue';

export default {
    components: { Header, Options },
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped></style>
