<template>
    <div class="px-3 pt-5 pb-2.5">
        <img
            src="/images/profile-picture-placeholder.png"
            :alt="[
                user ? `${user.first_name} ${user.last_name}` : 'Facebook User',
            ]"
            class="w-15 h-15 mx-auto rounded-full object-cover object-center"
        />

        <div class="text-4.25 font-semibold text-center mt-1.75 leading-5">
            <template v-if="user">
                {{ user.first_name }} {{ user.last_name }}
            </template>
            <template v-else>
                Facebook User
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style scoped></style>
