const SearchModule = {
  actions: {
    sendQuery(query, ctx) {
      // const res = await fetch("http://openlibrary.org/search.json?q=" + query);
      // const books = await res.json();
      ctx.commit("updateSearch", query);
    },
  },
  state: {
    query: "",
  },
  mutations: {
    updateSearch(state, value) {
      state.query = value;
    },
  }, // изменяют store
  getters: {
    query(state) {
      return state.query;
    },
  },
};
export default SearchModule;
