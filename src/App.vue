<template>
  <!-- <div v-for="post in allPosts" :key="post.ti">{{ post.title }}</div>
  {{ postsCount }} -->
  <SearchBar />
  <BookCard />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BookCard from "./components/BookCard.vue";
import SearchBar from "./components/SearchBar.vue";
export default {
  name: "App",
  computed: mapGetters(["allPosts", "postsCount"]),
  methods: mapActions(["fetchBooks"]),
  components: {
    BookCard,
    SearchBar,
  },
};
</script>

<style></style>
