const state = {
    searchInputValue: null,
};

const mutations = {
    updateSearchInputValue(state, value) {
        state.searchInputValue = value;
    },
};

export default {
    state,
    mutations,
};
