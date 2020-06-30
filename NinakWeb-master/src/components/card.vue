<template lang="pug">
       
         .col.tarjeta 
              b-card(
                img-src="https://picsum.photos/150/250.jpg"
                img-alt="Image"
                img-left="" 
                tag="article" 
                style="max-width: 18rem;")
                card-text 
                    strong {{name}} 
                br
                card-text -------- 
                br
                card-text Descripcion de la asignatura. Esta asignatura es referente a Matemáticas 
                
</template>

<script>
export default {  
    props: ['name']
};
</script>

<style lang='scss' scoped>
.tarjeta{
    font-size: 70%;
    min-height: 18rem;
    min-width: 23rem;
    border: 1px solid rgb(221, 221, 221);

}

</style>