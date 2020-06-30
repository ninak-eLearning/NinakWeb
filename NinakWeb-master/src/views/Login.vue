<template>
  
  <div 
    data-react-class="EducatorAuth/EducatorAuth" 
    data-react-props="{
      &quot;authId&quot;:&quot;75c4b6ea241ad0e78ede75a43c28a4a3&quot;,
      &quot;defaultFlow&quot;:&quot;signup&quot;,
      &quot;errors&quot;:null}">
      <div class="educatorAuth">
        <nav class="navbar">
          <div class="navbar__left">
            <img class="navbar__logo" src="../assets/ninak_logo.jpg" alt="">
          </div>
          <div class="navbar__right">
            <a aria-label="Blog" class="button -normal -link -hideMedium" href="https://blog.flipgrid.com" target="_blank" to="https://blog.flipgrid.com" data-testid="navbar__link__blog">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"><strong>Blog</strong></font>
              </font>
            </a>
            <a aria-label="Centro de ayuda" class="button -normal -link -hideMedium" href="https://help.flipgrid.com" target="_blank" to="https://help.flipgrid.com" data-testid="navbar__link__help">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;"><strong>Centro de ayuda</strong></font></font>
            </a>
            <a aria-label="Recursos" class="button -normal -link -hideMedium" href="https://resources.flipgrid.com" target="_blank" to="https://resources.flipgrid.com" data-testid="navbar__link__resources">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"><strong>Recursos</strong></font>
              </font>
            </a>
          </div>
        </nav>
        
 <!--       <div class="educatorAuth__joinDiscussion">
  <p>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                ¿Quieres unirte a tu discusión? </font>
              </font>
              
              <button class="button -linkA" aria-label="Ingrese su Flip Code para unirse a su discusión." data-testid="educatorAuth__button__flipCode" type="button">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    Ingrese su código de Flip
                  </font>
                </font>
              </button>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">!</font>
                </font>
              </p>
            </div>-->
            
            <div class="signUpTab">
              <h1>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;"><strong> LOGIN</strong></font>
                </font>
              </h1>
              <p class="signUpTab__studentWarning">
                <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Los estudiantes debe ingresar con la cuenta brindada por el colegio. </font></font></b><br>
                <font style="vertical-align: inherit;">
                </font> 
              </p>
              
              <div class="signUpTab__buttonContainer">
                <div class="form-group col-md-12 placeholderContainer">
                    <input type="email" class="form-control" placeholder="Correo electrónico" aria-required="true" spellcheck="false" autocomplete="off" data-bind="
                            hasFocus: focus,
                            textInput: email,
                            attr: {'placeholder': config.text.emailPlaceHolder, 'aria-invalid': !error}">
                </div>
                <div class="form-group col-md-12 placeholderContainer">
                    <input type="password" class="form-control" placeholder="Contraseña" aria-required="true" spellcheck="false" autocomplete="off" data-bind="
                            hasFocus: focus,
                            textInput: password,
                            attr: {'placeholder': config.text.emailPlaceHolder, 'aria-invalid': !error}">
                </div>
                <!--
                  <button aria-label="Regístrese con Google" class="genericSsoButton -google" type="button">
                  <div class="genericSso__icon">
                    <svg version="1.1" src="https://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 48 48">
                      <g>
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z">
                        </path>
                      </g>
                    </svg>
                  </div>
                  
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Regístrese con Google</font>
                  </font>
                </button>-->
                
                <button aria-label="Sign In" class="genericSsoButton -Go " type="button">
 
                    <span class="span">Sign In</span>

                </button>
                
              </div>
              <!--
              <p class="legaltext">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Al continuar, acepto los </font>
                  <a aria-label="Terms of Use" class="button -normal -link" href="https://legal.flipgrid.com/terms-of-use.html" target="_blank" to="https://legal.flipgrid.com/terms-of-use.html" data-testid="signUpTab__link__terms">
                  <font style="vertical-align: inherit;">Términos de uso</font></a>
                  <font style="vertical-align: inherit;"> y </font>
                  <a aria-label="Privacy Policy" class="button -normal -link" href="https://legal.flipgrid.com/privacy.html" target="_blank" to="https://legal.flipgrid.com/privacy.html" data-testid="signUpTab__link__privacy">
                  <font style="vertical-align: inherit;">la Política de privacidad de</font></a>
                  <font style="vertical-align: inherit;"> Flipgrid </font>
                  <font style="vertical-align: inherit;">.</font></font> 
                  <a aria-label="Términos de Uso" class="button -normal -link" href="https://legal.flipgrid.com/terms-of-use.html" target="_blank" to="https://legal.flipgrid.com/terms-of-use.html" data-testid="signUpTab__link__terms">
                  <font style="vertical-align: inherit;"></font></a> <font style="vertical-align: inherit;"></font> 
                  <a aria-label="Política de privacidad" class="button -normal -link" href="https://legal.flipgrid.com/privacy.html" target="_blank" to="https://legal.flipgrid.com/privacy.html" data-testid="signUpTab__link__privacy">
                  <font style="vertical-align: inherit;"></font></a>
                  <font style="vertical-align: inherit;"></font></p>
                  <a href="/educator" class="button -link signUpTab__backToSignInLink" data-testid="signUpTab__link__backToSignIn">
                  <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">¿Ya tienes una cuenta?</font></font></a>-->
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