<template>
  <div>
    <div>hello from poemlist</div>
    <ul class="list-group">
      <li 
        v-for="poem in poems"
        class="list-group-item mx-auto">
        <PoemListEntry
          v-bind:poem="poem.poem"
          v-bind:id="poem.id"
          v-bind:createdAt="poem.createdAt"
        />
      </li>
      <br>
      <li class="list-group-item mx-auto">
        <PoemListEntry/>
      </li>
      <br>
      <li class="list-group-item mx-auto">
        <PoemListEntry/>
      </li>
      <br>
      <li class="list-group-item mx-auto">
        <PoemListEntry/>
      </li>
      <br>
    </ul>
  </div>
</template>

<script>
import PoemListEntry from './PoemListEntry.vue';
const axios = require('axios');

export default {
  name: 'app',
  data: function() {
    return { 
      poems: [
      {
        id: 1,
        poem: 'Do the dishes',
        createdAt: 'Jan 12, 2019'
      },
      {
        id: 2,
        poem: 'Take out the trash',
        createdAt: 'Jan 12, 2019'
      },
      {
        id: 3,
        poem: 'Mow the lawn',
        createdAt: 'Jan 12, 2019'
      }
      ],
    }},
  components: {
    PoemListEntry,
  },
}
</script>
<style scoped lang="scss">

</style>
