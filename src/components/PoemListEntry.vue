<template>
  <div class="card bg-light mb-3" style="max-width: 30rem;">
    <div class="card-body">
      <p class="card-text">{{poem}}</p>
      <p class="card-text"><small class="text-muted">Submited on {{createdAt}}</small></p>
      <div class="button-group">
        <a href="#" class="btn btn-primary">Edit</a>
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['poem', 'createdAt', 'id'],
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