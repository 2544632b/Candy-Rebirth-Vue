import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './less/w.less?v2'
import './less/materialdesignicons.min.css?v5'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
