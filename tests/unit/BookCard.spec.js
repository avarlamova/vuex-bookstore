// import { mount } from '@vue/test-utils'
import BookCard from "@/components/BookCard.vue";

describe("BookCard.vue", () => {
  it("has data", () => {
    expect(typeof BookCard.data).toBe("function");
  });
});
