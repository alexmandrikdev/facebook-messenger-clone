<template>
    <div class="absolute top-0 left-0 w-full pt-2 bg-white">
        <vue-custom-scrollbar id="search-result-container" class="flex w-full">
            <base-loading-spinner v-if="isSearchResultEmpty" class="m-auto" />

            <more-people
                v-else-if="searchResult.morePeople.length !== 0"
                :more-people="searchResult.morePeople"
            />
        </vue-custom-scrollbar>
    </div>
</template>

<script>
import BaseLoadingSpinner from '../../../BaseLoadingSpinner.vue';
import MorePeople from './search-result/MorePeople.vue';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import '../../../../../css/vue-custom-scrollbar.css';

export default {
    components: { BaseLoadingSpinner, MorePeople, vueCustomScrollbar },
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
