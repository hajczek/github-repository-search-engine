import { shallowMount } from "@vue/test-utils";
import index from "../pages/index";

describe("index", () => {
  test("mounts properly", () => {
    const wrapper = shallowMount(index, {
      stubs: {
        NuxtLink: true
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = shallowMount(index);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
