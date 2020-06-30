<template lang="pug">
    b-container(class="shadow p-3 mb-5 bg-white rounded")
      b-row.titulo(class="text-light p-3 bg-info")
        b-col Ninak
      b-row.curso
        b-col(col-sm="2") Asignatura     
        b-col.curso(col-sm="10") 
      b-row.subtitulo
        b-col 
          strong {{$route.params.id}}
      b-row 
      br
      b-row(align-v="center" class="offset-1 col 10")
       router-link( :to= "{ name: 'Sesion' , params: {id:encabezadoS.nombreS}}" v-for="encabezadoS of nombreSesion" :key="encabezadoS.id") 
         r-card.subtitulo(class="shadow p-3 mb-5 bg-white rounded" :key="encabezadoS.id" :name="encabezadoS.nombreS") 

</template>

<script>
import card from '@/components/card.vue';
export default {
  name: "Asignatura",
  components: { "r-card": card }, 
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
