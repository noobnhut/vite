import admin from '../views/admin.vue';
import client from '../views/client.vue';
import banner from '../components/banner.vue'
import navbar from '../components/navbar.vue'

import {createRouter,createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [ 
    {
      path: '/',
      components: {
        default: client,
        navbar, 
        banner, 

      }
      },
      //admin
      {
        path: '/admin',
        name:'admin',
        components: {
          default: admin,      
        },
        children:
        [
         {
          path:'user',
          component:()=>import('../layout/admin/user.vue'),
          name:'user'
         },
         {
          path:'bill',
          component:()=>import('../layout/admin/bill.vue'),
          name:'bill'
         },
         {
          path:'product',
          component:()=>import('../layout/admin/product.vue'),
          name:'product'
         },
         {
          path:'category',
          component:()=>import('../layout/admin/category.vue'),
          name:'category'
         },
        ],
     
      },
  ],
})
export default router;