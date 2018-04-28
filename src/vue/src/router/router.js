import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import cmpSign from '../components/cmpsign/sign.vue';
import cmpMine from '../components/cmpmine/mine.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/sign', 
            name: 'sign', 
            component: cmpSign
        },{
            path: '/mine', 
            name: 'mine', 
            component: cmpMine
        }
    ]
});

export default router;