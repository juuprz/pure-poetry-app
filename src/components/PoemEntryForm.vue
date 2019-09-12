<template>
  <div id="entry-form-outer">
    <form id='entry-form'>
      <div class="form-group">
        <label>Adjectives</label>
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
      </div>    
      <div class="form-group">
        <label>Adverbs</label>
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
      </div>
      <div class="form-group">
        <label>Nouns</label>
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
      </div>
      <div class="form-group">
        <label>Prepositions</label>
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
      </div>    
      <div class="form-group">
        <label>Verbs</label>
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
        <input type="text" class="form-control" placeholder="">
      </div>
    </form>
    <button type="button" class="btn btn-primary">Generate Poem</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      adjectives: [],
      adverbs: [],
      nouns: [],
      prepositions: [],
      verbs: [],
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