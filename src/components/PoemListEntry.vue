<template>
  <div class="card bg-light mb-3 poem-card" style="width: 62rem;">
    <div class="card-body">
      <p 
      v-for="(line, index) in formattedPoem" 
      :key="index"
      class="card-text">{{line}}</p>
      <p class="card-text"><small class="text-muted">Submited {{ formattedDate }}</small></p>
    </div>
  </div>
</template>
<script>
const moment = require('moment');
export default {
  props: ['poem', 'createdAt', 'id'],
  computed: {
    formattedDate: function() {
      return moment(this.createdAt).fromNow();
    },
    formattedPoem: function() {
      return this.poem.split(/\n/g);
    },
  }, 
};
</script>
<style scoped lang="scss">

.card-text {
  text-align:center;
}
.button-group {
  text-align:right;
}
.poem-card {
  width: 90%;
  text-align: center;
  margin: 20px auto auto auto;
  padding: 0 auto;
}
</style>;
