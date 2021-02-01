<template>
    <div>
        <img
            src="/images/profile-picture-placeholder.png"
            :alt="[
                user
                    ? `${user.first_name} ${user.last_name}`
                    : `${$store.state.authUser.first_name} ${$store.state.authUser.last_name}`,
            ]"
            class="w-15 h-15 mx-auto rounded-full object-cover object-center"
        />

        <div class="text-4.25 font-semibold text-center mt-1">
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
export default {};
</script>

<style scoped></style>
