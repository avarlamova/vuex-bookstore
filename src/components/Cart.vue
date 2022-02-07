<template>
  <div class="cart">
    <span> {{ cart }} </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      body: "",
    };
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>

<style scoped>
.cart {
  background-color: red;
  width: 500px;
  height: 300px;
  color: white;
}
</style>
