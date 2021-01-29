<template>
    <div
        id="search-result-container"
        class="flex absolute top-0 left-0 w-full bg-white overflow-y-scroll"
    >
        <base-loading-spinner v-if="isSearchResultEmpty" class="m-auto" />

        <more-people
            v-else-if="searchResult.morePeople.length !== 0"
            :more-people="searchResult.morePeople"
        />
    </div>
</template>

<script>
import BaseLoadingSpinner from '../../../BaseLoadingSpinner.vue';
import MorePeople from './search-result/MorePeople.vue';

export default {
    components: { BaseLoadingSpinner, MorePeople },
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
