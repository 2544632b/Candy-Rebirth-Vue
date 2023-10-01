import { createApp } from 'vue'
import { createPinia } from 'pinia'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import App from './App.vue'
import router from './router'
import './less/w.less?v2'
import './less/materialdesignicons.min.css?v5'

NProgress.configure({
    showSpinner: true,
});


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
