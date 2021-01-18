<template>
    <div>
        <header
            :class="{
                'border-b border-black border-opacity-10 fixed': !isAtTopOfPage,
            }"
            class="h-24 w-full px-8 xl-px-0 top-0 transition-transform"
        >
            <div class="container mx-auto h-full flex items-center">
                <router-link to="/">
                    <img
                        src="/images/logo.png"
                        alt="messenger logo"
                        class="h-10"
                    />
                </router-link>
                <div class="ml-auto hidden md:flex font-semibold nav">
                    <router-link
                        v-for="(menuItem, index) in menuItems.filter(
                            menuItem => menuItem.show,
                        )"
                        :key="index"
                        class="cursor-pointer relative ml-8"
                        :to="menuItem.to"
                    >
                        {{ menuItem.label }}
                    </router-link>
                </div>
                <base-hamburger-button
                    class="md:hidden ml-auto"
                    :is-open="isMenuOpen"
                    @click="onMenuButtonClicked"
                />
            </div>
        </header>

        <auth-layout-mobile-menu
            v-if="isMenuOpen"
            class="md:hidden"
            :menu-items="menuItems"
        />

        <div v-else class="container mx-auto" style="height:3000px">
            Content
        </div>
    </div>
</template>

<script>
import AuthLayoutMobileMenu from './AuthLayoutMobileMenu.vue';
import BaseHamburgerButton from './BaseHamburgerButton.vue';
export default {
    components: {
        BaseHamburgerButton,
        AuthLayoutMobileMenu,
    },
    data() {
        return {
            topOfPage: 35,
            isAtTopOfPage: true,
            isMenuOpen: false,
            menuItems: [
                {
                    show: this.$route.path !== '/login',
                    to: '/login',
                    label: 'Login',
                },
                {
                    show: this.$route.path !== '/register',
                    to: '/register',
                    label: 'Register',
                },
                {
                    show: true,
                    to: '/#',
                    label: 'Rooms',
                },
                {
                    show: true,
                    to: '/#',
                    label: 'Features',
                },
                {
                    show: true,
                    to: '/#',
                    label: 'Privacy & Safety',
                },
                {
                    show: true,
                    to: '/#',
                    label: 'For Developers',
                },
            ],
        };
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isAtTopOfPage = window.pageYOffset <= this.topOfPage;
        },
        onMenuButtonClicked() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped></style>
