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
        <div class="button-group">
          <a href="#" v-on:click="setCurrentPoem(poem)" data-toggle="modal" data-target="#editModal" class="btn btn-primary">Edit</a>
          <a href="#" class="btn btn-primary">Delete</a>
        </div>
      </li>
    </ul>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ currentPoem.id }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id='entry-form'>
              <div class="form-group">
                <label>Adjectives</label>
                <input type="text" class="form-control"  v-model="currentPoem.userInput.adjectives[0]" placeholder="">
                <input type="text" class="form-control"  v-model="currentPoem.userInput.adjectives[1]" placeholder="">
                <input type="text" class="form-control"  v-model="currentPoem.userInput.adjectives[2]" placeholder="">
              </div>    
              <div class="form-group">
                <label>Adverbs</label>
                <input type="text" class="form-control" v-model="currentPoem.userInput.adverbs[0]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.adverbs[1]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.adverbs[2]" placeholder="">
              </div>
              <div class="form-group">
                <label>Nouns</label>
                <input type="text" class="form-control" v-model="currentPoem.userInput.nouns[0]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.nouns[1]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.nouns[2]" placeholder="">
              </div>
              <div class="form-group">
                <label>Prepositions</label>
                <input type="text" class="form-control" v-model="currentPoem.userInput.prepositions[0]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.prepositions[1]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.prepositions[2]" placeholder="">
              </div>    
              <div class="form-group">
                <label>Verbs</label>
                <input type="text" class="form-control" v-model="currentPoem.userInput.verbs[0]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.verbs[1]" placeholder="">
                <input type="text" class="form-control" v-model="currentPoem.userInput.verbs[2]" placeholder="">
              </div>
            </form>
            {{ currentPoem.id }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>     
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
      currentPoem: {
        userInput : {
          adjectives: [],
          adverbs: [],
          nouns: [],
          prepositions: [],
          verbs: [],
        }
      },
    }},
  components: {
    PoemListEntry,
  },
  methods : {
    setCurrentPoem: function(poem) {
      this.currentPoem = poem
    }
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
