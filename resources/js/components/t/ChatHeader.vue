<template>
    <div
        class="h-16 flex flex-row items-center justify-between p-2.5"
        style="box-shadow: 0 0 4px rgba(0,0,0,.18);"
    >
        <div class="">Name</div>
        <div class="flex">
            <div class="w-7 h-7 m-2.5 cursor-pointer" @click="toggleInfoMenu">
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
</template>

<script>
export default {
    props: {
        toggleInfoMenu: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style scoped></style>
