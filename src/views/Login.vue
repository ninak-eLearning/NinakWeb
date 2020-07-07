<template>
  
  <div id="divlogin" 
    data-react-class="EducatorAuth/EducatorAuth" 
    data-react-props="{
      &quot;authId&quot;:&quot;75c4b6ea241ad0e78ede75a43c28a4a3&quot;,
      &quot;defaultFlow&quot;:&quot;signup&quot;,
      &quot;errors&quot;:null}" 
  >
      <!-- NAVBAR LOGIN-->
      <div class="educatorAuth" >
        <nav class="navbar"> 
          <div class="navbar__left">
            <img class="navbar__logo" src="../assets/ninak_logo.png" alt="">
          </div>
          <div class="navbar__right">
            <a aria-label="Blog" class="button -normal -link -hideMedium" href=" " target="_blank" to=" " data-testid="navbar__link__blog">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"><strong>Blog </strong></font>
              </font>
            </a>
            <a aria-label="Centro de ayuda" class="button -normal -link -hideMedium" href=" " target="_blank" to=" " data-testid="navbar__link__help">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;"><strong>Centro de ayuda</strong></font></font>
            </a>
            <a aria-label="Recursos" class="button -normal -link -hideMedium" href="" target="_blank" to=" " data-testid="navbar__link__resources">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"><strong>Recursos</strong></font>
              </font>
            </a>
          </div>
        </nav>
      <!--SignUP Login-->
            <div class="signUpTab" >
              <h1>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;" class="login"><strong>LOGIN...</strong></font>
                </font>
              </h1>
              <p class="signUpTab__studentWarning">
                <b><font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                     Los estudiantes debe ingresar con la cuenta brindada por el colegio. 
                     </font>
                  </font>
                </b><br>
                <font style="vertical-align: inherit;">
                </font> 
              </p>
              
              
               <!-- Login -->
              
              <div class="signUpTab__buttonContainer" >
              <form @submit.prevent="sendForm()"  >
                <div class="form-group col-md-12 placeholderContainer" >
                    <input 
                      type="email" 
                      class="form-control" 
                      placeholder="E-mail" 
                      v-model="form.email"
                    >
                </div>
                <div class="form-group col-md-12 placeholderContainer">
                    <input 
                      type="password" 
                      class="form-control" 
                      placeholder="Password" 
                      v-model="form.password"
                    >
                </div>
                 
                <button aria-label="Sign In" class="genericSsoButton-Go" type="submit"
                        v-on:click="validarEmail()"               
                >
                    Sign In 
                </button>
              </form>
              </div>
              

              <div>
                <img class="login__kids" src="../assets/kids.png">
              </div>

              <p class="signUpTab__studentWarning2">
                <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Si usted no tiene cuenta </font></font></b>
                <font style="vertical-align: inherit;">
                </font> 
                <button class="button -linkA" aria-label="Ingrese su Flip Code para unirse a su discusión." data-testid="signUpTab__button__flipCodeModal" type="button">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">
                          <router-link to="signup"><strong>Ingrese aqui</strong></router-link>
                          </font>
                    </font>
                </button>
              </p>

            </div>
        <div class="announcer" role="alert" aria-live="assertive" aria-atomic="true">
        </div>
      </div>
  </div>
</template>


<script>
import axios from "axios"
export default {
  name: 'Login',
 
  data(){
    return {
      form:{
      email: '',
      password: '',
      },
      users:[]
    };
  },
  methods: {
    sendForm(){
      console.log('Clicking')
      console.log(this.form.email)
      console.log(this.form.password)  
       
      axios.post("http://3.19.185.86:9566/login",{
        username:'this.form.email',
        password:'this.form.password'
      })
      .then(response => {
        console.log(response)
        console.log(response.data.id)
        /*loginObj.output = response.data;*/
      })
      .catch(e => {
        console.log(e)
      })  
    },
    validarEmail(){
        //if(response.)
    }
  }
}

</script>