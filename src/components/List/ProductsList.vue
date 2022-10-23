<script setup>
import Footer from "../Footer.vue";
import {mapGetters} from 'vuex'
</script>

<template>
 <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Tables</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
          <li class="breadcrumb-item active">Tables</li>
        </ol>
        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            DataTable Example
          </div>
          <div class="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </tfoot>
              <tbody v-if="getProducts.length > 1" >
                <tr v-for="(item,index) in getProducts" :key="index">
                  <td> {{item.product_name}}</td> 
                  <td>{{item.product_price}}</td>
                </tr>
              </tbody>
              <tbody v-else >
               <p> Data yoxdur </p>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>


<script>
export default {
  data(){
    return {
     
    }
  },

  computed : {
    ...mapGetters('add', ['getProducts'])
  },

}
</script>