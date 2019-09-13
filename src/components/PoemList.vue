<template>
  <div>
    <ul class="list-group">
      <li 
        v-for="poem in poems"
        v-bind:key="poem.id"
        class="list-group-item mx-auto">
        <PoemListEntry
          v-bind:poem="poem.poem"
          v-bind:id="poem.id"
          v-bind:createdAt="poem.createdAt"
          v-bind:userInput="poem.userInput"
        />
      </li>
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
      poems: [],
    }},
  components: {
    PoemListEntry,
  },

  mounted() {
    axios.get('/api')
    .then(
      res => this.poems = res.data, 
      e => console.error('issue getting poems from api', e)
    )
  }
}
</script>
<style scoped lang="scss">
li {
  margin:20px auto;
}
</style>
