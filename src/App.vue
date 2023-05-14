
<script>
  //import Pusher from 'pusher-js'
  // import LoginPlayer from './components/LoginPlayer.vue'
  // import NavigationBar from './components/NavigationBar.vue'
  export default {
    // components: {
    //   LoginPlayer,
    //   NavigationBar
    // },
    mounted() {
      // const pusher = new Pusher('c6e6ebf74db06fb56db2', {
      //   cluster: 'eu'
      // })
      // const channel = pusher.subscribe('my-channel')
      // channel.bind('my-event', data => {
      //   console.log('Received data:', data)
      //   this.events.push(data)
      // })
      // this.$router.push('/sheet')
      let loggedIn = this.$cookies.get('player') !== null;

      if (loggedIn) {
         this.$router.push('/home')
      } else {
        this.$router.push('/login');
      }
    }
  }
</script>

<!-- <template>
  <div>
    <LoginPlayer />
     <NavigationBar v-else/>
    <div v-else >
    <header class="app-header">
      <NavigationBar />
    </header>
    <main class="container">
    </main>
    </div>
  </div> 
    <router-view></router-view>
</template> -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  #app {
    font-family: sans-serif;
  }
</style>
