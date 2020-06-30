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
      r-navS.subtitulo
</template>

<script>
import navS from '@/components/navSesion.vue';
export default {
  name: "Asignatura",
  components: { "r-navS": navS }, 
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
