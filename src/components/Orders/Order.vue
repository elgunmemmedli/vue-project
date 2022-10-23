<script setup>
import Footer from "../Footer.vue";
import {mapGetters} from 'vuex'
</script>
<template>
  <div>
    <div id="layoutSidenav_content">
      <div class="container">
        <h1 class="text-center mt-5">Siyahidan secin</h1>
        <div class="row offset-3">
          <div class="col-12">
            <label for="">Mehsul adi</label>
            <select @change="Select" class="form-select my-3" aria-label="Default select example">
              <option selected disabled>Yemek sec</option>
              <option v-for="(item,index) in getProducts" :key="index" :value="item.id">{{item.product_name}}</option>
            </select>
          </div>
          <div class="col-8 mt-3">
            <label for="">Miqdar</label>
            <input v-model="miqdar" type="text" class="form-control" />
          </div>
          <div class="col-4">
            <p >Qiyemt </p>
            <span>{{qiymet}}</span>
          </div>
          <button @click="tableQur" class="btn btn-success"> Elave et </button>
        </div>
       

<div v-if="show"> 
  <h1>Table qurun </h1>
   </div>

      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {


  data(){
    return {
      miqdar : '',
      secilenMehsul : {},
      qiymet : 0,
      show : false
    }
  },


  watch : {
    miqdar(val){
    this.qiymet = this.secilenMehsul.product_price * val;
    }
  },

  methods : {
    Select(e){
      let id = e.target.value;
    this.secilenMehsul = this.getProducts.find(item=>{
        return item.id === id;
      })
    },
    tableQur(){
      this.show = true;
      
    }
  },

    computed : {
    ...mapGetters('add', ['getProducts'])
  },
}
</script>