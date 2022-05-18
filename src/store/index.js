
import { createStore } from 'vuex'

export default createStore({
  state: {
    persons:[],
    original:[],
    page:2
  },
  getters: {
  },
  mutations: {
    setPersons(state,payload){
      state.persons=payload
      state.original=payload
      console.log(state.persons);
    },
    setStatus(state,payload){
      state.persons=payload
      
    },
    counterPage(state,payload){
      state.page=payload
    },
    setMore(state,payload){
      state.persons=payload
      state.original=payload
      
    },
  },
  actions: {
    counterincrement({commit,state}){
      
      let next =state.page+1
      commit('counterPage',next)
      

    },
    async fetchData({commit}){
      const result = await fetch("https://rickandmortyapi.com/api/character/?page=1")
      const {results} = await result.json()
      commit('setPersons',results)
    },
    filterAlive({commit,state}){
      let fiterbystatus = state.original.filter(e=>e.status==="Alive")
      fiterbystatus.sort()
      commit('setStatus',fiterbystatus)
    },
    filterDead({commit,state}){
      let fiterbystatus = state.original.filter(e=>e.status==="Dead")
      commit('setStatus',fiterbystatus)
    },
    filterunknown({commit,state}){
      let fiterbystatus = state.original.filter(e=>e.status==="unknown")
      commit('setStatus',fiterbystatus)
    },
    getAll({commit,state}){
      let fiterbystatus = state.original
      commit('setStatus',fiterbystatus)
    },
    async getNextPage({commit,state,}){
    
      const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${state.page}`)
      const {results} = await result.json()
      let consolidated = [...state.original,...results]
      commit('setMore',consolidated)


    }
  },
  modules: {
  }
})
