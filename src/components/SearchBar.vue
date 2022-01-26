<template>
  <form @submit="onBookSearchSubmit">
    <input type="text" v-model="query" />
    <ul>
      <li v-if="autocompleteIsActive">loading...</li>
      <li v-for="book in matchingBooks" :key="book.key">{{ book.title }}</li>
    </ul>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
// import store from "../store/index.js";

export default {
  data() {
    return {
      query: "",
      matchingBooks: [],
      autocompleteIsActive: false,
    };
  },
  methods: {
    onBookSearchSubmit(e) {
      e.preventDefault();
      console.log(this.query);
    },
    async searchBook() {
      const res = await fetch(
        "http://openlibrary.org/search.json?q=" + this.query.trim()
      );
      console.log(this.query);
      const response = await res.json();
      if (response) {
        this.matchingBooks = [...response.docs];
      } else {
        alert("Error while searching for book");
      }
      this.autocompleteIsActive = false;
    },
  },
  watch: {
    query() {
      if (this.query.length > 3) {
        this.autocompleteIsActive = true;
        this.matchingBooks = [];
        this.searchBook();
      }
    },
  },
};
</script>

<style scoped></style>
