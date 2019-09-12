<template>
  <div id="app">
    <Navbar/>
    <WelcomeModal id='welcome-modal'/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PoemEntryForm from './components/PoemEntryForm.vue';
import WelcomeModal from './components/WelcomeModal.vue';
import PoemList from './components/PoemList.vue';

$(window).on('load',function(){
    $('#welcome-modal').modal('show');
});

export default {
  name: 'app',
  components: {
    Navbar,
    PoemEntryForm,
    WelcomeModal,
    PoemList,
  },
};  
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
