<script setup>
import Footer from "./Footer.vue";
import {mapGetters} from 'vuex'
</script>
<template>
  <div>
    <div id="layoutSidenav_content">
        <div class="container">
            <div class="row pt-5">
        <div v-for="item in gonderTable" :key="item.id" class="col-4">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">{{item.table_name}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{item.table_user}}</h6>
              <RouterLink :to="`/orders/${item.id}`" class="card-link">Rezerv et</RouterLink>
              <!-- <RouterLink :to="{
                name : 'Orders',
                params : {
                  id : item.id
                }
              }" class="card-link">Rezerv et</RouterLink> -->

            </div>
          </div>
        </div>
      </div>
        </div>
      <Footer />
    </div>
  </div>
</template>


<script>
export default {

  computed : {
    ...mapGetters( 'add_table', ['gonderTable'])
  },

}
</script>