<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div>
    <Header/>
    <div id="layoutSidenav">
      <Navbar/>
      <RouterView />
      </div>
  </div>
</template>


<script>
export default {
created(){
  this.$store.dispatch('add/productsAll');
  this.$store.dispatch('add_table/tablesAll')
}
}
</script>