<template>
    <div class="flex flex-row h-screen">
        <div class="w-22 md:w-90">
            <div class="flex mx-4 mt-5 mb-3 h-9">
                <img
                    src="/images/profile-picture-placeholder.png"
                    alt="profile picture"
                    class="w-9 rounded-full object-contain object-center"
                />

                <div class="text-2xl font-bold ml-3">Chats</div>

                <div
                    class="ml-auto w-9 bg-gray-100 rounded-full flex cursor-pointer hover:bg-gray-200"
                >
                    <svg
                        viewBox="0 0 36 36"
                        class="m-auto"
                        height="28"
                        width="28"
                    >
                        <path
                            d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        ></path>
                    </svg>
                </div>

                <div
                    class="ml-3 w-9 bg-gray-100 rounded-full flex cursor-pointer hover:bg-gray-200"
                >
                    <svg
                        viewBox="0 0 36 36"
                        height="28"
                        width="28"
                        class="m-auto"
                    >
                        <path
                            d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"
                        ></path>
                        <path
                            d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-row border-l border-black-opacity-10">
            <div class="flex-1 overflow-hidden">
                <div
                    class="h-16 flex flex-row items-center justify-between p-2.5"
                    style="box-shadow: 0 0 4px rgba(0,0,0,.18);"
                >
                    <div class="">Name</div>
                    <div class="flex">
                        <div
                            class="w-7 h-7 m-2.5 cursor-pointer"
                            @click="toggleInfoMenu"
                        >
                            <div class="w-7 h-7 rounded-full bg-blue-100">
                                <svg
                                    class=""
                                    role="presentation"
                                    height="28px"
                                    width="28px"
                                    fill="#0099FF"
                                    viewBox="0 0 36 36"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm1.75-16.25a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM16.5 17.5a1 1 0 011-1h1a1 1 0 011 1V24a1 1 0 01-1 1h-1a1 1 0 01-1-1v-6.5z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- INFO MENU -->
            <div
                class="w-4/12 max-w-94.75 min-w-62.25 border-l border-black-opacity-10"
                :class="[infoMenuToggler ? 'hidden md:flex' : 'flex md:hidden']"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infoMenuToggler: true,
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        },
        toggleInfoMenu() {
            this.infoMenuToggler = !this.infoMenuToggler;
        },
    },
};
</script>

<style scoped>
.border-black-opacity-10 {
    @apply border-black border-opacity-10;
}
</style>
