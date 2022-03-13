import { mount } from "@vue/test-utils";
import BookCard from "@/components/BookCard.vue";

describe("BookCard.vue", () => {
  it("has data", () => {
    expect(typeof BookCard.data).toBe("function");
  });
});

describe("mounted component", () => {
  const wrapper = mount(BookCard);
  it("successfully mounts", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
