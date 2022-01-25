<template>
  <form @submit="onBookSearchChanged">
    <input type="text" v-model="query" placeholder="Search" />
    <button type="button">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onBookSearchChanged() {
      console.log(this.query);
    },
  },
};
</script>

<style scoped></style>
