import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useMainStore } from './stores/main'

import './css/main.css'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')

const mainStore = useMainStore(pinia)

mainStore.fetchSampleClients()
mainStore.fetchSampleHistory()
