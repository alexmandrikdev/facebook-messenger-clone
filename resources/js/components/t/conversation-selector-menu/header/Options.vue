<template>
    <div>
        <div
            class="mx-2 p-2 flex rounded hover:bg-gray-100 cursor-pointer"
            @click="logout"
        >
            <svg
                viewBox="0 0 36 36"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
                height="24"
                width="24"
            >
                <path
                    d="M21.498 14.75a1 1 0 001-1V12a4 4 0 00-4-4h-6.5a4 4 0 00-4 4v12a4 4 0 004 4h6.5a4 4 0 004-4v-1.75a1 1 0 00-1-1h-.5a1 1 0 00-1 1V24a1.5 1.5 0 01-1.5 1.5h-6.5a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6.5a1.5 1.5 0 011.5 1.5v1.75a1 1 0 001 1h.5z"
                ></path>
                <path
                    d="M14.498 16.75h9.752a.25.25 0 00.25-.25v-1.858a1 1 0 011.642-.766l4.002 3.356a1 1 0 010 1.532l-4.002 3.357a1 1 0 01-1.642-.767V19.5a.25.25 0 00-.25-.25h-9.752a1 1 0 01-1-1v-.5a1 1 0 011-1z"
                ></path>
            </svg>
            <div>Log out</div>
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

<style scoped></style>
