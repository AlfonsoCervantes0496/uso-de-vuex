<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg2 mb-3 mb-3 ">
    <div class="card">
      <img :src="image" alt="" class="card-img-top">
      <div class="card-body">
        <h5 :class="[{'bg-success':status==='Alive'},
        {'bg-danger':status==='Dead'},
        {'bg-warning':status==='unknown'},
        'card-body text-white  lead text-center']">
        {{name}}</h5>
        
        <h5 class='card-body lead text-center'>{{especie}}</h5>
      
        <h5 class='card-body lead text-center'>{{genero}}</h5>
        
      

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:{
    name:String,
    image:String,
    especie:String,
    genero:String,
    status:String
  }
  
}
</script>


