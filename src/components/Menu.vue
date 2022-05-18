<template>
<div class="init bg-dark">
<h1 class="text-white text-center">Ejercicio vuex</h1>


</div>
    
<nav class="  bg-dark">
    <h1 class="text-white text-center"
    @click="menu=!menu"
    >Menu</h1>
    

    <div :class="[{'Group-columns':menu===true},{'Group-columnsfalse':menu===false}]">
    <button class="btn btn-outline-light"
    @click="All()">todos</button>
    <button class="btn btn-outline-success"
    @click="Alive()">Vivos</button>
    <button class="btn btn-outline-danger"
    @click="Dead()"> Muertos</button>
    <button class="btn btn-outline-warning"
    @click="unknown()">desconocidos</button>
    </div>
</nav>
  
</template>

<script>
import {useStore} from 'vuex'
export default {
    name:"Menu",
    data(){
    return{
        menu:false
    }
    },
    setup(){
        const store =useStore()
        const Alive =()=>{
            store.dispatch('filterAlive')
            
        }
        const Dead =()=>{
            store.dispatch('filterDead')
          
        }
        const unknown =()=>{
            store.dispatch('filterunknown')
          
        }
        const All =()=>{
            store.dispatch('getAll')
          
        }

        
        
        
        return {Alive, Dead, unknown, All}


    }
}
</script>

<style >

    


.Group-columns{
    padding-top: 1rem;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    

}
button{
   width: 15%;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 1rem;
   margin-top: 2rem;
} 
h1{
    display: none;
}
@media(max-width:770px){
.Group-columns{
     width: 50%;
   margin-left: 25%;
   margin-right: 25%;
   display: flex;
   flex-direction: column;
   margin-bottom: 1rem;
   display:block;
}
.Group-columnsfalse{
    display:none;
}


button{
    width: 80%;
   margin-left: 10%;
   margin-right: 10%;
   margin-bottom: 1rem;
   
}
h1{
    display: block;
}
}

   




</style>