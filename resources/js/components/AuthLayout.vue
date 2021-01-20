<template>
    <div>
        <header
            :class="{
                'border-b border-black border-opacity-10 fixed': !isAtTopOfPage,
            }"
            class="px-8 xl:px-0 h-24 w-full top-0 bg-clip-padding z-50 bg-white bg-opacity-98"
        >
            <div class="container mx-auto h-full flex items-center">
                <router-link to="/">
                    <img
                        src="/images/logo.png"
                        alt="messenger logo"
                        class="h-10"
                    />
                </router-link>
                <div class="ml-auto hidden md:flex font-semibold">
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

        <template v-else>
            <!-- MAIN SECTION -->
            <section
                class="container mx-auto flex flex-col lg:flex-row px-8 xl:px-0"
                :class="[
                    !isAtTopOfPage
                        ? 'mt-48 md:mt-32 lg:mt-64'
                        : 'mt-24 md:mt-8 lg:mt-40',
                ]"
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

                        <div class="text-gray-600 text-lg mt-3 mb-20 lg:mb-10">
                            Messenger makes it easy and fun to stay close to
                            your favorite people.
                        </div>

                        <slot></slot>
                    </div>
                </div>
                <div
                    class="max-w-0.91667xl lg:max-w-none md:w-110 lg:w-1/2 mx-auto lg:mx-0 lg:flex lg:items-center"
                >
                    <img
                        class="transform lg:translate-x-8 lg:-translate-y-20"
                        src="/images/auth-layout-image.png"
                    />
                </div>
            </section>

            <footer
                class="text-center text-sm mt-16 py-5 px-7.5 lg:flex lg:justify-center lg:items-center"
            >
                <strong class="lg:pr-6">© Facebook 2021.</strong>
                <div class="flex justify-center mt-5 mb-2.5 lg:m-0 lg:px-6">
                    <a
                        class="px-6"
                        target="__blank"
                        href="https://www.facebook.com/policy.php"
                        >Data Policy</a
                    >
                    <a
                        class="px-6"
                        target="__blank"
                        href="https://www.facebook.com/policies/?ref=pf"
                        >Terms</a
                    >
                </div>
                <img
                    class="mx-auto lg:mx-0 max-w-1.041667xl h-full"
                    src="/images/from-facebook.jpg"
                    alt="From Facebook"
                />
            </footer>
        </template>
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

form {
    @apply lg:w-80;
}

form input[type='text'],
form input[type='password'] {
    @apply bg-gray-100 h-9 mb-3 py-2 px-4 text-lg w-full rounded-1.25xl;
}

form button[type='submit'] {
    @apply bg-blue-500 font-bold rounded-3xl mt-5 mb-3 text-white px-5 py-2.5 hover:bg-blue-600 transition duration-200;
}

form input.invalid {
    @apply border border-red-500;
}

form .invalid-feedback {
    @apply text-red-500 text-sm mb-3 -mt-3;
}
</style>
