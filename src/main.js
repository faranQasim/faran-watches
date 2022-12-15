import { createApp } from 'vue'
import { FontAwesomeIcon } from './icons';
import App from './App.vue'
import 'bootstrap';
import './assets/css/style.scss';


document.title = 'Faran watches';
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
