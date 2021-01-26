<template>
    <div
        class="w-4/12 max-w-94.75 min-w-62.25 border-l border-black-opacity-10"
        :class="[infoMenuToggler ? 'hidden md:flex' : 'flex md:hidden']"
    ></div>
</template>

<script>
export default {
    props: {
        infoMenuToggler: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped></style>
