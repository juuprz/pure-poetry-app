<template>
  <div class="card bg-light mb-3" style="max-width: 30rem;">
    <div class="card-body">
      <p class="card-text">{{poem}}</p>
      <p class="card-text"><small class="text-muted">Submited {{ formattedDate }}</small></p>
    </div>
  </div>
</template>

<script>
const moment = require('moment');

export default {
  data: function() {
    return {
      show: false,
      
    }
  },
  props: ['poem', 'createdAt', 'id'],
  computed: {
    formattedDate: function() {
      return moment(this.createdAt).fromNow();
    },
  }, 
  methods : {  
  },
  
}
</script>
<style scoped lang="scss">
.btn {
  margin: 10px;
}
.button-group {
  text-align:right;
}
</style>