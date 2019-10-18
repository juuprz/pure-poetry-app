import axios from 'axios';
import moxios from 'moxios';
import { shallowMount, mount } from '@vue/test-utils';
import PoemEntryForm from '../../src/components/PoemEntryForm.vue';
import PoemListEntry from '../../src/components/PoemListEntry.vue';


describe('Poem Entry Form', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('shows the displays the new poem on successful axios request', () => {
    moxios.stubRequest('/api', {
      status: 200,
      response: {
        data: [{
          poem: 'to the brutally long winter see the sleepy town\n\nLuckily, no hi for if the trees were it\n\nthere, the man actually is and waited a\n\nbut the this could test works that a app could be so this .\n',
        }],
      },
    });

    const wrapper = shallowMount(PoemEntryForm);
    moxios.wait((done) => {
      expect(wrapper.find(PoemListEntry).exists()).toBe(false);
      done();
    });
  });
});
