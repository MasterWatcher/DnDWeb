<!-- src/components/AppNav.vue -->
<template>
 <div>
  <nav v-bind:class="active" v-on:click.prevent>
    <div class="menu-item"><router-link to="/sheet">Sheet</router-link></div>
    <div class="menu-item"><router-link to="/actions">Actions</router-link></div>
     <div class="menu-item-right"><UserTab :title="username"/> </div>
</nav>
<main class="container">
 <router-view></router-view> 
</main>
</div>
</template>

<script>
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'
import UserTab from '../components/UserTab'
export default {
   components: {
    UserTab
  },
  data() {
    return {
      username: "12"
    };
  },
  mounted() {
     this.$data.username = this.$cookies.get('player').name
    this.$router.push('/sheet')
  }
}
</script>

<style>
nav {
  width: 100vw;
  background-color: #0d0d0e;
}
nav .menu-item {
  color: #FFF;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
  display: inline-block;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
nav .menu-item-right {
  float: right;
  text-align: right;
}
</style>