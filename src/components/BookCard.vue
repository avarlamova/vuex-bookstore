<template>
  <fieldset>
    <form @submit="createPost" class="book-card">
      <input type="text" placeholder="title" v-model="title" />
      <input type="text" placeholder="body" v-model="body" />
      <button type="submit">Create post</button>
    </form>
  </fieldset>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["addPost"]),
    createPost(e) {
      e.preventDefault();
      this.addPost({
        id: new Date(),
        title: this.title,
        body: this.body,
      });
    },
  },
};
</script>

<style scoped>
.book-card {
  font-size: 14px;
  background-color: antiquewhite;
  border: 1px solid #eee;
  padding: 1rem;
}
</style>
