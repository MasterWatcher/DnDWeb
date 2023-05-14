<!-- src/components/AppNav.vue -->
<template>
 <div>
  <nav v-bind:class="active" v-on:click.prevent>
    <router-link
    to="sheet"
    class="nav-item nav-link"
    active-class="active"
    exact
    >
    Sheet
  </router-link>
  <router-link
  to="actions"
  class="nav-item nav-link"
  active-class="active"
  exact
  >
  Actions
</router-link>
</nav>
<main class="container">
 <router-view></router-view> 
</main>
</div>
</template>

<script>
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  mounted() {
    this.$router.push('/sheet')
  }
}
</script>

<style>


nav{
  display:inline-block;
  margin:60px auto 45px;
  background-color:#5597b4;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}

nav a{
  display:inline-block;
  padding: 18px 30px;
  color:#fff !important;
  font-weight:bold;
  font-size:16px;
  text-decoration:none !important;
  line-height:1;
  text-transform: uppercase;
  background-color:transparent;

  -webkit-transition:background-color 0.25s;
  -moz-transition:background-color 0.25s;
  transition:background-color 0.25s;
}

nav a:first-child{
  border-radius:2px 0 0 2px;
}

nav a:last-child{
  border-radius:0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact{
  background-color:#e35885;
}

p{
  font-size:22px;
  font-weight:bold;
  color:#7d9098;
}

p b{
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:18px;
}
.resource {
  margin: 20px 0;
}
</style>