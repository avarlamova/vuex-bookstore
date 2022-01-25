import { createStore } from "vuex";
import BookModule from "./modules/book.js";

const store = createStore({
  modules: {
    BookModule,
  },
});

export default store;
