<script setup>
import HomeCard from "./HomeCard.vue";
import HomeExampleCart from "./HomeExampleCart.vue";
import HomeTable from "./HomeTable.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <HomeCard />
        <HomeExampleCart />
        <HomeTable />
      </div>
    </main>
    <Footer />
  </div>
</template>