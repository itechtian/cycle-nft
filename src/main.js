import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import AOS from 'aos';

AOS.init();

createApp(App).mount('#app')
