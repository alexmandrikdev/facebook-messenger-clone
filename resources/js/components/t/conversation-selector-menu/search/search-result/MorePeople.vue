<template>
    <ul class="px-2 w-full">
        <div class="px-2 pb-0.5 text-3.75 font-bold text-gray-500">
            More People
        </div>
        <li v-for="people in morePeople" :key="people.id">
            <router-link
                :to="{ name: 't', params: { id: people.id } }"
                class="hover:bg-gray-200 p-2 rounded-lg flex items-center w-full"
            >
                <img
                    src="/images/profile-picture-placeholder.png"
                    class="w-9 h-9 object-cover object-center rounded-full mr-3"
                    :alt="people.first_name + ' ' + people.last_name"
                />
                <div class="text-3.75 truncate flex-1">
                    {{ people.first_name }} {{ people.last_name }}
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        morePeople: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
