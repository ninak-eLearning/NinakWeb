<template lang="pug">
  b-container(class="container")
    r-navbar
    b-row.subtitulo
      b-col(class="marcoTitulo" align-v="center") Asignaturas
    b-row 
    br
    div(class="card-deck offset-12 col 10")
     router-link( :to= "{ name: 'Asignatura' , params: {id:encabezado.nombreCurso}}" v-for="encabezado of nombreAsignatura" :key="encabezado.id") 
      r-card.subtitulo(class="shadow mb-5 bg-white" :key="encabezado.id" :name="encabezado.nombreCurso")  
</template>

<script>
import card from '@/components/card.vue';
import navbar from '@/components/navbar.vue';

export default {
  name: "Home",
  components: { 
    "r-card": card,
    "r-navbar": navbar,
  }, 
  mounted() {
      this.fetchData();
  },
  data(){
    return{
      nombreAsignatura: [],
    };
  },
  methods: {
    async fetchData(){
        const res = await fetch("nombreAsignatura.json");
        const val = await res.json();
        this.nombreAsignatura = val;
        console.log(val);
    },
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