
<script>
  import Pusher from 'pusher-js'
  export default {
    data() {
      return {
        events: []
      }
    }, 
    mounted() {
      const pusher = new Pusher('c6e6ebf74db06fb56db2', {
        cluster: 'eu'
      })
      const channel = pusher.subscribe('my-channel')
      channel.bind('my-event', data => {
        console.log('Received data:', data)
        this.events.push(data)
      })
    }
  }
</script>

<template>
  <div v-for="event in events" :key="event.id">
    <h2>{{ event.title }}</h2>
    <p>{{ event.description }}</p>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
