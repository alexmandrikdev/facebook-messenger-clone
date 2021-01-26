<template>
    <div class="flex flex-row h-screen">
        <div class="w-22 md:w-90"></div>
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
