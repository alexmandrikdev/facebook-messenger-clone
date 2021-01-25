<template>
    <div class="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <div class="h-37.5 w-37.5 flex justify-center items-center">
            <img src="/images/logo.svg" alt="logo" width="120" height="120" />
        </div>
        <div class="text-center mt-1.2 mb-10 mx-2">
            <div class="text-4xl mt-7.5 font-medium">
                This page isn't available
            </div>
            <div class="text-lg text-gray-500 mt-5">
                The link you followed may be broken, or the page may have been
                removed.
            </div>
        </div>
        <div class="flex flex-col sm:flex-row text-center">
            <router-link to="/"> Return to {{ origin }} </router-link>
            <a href="https://www.facebook.com/help/345021679200618">
                Visit our help center
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            origin: window.location.origin.split('//')[1],
        };
    },
};
</script>

<style scoped>
a {
    @apply py-3.625 px-7.5 bg-primary text-white m-2.5 rounded-6.25xl;
}
</style>
