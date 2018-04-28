import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import cmp1 from './components/cmp1/cmp1.vue';
import cmp2 from './components/cmp2/cmp2.vue';
import cmp3 from './components/cmp3/cmp3.vue';
import cmp4 from './components/cmp4/cmp4.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/cmp1', 
            name: 'cmp1', 
            component: cmp1
        },{
            path: '/cmp2/:p1/:p2', 
            name: 'cmp2', 
            component: cmp2
        },{
            path: '',
            components: {
                cmp3,
                cmp4
            }
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: fn => fn(App)
});
