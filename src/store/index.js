import { createStore } from "vuex";
import BookModule from "./modules/book.js";
// import SearchModule from "./modules/search.js";

const store = createStore({
  modules: {
    BookModule,
  },
  state: {
    books: [],
  },
  getters: {
    query() {
      return store.query;
    },
  },
});

export default store;
