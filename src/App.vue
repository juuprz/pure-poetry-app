<template>
  <div id="app">
    <Navbar/>
    <WelcomeModal id='welcome-modal'/>
    <PoemEntryForm />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import PoemEntryForm from './components/PoemEntryForm.vue';
import WelcomeModal from './components/WelcomeModal.vue';

$(window).on('load',function(){
    $('#welcome-modal').modal('show');
});

export default {
  name: 'app',
  components: {
    Navbar,
    PoemEntryForm,
    WelcomeModal,
  },
};  
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

</style>
