<template lang="pug">
       
        
              b-card(
                no-body
                class="tarjeta"
                tag="article" 
                style="max-width: 18rem; "
                
                )
                <iframe width="300" height="170" src="https://www.youtube.com/embed/IMhgJKml0iU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                br
                card-text(class="title-card" align-v="center") 
                    strong {{name}} 
                br
                card-text 
                
                card-text(class="content-card" ) Descripcion de la asignatura. Esta asignatura es referente a Matemáticas 
                br 
                br
                footer
                    .container
                        div(class = "mb-4") 
                            b-avatar
                            b-avatar( variant = "primary"  text = "BV" )
                            b-avatar( variant = "info"  src = "https://placekitten.com/300/300")
                            b-avatar( variant = "success"  icon = "people-fill")
                    p
                        | &copy; 2020 |
                        i.fa.fa-value(aria-hidden='true') &nbsp;
                        a(href='#')  Contactos
</template>

<script>


import moment from "moment";
import Vue from "vue";
Vue.prototype.moment = moment
export default {  
    props: ['name'],
  components: { 
    timestamp: function () {
    return moment(this.model.attributes['created-at']).format('YYYY-MM-DD [at] hh:mm')
    }
  }, 

  methods: {


  }
};
</script>

<style lang='scss' scoped>
 
</style>