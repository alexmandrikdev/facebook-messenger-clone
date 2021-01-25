<template>
    <div>
        <page-not-available v-if="!pageIsAvailable" />
        <div v-else class="h-screen flex flex-col justify-center items-center">
            <div class="h-30 flex justify-center items-center">
                <img src="/images/logo.svg" alt="logo" width="75" height="75" />
            </div>

            <div class="text-4xl text-center mt-6 mb-11">
                Connect with your favorite people.
            </div>

            <form class="flex flex-col justify-center" @submit.prevent="login">
                <input
                    v-model.trim.lazy="formData.email"
                    type="text"
                    name="email"
                    placeholder="Email"
                />

                <input
                    v-model.trim.lazy="formData.password"
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <div class="text-center mt-3">
                    <input
                        type="submit"
                        value="Continue"
                        class="bg-primary rounded-6.25xl text-white py-2.375 px-5 cursor-pointer outline-none"
                    />
                </div>

                <div class="flex mt-10 mb-5">
                    <div class="relative ml-auto">
                        <input
                            v-model="formData.keepMeSignedIn"
                            class="opacity-0"
                            type="checkbox"
                        />
                        <div
                            class="w-4 h-4 border border-gray-300 rounded absolute top-1/2 right-0 transform -translate-y-1/2 -z-10"
                            :class="{
                                'bg-primary border-primary':
                                    formData.keepMeSignedIn,
                            }"
                        >
                            <div
                                v-if="formData.keepMeSignedIn"
                                class="absolute h-3 w-1.2 border-b border-r border-white transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-55%"
                            ></div>
                        </div>
                    </div>
                    <label class="ml-3 mr-auto my-auto text-sm text-gray-400"
                        >Keep me signed in</label
                    >
                </div>
            </form>

            <footer
                class="flex flex-wrap justify-center text-gray-800 absolute bottom-16"
            >
                <router-link to="/register">Not on Messenger?</router-link>
                <router-link to="/forgot-password"
                    >Forgot Password?</router-link
                >
                <a href="https://www.facebook.com/about/privacy/"
                    >Data Policy</a
                >
                <a href="https://www.facebook.com/legal/terms/">Terms</a>
                <a href="https://www.facebook.com/policies/cookies/"
                    >Cookies Policy</a
                >
                <div>© Facebook 2021</div>
            </footer>
        </div>
    </div>
</template>

<script>
import PageNotAvailable from '../components/PageNotAvailable.vue';
import loginMixin from '../mixins/loginMixin';

export default {
    components: {
        PageNotAvailable,
    },
    mixins: [loginMixin],
    props: {
        incorrectFormValue: {
            type: String,
            default: null,
        },
        password: {
            type: String,
            default: null,
        },
    },
    computed: {
        pageIsAvailable() {
            if (this.password === 'password') {
                return (
                    ['email', 'password'].indexOf(this.incorrectFormValue) !==
                    -1
                );
            }
            return this.password === null;
        },
    },
    mounted() {
        if (!this.pageIsAvailable) {
            document.title = 'Messenger | Page Not Found';
        } else {
            document.title = 'Messenger';
        }
    },
};
</script>

<style scoped>
input[type='text'],
input[type='password'] {
    @apply px-4 text-lg border border-black border-opacity-20 rounded h-10.5 w-80 mb-3;
}

form input[type='text']:focus,
form input[type='password']:focus {
    @apply border border-primary outline-none;
}

form input[type='submit']:focus {
    box-shadow: 0 0 1px 2px rgba(88, 144, 255, 0.75),
        0 1px 1px rgba(0, 0, 0, 0.15);
}

footer > a {
    @apply mx-5;
}
</style>
