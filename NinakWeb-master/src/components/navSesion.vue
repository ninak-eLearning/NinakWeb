<template lang="pug" >
    <div>
    <b-card title="Card Title" body-class="text-center" header-tag="nav" >
        <template v-slot:header>
        <b-nav card-header tabs>
            <b-nav-item active >Video</b-nav-item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cTQiN9dewIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <b-nav-item >Prueba</b-nav-item>
            <b-nav-item >Actividades Grupales</b-nav-item>
        </b-nav>
        </template>
        <b-card-text>
        With 
        </b-card-text>

        <b-card-footer>
            <p>Video de sesión 5 - Teoria de conjuntos</p>
            <p>En esta sesión abarcaremos los principios de teoria de conjuntos</p>
        </b-card-footer>
    </b-card>
    </div>

</template>