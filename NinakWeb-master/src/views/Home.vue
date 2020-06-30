<template lang="pug">
  b-container(class="shadow p-3 mb-5 bg-white rounded")
    b-row.titulo(class="text-light p-3 bg-info")
      b-col Ninak
    b-row.curso
      b-col(col-sm="2") 
        strong Asignatura     
      b-col.curso(col-sm="10") 
    b-row.subtitulo
      b-col 
        strong Asignaturas
    b-row 
    br
    b-row(align-v="center" class="offset-1 col 10")
     router-link( :to= "{ name: 'Asignatura' , params: {id:encabezado.nombreCurso}}" v-for="encabezado of nombreAsignatura" :key="encabezado.id") 
      r-card(class="shadow p-3 mb-5 bg-white rounded" :key="encabezado.id" :name="encabezado.nombreCurso")  
</template>

<script>
import card from '@/components/card.vue';

export default {
  name: "Home",
  components: { "r-card": card }, 
  mounted() {
      this.fetchData();
  },
  data(){
    return{
      nombreAsignatura: []
    };
  },
  methods: {
    async fetchData(){
        const res = await fetch("nombreAsignatura.json");
        const val = await res.json();
        this.nombreAsignatura = val;
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