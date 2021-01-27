<template>
    <div class="w-full md:w-90">
        <Header />
        <Search />
    </div>
</template>

<script>
import Header from './conversation-selector-menu/Header.vue';
import Search from './conversation-selector-menu/Search.vue';

export default {
    components: { Header, Search },
};
</script>

<style scoped></style>
