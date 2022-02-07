<template>
  <form @submit="onBookSearchSubmit">
    <input type="text" v-model="query" class="autocomplete-input" />
    <ul class="autocomplete-list">
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
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

.author {
  font-weight: bold;
  color: darkblue;
}
.autocomplete-result {
  list-style: none;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid black;
}
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}

.autocomplete-list {
  margin-left: 0 !important;
  padding: 0 !important;
}

.autocomplete-input {
  width: 350px;
  font-size: 14px;
}
</style>
