const SearchModules = {
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
  mutations: {}, // изменяют store
  getters: {},
};
export default SearchModules;
