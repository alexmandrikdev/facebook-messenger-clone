<template>
    <div class="flex flex-col">
        <div class="mb-2 mt-3 px-4 flex">
            <div
                v-if="searchInputValue !== null"
                class="h-9 w-9 hover:bg-gray-100 rounded-full mr-1 -ml-2 flex cursor-pointer"
            >
                <svg
                    class="w-5 h-5 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>

            <div class="relative flex-1">
                <svg
                    v-if="searchInputValue === null"
                    class="w-5 h-5 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                <input
                    v-model="searchInputValue"
                    v-click-outside="clickedOutsideFromSearchInput"
                    type="text"
                    placeholder="Search Messenger"
                    class="bg-gray-100 rounded-6.25xl pt-1.75 pb-2.25 pr-3 w-full h-9 text-3.75 placeholder-gray-600 outline-none"
                    :class="[searchInputValue === null ? 'pl-8' : 'pl-3']"
                    @click="searchInputValue = ''"
                    @keyup="search"
                />
            </div>
        </div>

        <search-result :search-result="searchResult" />
    </div>
</template>

<script>
import _debounce from 'lodash/debounce';
import gql from 'graphql-tag';
import SearchResult from './search/SearchResult.vue';

export default {
    components: { SearchResult },
    data() {
        return {
            searchResult: {
                friends: [],
                morePeople: [],
            },
        };
    },
    computed: {
        searchInputValue: {
            get() {
                return this.$store.state.t.searchInputValue;
            },
            set(value) {
                this.$store.commit('updateSearchInputValue', value);
            },
        },
    },
    methods: {
        clickedOutsideFromSearchInput() {
            this.$store.commit('updateSearchInputValue', null);
        },
        search: _debounce(function() {
            this.$apollo
                .query({
                    query: gql`
                        query SearchUsers($searchKey: String!) {
                            users(searchKey: $searchKey) {
                                id
                                first_name
                                last_name
                            }
                        }
                    `,
                    variables: {
                        searchKey: this.searchInputValue,
                    },
                })
                .then(response => {
                    this.searchResult.morePeople = response.data.users;
                });
        }, 1000),
    },
};
</script>

<style scoped></style>
