<template>
    <div>
        <auth-layout>
            <form>
                <input
                    v-model="formData.email"
                    type="text"
                    placeholder="Email"
                />
                <input
                    v-model="formData.password"
                    type="password"
                    placeholder="Password"
                />
                <div class="flex">
                    <button type="submit">Log In</button>
                    <router-link
                        class="text-blue-500 underline font-semibold align-middle my-auto ml-5 text-sm"
                        to="#"
                        >Forgot your password?</router-link
                    >
                </div>
                <div class="flex mt-6 mb-5">
                    <div class="relative">
                        <input
                            v-model="formData.keepMeSignedIn"
                            class="opacity-0"
                            type="checkbox"
                        />
                        <div
                            class="w-4 h-4 border border-gray-300 rounded absolute top-1/2 right-0 transform -translate-y-1/2 -z-10"
                            :class="{
                                'bg-blue-500 border-blue-500':
                                    formData.keepMeSignedIn,
                            }"
                        >
                            <div
                                v-if="formData.keepMeSignedIn"
                                class="absolute h-3 w-1.2 border-b border-r border-white transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-55%"
                            ></div>
                        </div>
                    </div>
                    <label class="ml-3 my-auto text-sm text-gray-600"
                        >Keep me signed in</label
                    >
                </div>
            </form>
        </auth-layout>
    </div>
</template>

<script>
import AuthLayout from '../components/AuthLayout.vue';

export default {
    components: {
        AuthLayout,
    },
    data() {
        return {
            formData: {
                email: '',
                password: '',
                keepMeSignedIn: false,
            },
        };
    },
};
</script>

<style scoped></style>
