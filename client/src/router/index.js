import admin from '../views/admin.vue';
import client from '../views/client.vue';
import {createRouter,createWebHistory, useRoute} from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [ 
    {
        path: '/',
        components: {
          default: client,        
        }, 
      },
      {
        path: '/admin',
        name:'admin',
        components: {
          default: admin,      
        }
      },
  ],
})
export default router;