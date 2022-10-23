 import axios from 'axios'
 import router from '../../router/index.js'
 export const add_table = {
    namespaced : true,
    state : {
       tables : []
    },

    getters : {
       gonderTable(state){
         return state.tables;
       }
    },

    mutations : {
       tablesUpdate(state, payload){
         state.tables.push(payload);
       }
    },

    actions : {
     async tablesAdd({commit}, payload){
         let data = await  axios.post('https://restoran-admin-default-rtdb.firebaseio.com/tables.json', payload);
         payload.id = data.name;
      },


      tablesAll({commit}, payload){
         axios.get('https://restoran-admin-default-rtdb.firebaseio.com/tables.json')
         .then(({data})=>{
           for(let key in data){
           data[key].id = key;
           commit('tablesUpdate', data[key])
           }
         })
     }
    }
 }