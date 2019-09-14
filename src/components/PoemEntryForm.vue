<template>
  <div id="entry-form-outer">
    <form id='entry-form'>
      <div class="form-group">
        <label>Adjectives</label>
        <input type="text" class="form-control" v-model="userInput.adjectives[0]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.adjectives[1]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.adjectives[2]" placeholder="">
      </div>    
      <div class="form-group">
        <label>Adverbs</label>
        <input type="text" class="form-control" v-model="userInput.adverbs[0]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.adverbs[1]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.adverbs[2]" placeholder="">
      </div>
      <div class="form-group">
        <label>Nouns</label>
        <input type="text" class="form-control" v-model="userInput.nouns[0]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.nouns[1]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.nouns[2]" placeholder="">
      </div>
      <div class="form-group">
        <label>Prepositions</label>
        <input type="text" class="form-control" v-model="userInput.prepositions[0]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.prepositions[1]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.prepositions[2]" placeholder="">
      </div>    
      <div class="form-group">
        <label>Verbs</label>
        <input type="text" class="form-control" v-model="userInput.verbs[0]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.verbs[1]" placeholder="">
        <input type="text" class="form-control" v-model="userInput.verbs[2]" placeholder="">
      </div>
    </form>
    <button type="button" @click="onButtonClick()" class="btn btn-primary">Generate Poem</button>
    <div>{{poem}}</div>
  </div>
</template>
<script>
const axios = require('axios');

export default {
  data: function() {
    return {
      template: 'winter',
      poem : '',
      userInput : {
        adjectives: [],
        adverbs: [],
        nouns: [],
        prepositions: [],
        verbs: [],
      },
    }
  },
  methods: {
    onButtonClick: function() {
      let inputErrors = this.hasInputErrors();
      if (inputErrors) {
        alert('Please enter valid input. Ensure all values are filled and that only English characters are used');
      } else {
        this.postPoem();
      }
      
    },
    postPoem: function() {
      axios.post('/api', { userInput: this.userInput, template: this.template })
      .then(
        res => this.poem = res.data.poem, 
          e => console.error(e));
    },
    hasInputErrors: function() {
      let hasErrors = false;
      var grammarTypes = Object.keys(this.userInput);
      const re = '[^\x00-\x7F]';
      let inputArr = [];
      for (let type of grammarTypes) {
          let vals = Object.values(this.userInput[type])
          inputArr = inputArr.concat(vals)
      } 
      if (inputArr.length !== 15) {
        return hasErrors = true;
      }
      console.log(inputArr)
      inputArr.forEach(v => {
          let hasNonEnglish = String(v).match(re);
          if ( hasNonEnglish|| v===undefined || v==='undefined'){
              hasErrors = true;
          }
      })
      return hasErrors;
    }
  }
}
</script>
<style scoped lang="scss">
  #entry-form-outer {
    margin: 0 auto;
    width: 15%;
    text-align: center;
  }
</style>