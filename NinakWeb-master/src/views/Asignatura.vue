<template lang="pug">
    
    b-container(class=" p-3 mb-5 bg-white rounded")
      r-navbar

          b-row.curso
          b-col(col-sm="2") Asignatura     
          b-col.curso(col-sm="10") 
      b-row.subtitulo
        b-col 
          strong {{$route.params.id}}
      b-row 
      br
      div(class="card-deck offset-12 col 10")
       router-link( :to= "{ name: 'Sesion' , params: {id:encabezadoS.nombreS}}" v-for="encabezadoS of nombreSesion" :key="encabezadoS.id") 
         r-card.subtitulo(class="shadow bg-white rounded" :key="encabezadoS.id" :name="encabezadoS.nombreS") 

</template>

<script>
import card from '@/components/card.vue';
import navbar from '@/components/navbar.vue';
export default {
  name: "Asignatura",
  components: { 
    "r-card": card,
    "r-navbar": navbar }, 
  mounted() {
      this.fetchData();
  },
  data(){
    return{
      nombreSesion: []
    };
  },
  methods: {
    async fetchData(){
        const res = await fetch("nombreSesion.json");
        const val = await res.json();
        this.nombreSesion = val;
        console.log(val);
    }
  }
};
</script>

<style>
  .titulo{
    font-size: 36px;
    align-items: center;
    border: 1px solid rgb(221, 221, 221);
    min-height: 8rem;
  }
  .curso{
    border: 1px solid rgb(221, 221, 221);
    min-height: 2rem;
    align-items: center;
  }
  .subtitulo{
    border: 1px solid rgb(221, 221, 221);
    min-height: 2rem;
    align-items: center;
  }
</style>
