import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import "normalize.css"
import './css/reset.css'

const app = createApp(App)

app.config.globalProperties.dndHost = 'https://dnd-server.fly.dev';
//app.config.globalProperties.$$dndHost = 'http://127.0.0.1:1337';

app.use(router)
.use(VueCookies, { 
  expires: '1d'
})
.mount('#app')