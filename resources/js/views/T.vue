<template>
    <div class="flex flex-row h-screen">
        <div class="w-90"></div>
        <div
            class="w-screen-minus-w-90 flex flex-row border-l border-black border-opacity-10"
        >
            <div class="flex-1"></div>
            <div
                class="w-4/12 max-w-94.75 min-w-62.25 border-l border-black border-opacity-10"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout');
        },
    },
};
</script>

<style scoped>
.w-screen-minus-w-90 {
    width: calc(100vw - 22.5rem);
}
</style>
