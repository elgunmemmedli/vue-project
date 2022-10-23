 import axios from 'axios'
 import router from '../../router/index.js'
 export const add = {
    namespaced : true,
    state : {
        products : [],
    },

    getters : {
        getProducts(state){
            return state.products.reverse();
        }
    },

    mutations : {
        productsUpdate(state, payload){
            state.products.push(payload)
        }
    },

    actions : {
       async productAdd({commit}, payload){
        let data = await  axios.post('https://restoran-admin-default-rtdb.firebaseio.com/products.json', payload);
        payload.id = data.name;
        commit('productsUpdate', payload);
        router.replace('/product-list')
        },

        productsAll({commit}, payload){
            axios.get('https://restoran-admin-default-rtdb.firebaseio.com/products.json')
            .then(({data})=>{
               for(let key in data){
                data[key].id = key;
                commit('productsUpdate', data[key])
               }
            })
        }

    }
 }