import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const Vue = createApp(App);

Vue.use(router);
Vue.mount('#app');
