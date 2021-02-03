<template>
    <vue-custom-scrollbar
        class="w-4/12 max-w-94.75 min-w-62.25 border-l border-black-opacity-10 overflow-y-auto flex-col"
        :class="[infoMenuToggler ? 'hidden md:flex' : 'flex md:hidden']"
    >
    </vue-custom-scrollbar>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar';
import '../../../css/vue-custom-scrollbar.css';

export default {
    components: { vueCustomScrollbar },
    props: {
        infoMenuToggler: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped></style>
