import { createStore } from "vuex";
import BookModule from "./modules/book.js";
// import SearchModule from "./modules/search.js";

const store = createStore({
  modules: {
    BookModule,
  },
  state: {
    books: [],
    сart: [1, 2],
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartCount(state) {
      return state.cart.length;
    },
  },
});

export default store;
