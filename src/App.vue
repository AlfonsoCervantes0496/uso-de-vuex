<template>
<div >
<div class="men">
    <Menu/>
    
    <button 
    class=" btn-danger arriba"
    @click="Arriba()"
    >↑</button>
 </div>
  

  <div id="container" class="container-fluid row">
    <Card
      v-for="persons in persons"
      :key="persons.id"
      :name="persons.name"
      :image="persons.image"
      :especie="persons.species"
      :genero="persons.gender"
      :status="persons.status"
    />
  </div>

  <button class="btn btn-info more" v-if="page <= 42" @click="More()">
    Mostrar mas
  </button>
  <h1 v-if="page > 42" class="p-3 mb-2 bg-danger text-white text-center">
    Haz llegado al ultimo personaje
  </h1>


 

 
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
import Card from "./components/card.vue";
import Menu from "./components/Menu.vue";
import store from "./store";

export default {
  name: "App",
  components: {
    Card,
    Menu,
  },
  
  methods: {
    Arriba() {
      document.documentElement.scrollTop = 0;
    },
    
    
  },
  setup() {
    window.addEventListener("scroll",()=>{
      let bntup = 0
      document.documentElement.scrollTop>100? bntup=true
      :bntup=false
      console.log(this.bntup)
    })
    const store = useStore();
    const More = () => {
      store.dispatch("getNextPage");
      store.dispatch("counterincrement");
    };
    onMounted(() => {
      store.dispatch("fetchData");
      
     
    });
    const persons = computed(() => store.state.persons);
    const page = computed(() => store.state.page);

    return { persons, page, More };
  },
  
  
};
</script>
<style scoped>
.more {
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 1rem;
}
.lastPage {
  display: none;
}
.men{
  position:fixed;
  width:100% ;
  z-index: 1;
}
#container{
  padding: 2rem;
  
}
.arriba{
  margin-top:60vh ;
  margin-left: 75vw;
  width: 10vh;
  height: 10vh;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  border-radius: 100%;
}

</style>
