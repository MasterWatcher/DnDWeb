
<script>
  //import Pusher from 'pusher-js'
  //import CharacterSheet from './components/CharacterSheet.vue'
  import LoginPlayer from './components/LoginPlayer.vue'
  export default {
    data() {
      // return {
      //   events: []
      // }
    }, 
    components: {
      LoginPlayer
    },
    mounted() {
      // const pusher = new Pusher('c6e6ebf74db06fb56db2', {
      //   cluster: 'eu'
      // })
      // const channel = pusher.subscribe('my-channel')
      // channel.bind('my-event', data => {
      //   console.log('Received data:', data)
      //   this.events.push(data)
      // })
    }
  }
</script>

<template>
    <LoginPlayer />
</template>

<style>
  #app {
    font-family: sans-serif;
  }
</style>
