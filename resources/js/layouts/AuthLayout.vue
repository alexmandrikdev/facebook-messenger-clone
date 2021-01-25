<template>
    <div class="flex flex-col items-center">
        <img
            src="/images/logo.svg"
            class="mt-32 mb-14"
            alt="logo"
            width="75"
            height="75"
        />

        <div class="text-4xl text-center mb-11">
            Connect with your favorite people.
        </div>

        <slot></slot>

        <footer
            class="flex flex-wrap justify-center text-gray-800 mb-16.75 mt-18.25"
        >
            <router-link v-if="$route.path !== '/register'" to="/register"
                >Not on Messenger?</router-link
            >
            <router-link v-else to="/login"
                >Already have an account?</router-link
            >
            <router-link to="/forgot-password">Forgot Password?</router-link>
            <a href="https://www.facebook.com/about/privacy/">Data Policy</a>
            <a href="https://www.facebook.com/legal/terms/">Terms</a>
            <a href="https://www.facebook.com/policies/cookies/"
                >Cookies Policy</a
            >
            <div>© Facebook 2021</div>
        </footer>
    </div>
</template>

<script>
export default {};
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

form input.invalid {
    @apply border border-red-500;
}

form .invalid-feedback {
    @apply text-red-500 text-sm mb-3 -mt-3;
}

footer > a {
    @apply mx-5 outline-none hover:underline;
}
</style>
