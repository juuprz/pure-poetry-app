<template>
  <div class="hello">does this work like i want it to?
    <button @click="changeTitle" >Click here</button>
    <div>{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      result: 'No',
    };
  },
  methods: {
    changeTitle() {
      this.result = 'Yes';
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

