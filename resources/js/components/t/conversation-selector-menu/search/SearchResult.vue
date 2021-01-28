<template>
    <div
        id="search-result-container"
        class="flex absolute top-0 left-0 w-full bg-white"
    >
        <base-loading-spinner v-if="isSearchResultEmpty" class="m-auto" />
    </div>
</template>

<script>
import BaseLoadingSpinner from '../../../BaseLoadingSpinner.vue';

export default {
    components: { BaseLoadingSpinner },
    props: {
        searchResult: {
            type: Object,
            required: true,
        },
    },
    computed: {
        isSearchResultEmpty() {
            return (
                this.searchResult.friends.length === 0 &&
                this.searchResult.morePeople.length === 0
            );
        },
    },
};
</script>

<style scoped>
#search-result-container {
    height: calc(100vh - 169px);
}
</style>
