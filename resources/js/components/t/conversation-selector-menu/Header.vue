<template>
    <div class="flex mx-4 mt-5 mb-3 h-9">
        <img
            src="/images/profile-picture-placeholder.png"
            alt="profile picture"
            class="w-9 rounded-full object-cover object-center cursor-pointer md:cursor-auto"
            @click="isMobileOptionsMenuOpen = !isMobileOptionsMenuOpen"
        />

        <div class="text-2xl font-bold ml-3">Chats</div>

        <div
            v-click-outside="dropDownClickedOutside"
            class="relative ml-auto w-9"
        >
            <div
                class="w-full h-full bg-gray-100 rounded-full hidden md:flex cursor-pointer hover:bg-gray-200"
                @click="isDropDownOpen = !isDropDownOpen"
            >
                <svg
                    viewBox="0 0 36 36"
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    height="28"
                    width="28"
                >
                    <path
                        d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    ></path>
                </svg>
            </div>

            <header-drop-down v-if="isDropDownOpen" />
        </div>

        <div
            class="ml-3 w-9 bg-gray-100 rounded-full flex cursor-pointer hover:bg-gray-200"
        >
            <svg viewBox="0 0 36 36" height="28" width="28" class="m-auto">
                <path
                    d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"
                ></path>
                <path
                    d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"
                ></path>
            </svg>
        </div>

        <mobile-options-menu
            :is-open="isMobileOptionsMenuOpen"
            @close="isMobileOptionsMenuOpen = false"
        />
    </div>
</template>

<script>
import MobileOptionsMenu from './header/MobileOptionsMenu.vue';
import HeaderDropDown from './HeaderDropDown.vue';

export default {
    components: { HeaderDropDown, MobileOptionsMenu },
    data() {
        return {
            isDropDownOpen: false,
            isMobileOptionsMenuOpen: false,
        };
    },
    methods: {
        dropDownClickedOutside() {
            this.isDropDownOpen = false;
        },
    },
};
</script>

<style scoped></style>
