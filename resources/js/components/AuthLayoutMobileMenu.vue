<template>
    <div class="w-full">
        <div
            v-for="(menuItem, index) in menuItems.filter(
                menuItem => menuItem.show,
            )"
            :key="index"
            class="bg-gray-50 py-8 pl-10 text-3xl font-semibold text-gray-500 mt-2.5"
        >
            <router-link class="relative hover:text-black" :to="menuItem.to">
                {{ menuItem.label }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
