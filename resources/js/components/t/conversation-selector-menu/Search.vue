<template>
    <div v-click-outside="closeSearch" class="flex flex-col">
        <div class="mb-1 mt-3 px-4 flex">
            <div
                v-if="searchInputValue !== null"
                class="h-9 w-9 hover:bg-gray-100 rounded-full mr-1 -ml-2 flex cursor-pointer"
            >
                <base-left-arrow class="w-5 h-5 m-auto" @click="closeSearch" />
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
                    type="text"
                    placeholder="Search Messenger"
                    class="bg-gray-100 rounded-6.25xl pt-1.75 pb-2.25 pr-3 w-full h-9 text-3.75xl placeholder-gray-600 outline-none"
                    :class="[searchInputValue === null ? 'pl-8' : 'pl-3']"
                    @click="searchInputClicked"
                    @keyup="search"
                />
            </div>
        </div>

        <div class="relative">
            <search-result
                v-if="searchInputValue !== null"
                :search-result="searchResult"
            />
        </div>
    </div>
</template>

<script>
import _debounce from 'lodash/debounce';
import gql from 'graphql-tag';
import SearchResult from './search/SearchResult.vue';
import BaseLeftArrow from '../../BaseLeftArrow.vue';

export default {
    components: { SearchResult, BaseLeftArrow },
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
        closeSearch() {
            if (this.searchInputValue !== null) {
                this.searchInputValue = null;
            }
        },
        searchInputClicked() {
            if (this.searchInputValue === null) {
                this.searchInputValue = '';
            }
        },
        search: _debounce(function() {
            if (this.searchInputValue !== '') {
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
            }
        }, 1000),
    },
};
</script>

<style scoped></style>
