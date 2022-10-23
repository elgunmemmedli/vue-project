import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'
import ProductAdd from '../components/Add/ProductAdd.vue'
import ProductsList from '../components/List/ProductsList.vue'
import Tables from '../components/Tables.vue'
import TableAdd from  '../components/Add/TableAdd.vue'
import Orders from '../components/Orders/Order.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   { 
    path : '/',
    component : Home,
  },

  { 
    path : '/product-add',
    component : ProductAdd,
  },

  { 
    path : '/product-list',
    component : ProductsList,
  },

  { 
    path : '/tables',
    component : Tables,
  },

  { 
    path : '/tables-add',
    component : TableAdd,
  },

  { 
    path : '/orders/:id',
    name : 'Orders',
    component : Orders,
  },




  ]
})

export default router
