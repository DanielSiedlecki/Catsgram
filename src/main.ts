import { createApp } from 'vue'
import App from './App.vue'
import { RouterView } from 'vue-router'
import router from './routes'



import './styles/GlobalStyles.scss'
import './assets/fontello/css/fontello.css'





createApp(App)
    .use(router)
    .mount('#app')
