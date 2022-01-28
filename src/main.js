import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import './index.css'

library.add(faEdit)

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')