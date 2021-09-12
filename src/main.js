import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// import store from './store'

createApp(App).use(router).mount('#app')


// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store"; //Import the store

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store, //Include the store in the application
//   render: h => h(App)
// }).$mount("#app");