const BookModule = {
  actions: {
    async fetchBooks(query) {
      const res = await fetch("http://openlibrary.org/search.json?q=" + query);
      const books = await res.json();
      console.log(books.docs);
      // ctx.commit("updatePosts", books);
    },
  },
  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, newPost) {
      state.posts.push(newPost);
    },
  }, // изменяют store
  getters: {
    allPosts(state) {
      return state.posts;
    },
    validPosts(state) {
      return state.posts.filter((post) => post.title && post.body);
    },
    postsCount(state, getters) {
      return getters.validPosts.length;
    },
  },
};
export default BookModule;
