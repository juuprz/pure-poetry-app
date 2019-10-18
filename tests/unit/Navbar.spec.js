import { mount } from '@vue/test-utils';
import Navbar from '../../src/components/Navbar.vue';

describe('Navbar', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Navbar);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(
      '<li class="nav-item active">'
    );
  });

  // it's also easy to check for the existence of elements
  it('has a nav', () => {
    expect(wrapper.contains('nav')).toBe(true);
  });
});
