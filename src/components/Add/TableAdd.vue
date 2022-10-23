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
                    Masa əlave et
                  </h3>
                </div>
                <div class="card-body">
                  <form @submit.prevent="send">
                    <div class="row mb-3">
                      <div class="col-md-12">
                        <div class="form-floating">
                          <input
                            class="form-control"
                            :class="{ 'is-invalid': v$.tables.table_name.$errors.length }"
                            v-model="tables.table_name"
                            id="inputLastName"
                            type="text"
                            placeholder="Masa adi"
                          />
                          <label for="inputLastName">Masa Adi</label>
                          <small
                            v-for="error of v$.tables.table_name.$errors"
                            :key="error.$uid"
                            class="badge bg-danger"
                          >
                            {{ error.$message }}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-12">
                        <div class="form-floating">
                          <input
                            class="form-control"
                            :class="{ 'is-invalid': v$.tables.table_user.$errors.length }"
                            v-model="tables.table_user"
                            id="inputLastName"
                            type="text"
                            placeholder="Adam adi"
                          />
                          <label for="inputLastName">Adam Adi</label>
                          <small
                            v-for="error of v$.tables.table_user.$errors"
                            :key="error.$uid"
                            class="badge bg-danger"
                          >
                            {{ error.$message }}
                          </small>
                        </div>
                      </div>
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
  import { required } from "@vuelidate/validators";
  export default {
    data() {
      return {
        v$: useVuelidate(),
        tables: {
          table_name: "",
          table_status: 0,
          table_user : ''
        },
      };
    },
  
    validations() {
      return {
        tables: {
          table_name: { required },
          table_user: { required },
        },
      };
    },
  
    methods: {
      send() {
          this.v$.$touch();
          if(!this.v$.$invalid){
              this.$store.dispatch("add_table/tablesAdd", this.tables);
          }
      },
    },
  };
  </script>