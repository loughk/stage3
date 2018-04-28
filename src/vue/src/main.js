import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

new Vue({
    el: '#app',
    router,
    render: fn => fn(App)
});
