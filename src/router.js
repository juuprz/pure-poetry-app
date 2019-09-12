import Vue from 'vue';
import Router from 'vue-router';
import PoemList from './components/PoemList.vue';
import PoemEntryForm from './components/PoemEntryForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poemEntryForm',
      component: PoemEntryForm,
    },
    {
      path: '/collection',
      name: 'poemList',
      component: PoemList,
    },

  ],
});
