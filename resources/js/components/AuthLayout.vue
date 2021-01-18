<template>
    <div>
        <header
            :class="{
                'border-b border-black border-opacity-10': !isAtTopOfPage,
            }"
            class="px-8 xl:px-0 h-24 w-full top-0 bg-clip-padding fixed z-50 bg-white bg-opacity-98"
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
            class="md:hidden mt-24"
            :menu-items="menuItems"
        />

        <!-- MAIN SECTION -->
        <section
            v-else
            class="container mx-auto mt-48 md:mt-32 lg:mt-64 flex flex-col lg:flex-row px-8 xl:px-0"
        >
            <div class="lg:w-1/2">
                <div
                    class="max-w-0.763889xl mx-auto lg:mx-0 text-left md:text-center lg:text-left"
                >
                    <div
                        id="hang-out"
                        class="text-5.833 lg:text-7xl bg-clip-text text-transparent font-semibold tracking-tighter pb-3 leading-13 lg:leading-21.25"
                    >
                        Hang out <br class="lg:hidden" />
                        anytime, anywhere
                    </div>

                    <div class="text-gray-600 text-lg mt-3">
                        Messenger makes it easy and fun to stay close to your
                        favorite people.
                    </div>

                    <slot></slot>
                </div>
            </div>
            <div class="max-w-0.91667xl md:w-110 lg:w-1/2 mx-auto lg:mx-0">
                <img
                    class="transform lg:translate-x-8 lg:-translate-y-12"
                    src="/images/auth-layout-image.png"
                />
            </div>
        </section>
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

<style scoped>
#hang-out {
    background-image: linear-gradient(
        83.84deg,
        #0088ff -6.87%,
        #a033ff 26.54%,
        #ff5c87 58.58%
    );
}
</style>
