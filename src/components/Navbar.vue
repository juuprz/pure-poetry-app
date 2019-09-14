<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Pure Poetry</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Create New Poem</router-link>
        </li>        
        <li class="nav-item active">
          <router-link class="nav-link" to="/collection">View Poem Collection</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.navbar-brand {
  font-size: 40px;
}
</style>