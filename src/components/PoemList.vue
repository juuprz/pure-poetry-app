<template>
  <div>
    <div>hello from poemlist</div>
    <ul class="list-group">
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
      <li class="list-group-item mx-auto">
        <PoemListEntry/>
      </li>
      <br>
    </ul>
  </div>
  
</template>
<script>
import PoemListEntry from './PoemListEntry.vue';

export default {
  name: 'app',
  components: {
    PoemListEntry,
  },
  
}
</script>
<style scoped lang="scss">

</style>
