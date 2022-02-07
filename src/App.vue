<template>
  <SearchBar />
  <Cart />
  <!-- <BookCard /> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import BookCard from "./components/BookCard.vue";
import SearchBar from "./components/SearchBar.vue";
import Cart from "./components/Cart.vue";
export default {
  name: "App",
  computed: mapGetters(["allPosts", "postsCount"]),
  methods: mapActions(["fetchBooks"]),
  components: {
    // BookCard,
    SearchBar,
    Cart,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
* {
  font-family: "Lato", sans-serif;
}
</style>
