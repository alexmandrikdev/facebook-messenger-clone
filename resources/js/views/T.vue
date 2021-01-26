<template>
    <div>
        Index
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

<style scoped></style>
