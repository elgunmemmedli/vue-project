<script setup>
import Footer from "../Footer.vue";
import {mapGetters} from 'vuex'
</script>

<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">
                  Məhsulları əlave et
                </h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="send">
                  <div class="row mb-3">
                    <div class="col-md-12">
                      <div class="form-floating">
                        <input
                          class="form-control"
                          :class="{ 'is-invalid': v$.products.product_name.$errors.length }"
                          v-model="products.product_name"
                          id="inputLastName"
                          type="text"
                          placeholder="Yemek adi"
                        />
                        <label for="inputLastName">Yemek Adi</label>
                        <small
                          v-for="error of v$.products.product_name.$errors"
                          :key="error.$uid"
                          class="badge bg-danger"
                        >
                          {{ error.$message }}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputEmail"
                      :class="{ 'is-invalid': v$.products.product_price.$errors.length }"
                      v-model="products.product_price"
                      type="text"
                      placeholder="Qiymet"
                    />
                    <label for="inputEmail">Qiymet</label>
                    <small
                      v-for="error of v$.products.product_price.$errors"
                      :key="error.$uid"
                      class="badge bg-danger"
                    >
                      {{ error.$message }}
                    </small>
                  </div>

                  <div class="mt-4 mb-0">
                    <div class="d-grid">
                      <button type="submit" class="btn btn-success">
                        Elave et
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import { useVuelidate } from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      products: {
        product_name: "",
        product_price: '',
      },
    };
  },

  validations() {
    return {
      products: {
        product_name: { required },
        product_price: { required, numeric },
      },
    };
  },

  methods: {
    send() {
        this.v$.$touch();
        if(!this.v$.$invalid){
            this.$store.dispatch("add/productAdd", this.products);
        }
    },
  },
};
</script>