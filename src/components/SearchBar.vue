<template>
  <form @submit="onBookSearchSubmit">
    <input type="text" v-model="query" />
    <ul>
      <li v-if="autocompleteIsActive">loading...</li>
      <div v-if="!autocompleteIsActive">
        <li
          class="autocomplete-result"
          v-for="book in matchingBooks"
          :key="book.key"
          @click="onItemChange"
        >
          <span class="title">{{ book.title }}</span> by
          <span class="author">{{ book.author }}</span>
        </li>
      </div>
    </ul>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
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
    },
    async searchBook() {
      const res = await fetch(
        "http://openlibrary.org/search.json?title=" + this.query.trim()
      );
      console.log(this.query);
      const response = await res.json();
      if (response) {
        for (const book of response.docs) {
          this.matchingBooks.push({
            title: book.title,
            author: book.author_name[0],
            key: book.key,
          });
        }
      } else {
        alert("Error while searching for book");
      }
      this.autocompleteIsActive = false;
    },
    onItemChange(e) {
      console.log(e.target.key);
    },
  },
  watch: {
    query() {
      if (this.query.length > 3) {
        this.matchingBooks = [];
        this.autocompleteIsActive = true;
        this.searchBook();
      }
    },
  },
};
</script>

<style scoped>
.author {
  font-weight: bold;
  color: darkblue;
}
.autocomplete-result {
  cursor: pointer;
}
</style>
