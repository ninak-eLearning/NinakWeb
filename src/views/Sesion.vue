<template lang="pug">
  <div>
    <nav class="navigationBar">
      <div class="navigationBar__left">
        <img class="navigationBar__msftLogo" src="https://static.flipgrid.com/fg-svgs/microsoft-logo.svg" alt="Microsoft Logo">
        <span class="navigationBar__leftSpacer"></span>
        <button class="button -transparent -icon codeModal" type="button">
          <span class="codeModal__text">rubiceleste</span>
        </button>
      </div>
      <div class="flipgridLogo -centered">
        <img src="https://static.flipgrid.com/fg-svgs/flipgrid_logo_outlined.svg" alt="Flipgrid Logo">
      </div>
      <div class="navigationBar__right"><div class="fgn-search "><button class="button -transparent -icon__square search__button" type="button" title="Search" aria-label="Open search box" data-testid="searchBox__button__toggle" data-reach-tooltip-trigger=""><svg version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="20" height="20"><g><path d="M15.66,14.04l-3.788-3.782c0.782-1.102,1.198-2.389,1.198-3.747 C13.07,2.922,10.134,0,6.532,0S0,2.922, 0,6.511c0,3.595,2.93,6.518,6.532,6.518c1.351,0,2.625-0.395,3.712-1.156l3.796,3.788 c0.215,0.222,0.506, 0.341,0.817,0.341h0.007c0.305,0,0.589-0.125,0.796-0.341c0.222-0.214,0.34-0.498,0.34-0.81 C16,14.546, 15.882,14.262,15.66,14.04 M6.532,2.292c2.333,0,4.239,1.891,4.239,4.218s-1.905,4.226-4.239,4.226 c-2.334, 0-4.232-1.898-4.232-4.226S4.198,2.292,6.532,2.292"></path></g></svg></button></div><button class="button -large -transparent -icon__square themeToggleButton undefined" type="button" data-testid="themeToggleButton__button__toggleTheme" aria-label="Change color mode to dark." data-reach-tooltip-trigger=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="26px"><path d="M63.4,15.6c0.5,0.5,0.5,1.2,0.2,1.8l-2.4,4.4c-0.7,1.3,0.7,2.8,2,2.2l4.5-2.1c0.6-0.3,1.3-0.1,1.8,0.4l3.4, 3.6     c1,1.1,2.9,0.2,2.7-1.3l-0.6-5c-0.1-0.7,0.3-1.3,0.9-1.6l4.5-2.1c1.4-0.7, 1.1-2.7-0.4-3l-4.9-1c-0.7-0.1-1.2-0.7-1.3-1.3     l-0.6-4.9c-0.2-1.5-2.2-1.9-2.9-0.6l-2.4,4.3c-0.3, 0.6-1,0.9-1.7,0.8l-4.9-0.9C60,9,59,10.8,60,11.9L63.4,15.6z"></path><path d="M55.1,47c0.5,0.3,0.7,0.8,0.6,1.3l-0.8,3.8c-0.3,1.2,1.1,2,2,1.2l2.9-2.5c0.4-0.3,1-0.4,1.4-0.1l3.3, 2     c1,0.6,2.2-0.5,1.7-1.5l-1.5-3.6c-0.2-0.5-0.1-1,0.3-1.4l2.9-2.6c0.9-0.8, 0.3-2.2-0.9-2.1l-3.9,0.3c-0.5,0-1-0.2-1.2-0.7     l-1.6-3.5c-0.5-1.1-2.1-0.9-2.3, 0.2l-0.9,3.8c-0.1,0.5-0.6,0.9-1.1,0.9l-3.8,0.4c-1.2,0.1-1.5,1.7-0.5,2.3L55.1,47z"></path><path d="M96.9,56.6l-3.4-2.4c-0.5-0.3-0.7-0.9-0.5-1.5l1.1-4c0.4-1.2-1.1-2.2-2.1-1.4l-3.3, 2.5c-0.5,0.3-1.1,0.4-1.5,0l-3.5-2.3     c-1.1-0.7-2.4,0.3-2,1.5l1.4,3.9c0.2,0.5, 0,1.1-0.4,1.5l-3.3,2.6c-1,0.8-0.4,2.4,0.8,2.4l4.2-0.1c0.6,0,1.1,0.3,1.3, 0.9l1.4,3.9     c0.4,1.2,2.1,1.1,2.5-0.1l1.2-4c0.2-0.5,0.7-0.9,1.2-0.9l4.2-0.2C97.5, 59,98,57.4,96.9,56.6z"></path><path d="M76.4,75.5c-4.7,0.4-9.6,0-14.5-1.5c-19.8-6.2-30.9-27.2-24.8-47c1.5-4.8,3.9-9.1, 6.9-12.8c1.7-2,0-4.9-2.6-4.7     C24.7,11.2,9.8,22.6,4.4,39.8c-7.1,22.8,5.7,47,28.5, 54c17.1,5.3,35-0.6,45.9-13.5C80.5,78.4,79,75.3,76.4,75.5z"></path></svg></button>
      <div>
        <div class="hide-for-desktop">
          <button class="button -transparent -icon__square mobileNav__toggleButton" type="button" data-testid="navigationBar__button__options" aria-label="More options" data-reach-tooltip-trigger="">
            <svg version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 14 4" width="26"><path d="M12,0 C13.105,0 14,0.895 14,2 C14,3.105 13.105,4 12,4  C10.895,4 10,3.105 10,2 C10,0.895 10.895,0 12,0 L12,0 Z M7,0  C8.105,0 9,0.895 9,2 C9,3.105 8.105,4 7,4 C5.895,4 5,3.105 5,2  C5,0.895 5.895,0 7,0 L7,0 Z M2,0 C3.105,0 4,0.895 4,2 C4,3.105  3.105,4 2,4 C0.895,4 0,3.105 0,2 C0,0.895 0.895,0 2,0 L2,0 Z"></path>
            </svg>
          </button>
        </div>
      </div>
      </div>
    </nav>
    <main class="grid">
      <div class="gridHero gridArea__full" style="background-image: url(&quot;https://media.flipgrid.com/img/eyJhbGciOiJIUzUxMiJ9.eyJpZCI6ImM1MDQzZThlM2VmZjQyYmM5MzA4NzU2YWU2OGUyMDA1IiwiZXhwIjoxNTkzOTk0MjQ3LCJ0eXBlIjoxfQ.8I5Tii0MeK4Sq8rstqtPdmd-IfWIXJIDGJYs49wOHZm9vNznsD4yAaAF0kfUBKALaPdG1bKTji5ieh8JDIPebQ&quot;); background-color: rgb(38, 38, 38); background-position: center 0px; background-size: cover;">
        <h1 class="gridHero__title">Informática</h1>
        <button type="button" class="coPilotCluster -inactive" aria-label="Grid Information. Owner: Rubi Celeste Alfaro Mostacero.">
        <div class="coPilotCluster__images">
          <span class="coPilotCluster__image">
          <svg style="margin-top: -11px;" data-testid="smilingFaceWithSunglasses" xmlns="http://www.w3.org/2000/svg" width="45" height="45" class="" viewBox="0 0 64 64">
          <linearGradient id="A-fk-SmilingFaceWithSunglasses-66506" gradientUnits="userSpaceOnUse" x1="32" y1="62" x2="32" y2="2.001"><stop offset="0" stop-color="#ff9500"></stop>
          <stop offset=".093" stop-color="#ff9f03"></stop><stop offset=".49" stop-color="#ffc710"></stop><stop offset=".806" stop-color="#ffdf17"></stop><stop offset="1" stop-color="#ffe81a"></stop>
          </linearGradient>
          <circle fill="url(#A-fk-SmilingFaceWithSunglasses-66506)" cx="32" cy="32" r="30"></circle><linearGradient id="B-fk-SmilingFaceWithSunglasses-66506" gradientUnits="userSpaceOnUse" x1="32.001" y1="38.498" x2="32.001" y2="18.142">
          <stop offset="0" stop-color="#1a1626"></stop><stop offset=".425" stop-color="#1f1b2b"></stop>
          <stop offset=".925" stop-color="#2d2938"></stop><stop offset="1" stop-color="#302c3b"></stop>
          </linearGradient><path fill="url(#B-fk-SmilingFaceWithSunglasses-66506)" d="M36.123 20.814c-2.357 1.205-5.892 1.205-8.249 0-2.518-1.321-5.592-2.169-9.274-2.499-3.593-.323-11.215-.312-15.027 1.062-.438.156-.866.359-1.283.577-.234.123-.282.212-.282.66v.579c0 1.088-.133.666.627 1.119 1.48.887 2.321 3.189 2.771 6.358.642 4.621 2.855 7.515 6.453 8.898a14.16 14.16 0 0010.384-.115c1.811-.741 3.4-1.912 4.664-3.813 2.218-3.332 1.553-5.411 2.695-8.273.996-2.499 3.795-2.499 4.793 0 1.145 2.862.48 4.941 2.695 8.273 1.262 1.9 2.854 3.071 4.666 3.813a14.145 14.145 0 0010.382.115c3.597-1.384 5.813-4.277 6.454-8.898.449-3.169 1.291-5.471 2.771-6.358.76-.453.627-.03.627-1.119v-.579c0-.448-.049-.538-.282-.66a10.187 10.187 0 00-1.282-.577c-3.813-1.374-11.434-1.386-15.026-1.062-3.684.33-6.76 1.178-9.277 2.499"></path><linearGradient id="C-fk-SmilingFaceWithSunglasses-66506" gradientUnits="userSpaceOnUse" x1="46.794" y1="35.889" x2="46.794" y2="20.593"><stop offset="0" stop-color="#708694"></stop><stop offset="1" stop-color="#c2dff0"></stop></linearGradient><path opacity=".3" fill="url(#C-fk-SmilingFaceWithSunglasses-66506)" d="M37.698 22.843c-1.434 1.272-.132 10.479 4.22 12.183 2.715 1.063 8.053 1.706 11.742-1.546 3.021-2.663 3.674-10.726 1.526-11.979-2.36-1.378-14.422-1.378-17.488 1.342z"></path>
          <linearGradient id="D-fk-SmilingFaceWithSunglasses-66506" gradientUnits="userSpaceOnUse" x1="17.394" y1="35.893" x2="17.394" y2="20.596"><stop offset="0" stop-color="#708694"></stop><stop offset="1" stop-color="#c2dff0"></stop></linearGradient><path opacity=".3" fill="url(#D-fk-SmilingFaceWithSunglasses-66506)" d="M26.49 22.846c1.434 1.272.132 10.48-4.219 12.182-2.716 1.063-8.054 1.708-11.744-1.546-3.021-2.662-3.673-10.724-1.526-11.979 2.36-1.378 14.422-1.378 17.489 1.343z"></path><path fill="#1A1626" d="M24.659 50.003c7.75 2.006 17.273-1.016 21.293-7.304.329-.516-.183-1.063-.7-.654-4.201 3.316-13.119 5.785-19.649 3.876-2.5-.732-3.587 3.397-.944 4.082z"></path></svg></span></div><div class="coPilotCluster__names">Rubi Celeste Alfaro Mostacero </div><div class="coPilotCluster__infoIcon"><svg width="16" height="16" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-373.000000, -1201.000000)" fill="#ffffff"><g transform="translate(60.000000, 1191.000000)"><g transform="translate(312.942598, 10.000000)"><path d="M6,12 C2.6862915,12 0,9.3137085 0,6 C0,2.6862915 2.6862915,0 6,0  C9.3137085,0 12,2.6862915 12,6 C12,9.3137085 9.3137085,12 6,12 Z M6.835,4.25  L5.165,4.25 L5.165,9.5 L6.835,9.5 L6.835,4.25 Z M5.985,3.93 C6.515,3.93 6.925,3.55  6.925,3.03 C6.925,2.5 6.515,2.12 5.985,2.12 C5.455,2.12 5.055,2.5 5.055,3.03 C5.055,3.55  5.455,3.93 5.985,3.93 Z"></path></g></g></g></g></svg>
        </div>
        </button>
      </div>
      <div class="topicSelect__wrapper gridArea__full" role="combobox" aria-controls="topicSelectToggle" aria-expanded="false" id="topic-select-wrapper" aria-haspopup="listbox" aria-labelledby="downshift-0-label"><button type="button" role="button" aria-label="Topic picker menu. Say Hello on Flipgrid! selected, created on
              Jul 1, 2020. There are 0 topics 
              in the list sub menu." aria-haspopup="true" data-toggle="true" id="topicSelectToggle" class="topicSelect" disabled="" data-testid="topicSelect__button"><div class="topicSelect__title"><h3 id="activeTopicTitle" class="topicSelect__activeTopicTitle">Say Hello on Flipgrid!</h3><p class="topicSelect__itemDate">Jul 1, 2020</p>
              </div>
              </button>
      </div>
      <div class="topicHeader gridArea__full -resource" style ="display: flex;">
        <div class="topicHeader__resource">
          <div class="topicResourceButton">
            <button type="button" class="topicResourceButton topicResource__giphy -pause" aria-label="Topic Media for Say Hello on Flipgrid! Click to pause" data-testid="topicResource__button__topicResource"><video class="topicResource__giphyVideo" src="https://static.flipgrid.com/admin/grid_templates/resources/plc.mp4" alt="Grid Topic Resource" id="giphyVideo" type="video/mp4" autoplay="" loop=""></video></button><button class="button -clear topicResource__giphyButton" type="button" aria-label="Giphy tag" data-testid="topicResource__button__giphy"><div class="topicCardTag__tag -giphy" aria-hidden="true"><img src="https://static.flipgrid.com/fg-svgs/topicvid_giphy.jpg" alt="" width="54"></div></button></div></div>
          <div class="topicHeader__info" style="padding:20px"><p data-testid="topicHeader__p__info" class="topicHeader__text" style="text-align: start;"><span>Welcome to Flipgrid! Tap the green plus below to open the Flipgrid Camera. Then, record a short video and...<br><br><span class="emojiWrap">👋 </span> Say Hello<br><span class="emojiWrap">🤩 </span> Share a fun fact about yourself</span></p><div class="topicIntegration"><button class="button -circle -blue -icon__circle immersiveReaderButton  " type="button" data-testid="immersiveReaderButton__button__launch" aria-label="Launch Immersive Reader" data-reach-tooltip-trigger=""><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 100 100"><g><g><g><path fill="#FFF" d="M53.6,7.2c-0.3,0-0.6,0-0.8,0.1c-1.4,0.4-6.2,1.8-9.8,4.8c-0.2,0.2-0.5,0.2-0.7, 0c-3.3-2.7-7.5-4.3-8.9-4.7L33,7.2 C32.8,7.1,32.5,7,32.2,7H3.9C1.8,7,0,8.8,0,10.9v60.9c0,2.2,1.8,3.9,3.9, 3.9h22.5c2.2,0,3.9-1.8,3.9-3.9v0c0-2.2-1.7-3.9-3.9-3.9 H10c-1.2,0-2.2-1-2.2-2.2V17c0-1.2,1-2.2,2.2-2.2l20.8,0c0.3,0.1,0.5, 0.1,0.8,0.2c3.1,1.3,5.5,2.9,6.7,4c0.2,0.5,0.4,1,0.6,1.5 l0,21.4c0,2.2,1.8,3.9,3.9,3.9h0c2.2,0,3.9-1.8,3.9-3.9V19.8c0-1.4, 3.6-3.7,7.7-4.9c0.2,0,0.4-0.1,0.6-0.1l20.9,0 c0.3,0,0.6,0.3,0.6,0.6v10c0,2.2,1.8,3.9,3.9,3.9h0c2.2,0,3.9-1.8, 3.9-3.9V11.5c0-2.4-1.9-4.3-4.3-4.3L53.6,7.2z"></path></g><g><path fill="#FFF" d="M70.6,39.9v50.8c0,1.3-1,2.3-2.3,2.3h-2.6c-0.6,0-1.2-0.3-1.7-0.7L48.8,76.7c-0.1-0.1-0.3-0.2-0.4-0.2 h-8.5c-1,0-1.8-0.8-1.8-1.8V56.6c0-1,0.8-1.7,1.7-1.8l8.6-0.2c0.2, 0,0.3-0.1,0.4-0.2l15.8-16.2c0.4-0.5,1-0.7,1.7-0.7h2 C69.5,37.5,70.6,38.6,70.6,39.9z"></path></g><g><path fill="#FFF" d="M86.4,65.7c0,8.5-5.3,17.1-5.7,17.5c-0.3,0.3-0.8,0.5-1.2,0.5c-0.3,0-0.6-0.1-0.9-0.2l-3.7-2.2 c-0.4-0.2-0.7-0.6-0.8-1.1c-0.1-0.5,0-0.9,0.2-1.3c0-0.1,4.3-7,4.3-13.2c0-3.8-1.4-8.2-4.1-13.4c0,0,0,0,0,0 c-0.6-1.1-0.2-2.5,0.9-3.1l3.2-1.9c0.3-0.2,0.6-0.3,0.9-0.3c0.2,0,0.3,0,0.5, 0.1c0.5,0.1,0.8,0.4,1.1,0.9l0.1,0.2 C83.1,51.6,86.4,58.5,86.4,65.7z"></path></g><g><path fill="#FFF" d="M100,65.9c0,8.3-2.8,16.9-7.9,24.3c-0.1,0.1-0.1,0.1-0.1,0.2c-0.2,0.4-0.6,0.7-1.1,0.8 c-0.1,0-0.3,0-0.4,0c-0.4,0-0.7-0.1-1.1-0.4L86,88.3c-0.4-0.3-0.6-0.7-0.7-1.2c-0.1-0.5,0.1-0.9,0.3-1.3 c0.1-0.1,6.6-8.8,6.6-20.2c0-11.4-6.5-20.1-6.6-20.2c-0.3-0.4-0.4-0.8-0.3-1.3c0.1-0.5,0.3-0.9,0.7-1.2l3.5-2.6 c0.3-0.2,0.7-0.4,1.1-0.4c0.1,0,0.3,0,0.4,0c0.5,0.1,0.9,0.4,1.1, 0.8c0,0,0.1,0.1,0.1,0.2C95.1,45.5,100,54.6,100,65.9z"></path></g></g></g></svg>
          </button>
          </div>
        </div>
      </div>
      <hr class="gridArea__full divider -lg">
    </main>
    <footer class="footer" role="contentinfo">
      <hr class="divider -lg">
        <ul class="footer__links" style="text-align: left;">
          <li>
            <a class="button -normal -link" href="https://legal.flipgrid.com/privacy.html" rel="noopener noreferrer" target="_blank" data-testid="footer__link__privacy">Privacy</a>
          </li>
          <li>
            <a class="button -normal -link" href="https://legal.flipgrid.com/terms-of-use.html" rel="noopener noreferrer" target="_blank" data-testid="footer__link__termsOfUse">Terms of Use</a>
          </li>
          <li>
            <a class="button -normal -link" href="https://blog.flipgrid.com" rel="noopener noreferrer" target="_blank" data-testid="footer__link__blog">Blog</a>
          </li>
          <li>
            <a class="button -normal -link" href="https://help.flipgrid.com/" rel="noopener noreferrer" target="_blank" data-testid="footer__link__help">Help Center</a>
          </li>
          <li>
            <a class="button -normal -link" href="https://blog.flipgrid.com/amplify/#flipgridresources" rel="noopener noreferrer" target="_blank" data-testid="footer__link__resources">Resources</a>
          </li>
          <li>
            <a class="button -normal -link" href="https://help.flipgrid.com/" rel="noopener noreferrer" target="_blank" data-testid="footer__link__contact">Contact</a>
          </li>
          <li>
            <a class="button -normal -link" href="https://twitter.com/flipgrid" rel="noopener noreferrer" target="_blank" data-testid="footer__link__twitter">@Flipgrid</a>
          </li>
        </ul>
      <p class="footer__hide-for-desktop" style="text-align: left; padding-left: 20px">Made with love by your Flipgrid friends. © Microsoft 2020</p>
      <div class="footer__btns" style="    display: flex;">
          <button class="button -block -clear -icon__square" type="button" id="appstoreButton" data-testid="footer__button__appStore" aria-label="Get Flipgrid from the Apple store">
            <img src="https://static.flipgrid.com/appBtn_apple.png" width="119" alt="">
          </button>
          <button class="button -block -clear -icon__square" style="padding-left: 20px;" type="button" data-testid="footer__button__googlePlay" aria-label="Get Flipgrid from Google Play">
            <img src="https://static.flipgrid.com/appBtn_google.png" width="119" alt="">
          </button>
      </div>
    </footer>
  </div>
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
.footer__btns button {
    border-radius: 9px;
}
.button.-icon__square {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: unset;
}

.button.-block {
    display: block;
    width: 100%;
}
.button.-clear {
    padding: 0;
    border: none;
    background: none;
}
.footer__btns {
    position: absolute;
    top: 2.8em;
    right: 1em;
    margin-right: 0;
}
.footer .footer__hide-for-desktop {
    display: block;
}

.footer p {
    margin-bottom: 1.5em;
    color: #555555;
}
.button.-link, .topicHeader__text a {
    display: inline;
    min-width: 0;
    padding: 0;
    background: transparent;
    text-decoration: underline;
    vertical-align: baseline;
    word-break: break-word;
    white-space: normal;
    background: transparent;
    color: #0878d4;
    font-size: inherit;
    line-height: inherit;
    border: unset;
    border-radius: 0;
    font-family: "geomanist-medium",Helvetica,sans-serif;
}
article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
}
@media only screen and (min-width: 1035px) {
  .footer {
      text-align: left;
  }
  .footer__links {
    margin-left: 0;
    margin-right: auto;
}
}
.footer__links li {
    display: inline-block;
    margin: 0 0.85em 0.5em 0;
}
.footer {
    position: relative;
    min-height: 10em;
    width: 100%;
    margin-bottom: 2em;
    padding-left: 1em;
    padding-left: var(--site-gutter);
    padding-right: 1em;
    padding-right: var(--site-gutter);
    padding-bottom: 2em;
    font-family: "geomanist-regular",Helvetica,sans-serif;
    font-size: .875em;
    text-align: center;
    background: #ffffff;
    background: var(--content-background, #fff);
}
@media only screen and (min-width: 768px) {
  .topicHeader {
      margin-top: 4em;
  }
}
.button.-icon__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 0.75em;
    min-width: unset;
}
.topicIntegration {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.topicHeader__text {
    font-size: 1.25em;
    width: fit-content;
}

.divider {
    margin-top: 1em;
    margin-bottom: 1em;
    background: #e7edf4;
    background: var(--hr-background, #e7edf4);
    height: 2px;
}

p, a {
    line-height: 1.7;
    letter-spacing: 0.2px;
}

.topicHeader__resource, .topicHeader__info {
    display: flex;
    justify-content: flex-start;
}
.topicHeader__resource, .topicHeader__info {
    flex-direction: column;
    flex-wrap: unset;
    width: unset;
    margin-right: unset;
}
img {
    vertical-align: middle;
}
.topicCardTag__tag.-giphy {
    background-color: #000000;
}
.topicCardTag__tag {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: transparent;
    overflow: hidden;
    border-radius: 6px 0 19px 0;
    padding: .625em;
    font-family: "geomanist-medium",Helvetica,sans-serif;
    display: flex;
    align-items: center;
    height: 2.5em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.topicResource__giphyButton {
    height: 40px;
    width: 74px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 7px 0 20px 0;
}
.button.-clear {
    padding: 0;
    border: none;
    background: none;
}
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
}
.topicResource__giphy .topicResource__giphyVideo {
    margin-bottom: -6px;
}
.topicResourceButton>img, .topicResourceButton video {
    width: 100%;
    height: auto;
    border-radius: 20px;
}
.topicResource__giphy {
    padding: 0;
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    position: relative;
}
.topicResourceButton {
    padding: 0;
    border: none;
    background: none;
    position: relative;
    border-radius: 20px;
    width: 100%;
}
.topicHeader__resource, .topicHeader__info {
    flex-direction: column;
    flex-wrap: unset;
    width: unset;
    margin-right: unset;
}
.topicHeader__resource, .topicHeader__info {
    display: flex;
    justify-content: flex-start;
}
.topicHeader.-resource {
    --resource-width: 1fr;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 1fr;
}
.topicSelect__itemDate, .topicSelect__subtitle {
    font-size: .9375em;
    margin: 0;
}
.topicSelect__activeTopicTitle {
    font-family: "geomanist-bold",Helvetica,sans-serif;
    color: #262626 !important;
    color: var(--default-text, #262626) !important;
}
.topicSelect__title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    color: #262626;
    color: var(--default-text, #262626);
}
.topicSelect {
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.25em 0.875em;
    border-radius: 16px;
    border: 0;
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
    background: white;
    background: var(--card-background, white);
    color: unset;
    z-index: 7;
}
.topicSelect__wrapper {
    position: relative;
    display: flex;
    margin-top: -2em;
}
.gridArea__full {
    grid-column-start: viewport;
    grid-column-end: viewport;
    padding-left: 1em;
    padding-right: 1em;
}
.grid {
    max-width: unset;
    margin-left: unset;
    margin-right: unset;
    grid-template-columns: [viewport-start] minmax(var(--site-gutter), 1fr) [containerXL-start] minmax(0, 1fr) [container-start] minmax(0, 100em) [container-end] minmax(0, 1fr) [containerXL-end] minmax(var(--site-gutter), 1fr) [viewport-end];
}
.gridHero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 13em;
    margin-top: 3.625em;
    padding-top: 4em;
    padding-bottom: 5em;
}
.gridHero__title {
    max-width: unset;
    margin-bottom: 0;
    font-family: "geomanist-bold",Helvetica,sans-serif;
    font-size: 10vw;
    letter-spacing: -3px;
    text-align: center;
    text-shadow: 2px 1px 10px #262626;
    color: white !important;
    max-width: 90%;
}
.coPilotCluster {
    padding: 0;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    min-height: 2.875em;
    margin-top: 1em;
    padding: 0.5em 0.75em 0.5em 0.85em;
    background: rgba(0,0,0,0.95);
    border-radius: 2em;
    color: white;
    z-index: 5;
}
.coPilotCluster__images {
    display: flex;
    align-items: center;
    margin-right: 0.5em;
}
.coPilotCluster__image {
    display: inline-flex;
    height: 1.875em;
    width: 1.875em;
    border-radius: 50%;
    border: 2px solid rgba(0,0,0,0.95);
}
@media only screen and (min-width: 992px) {
  .gridHero {
      min-height: calc(100vw / 3);
  }
}
@media only screen and (min-width: 768px) {
  .gridHero__title {
    font-size: 7vw;
  }
  .gridHero {
      min-height: 25em;
      margin-top: 3.0625em;
      padding-top: 8em;
      padding-bottom: 5.5em;
  }
}
main {
    position: relative;
    background-color: #fefefe;
    background-color: var(--content-background, #fefefe);
    z-index: 1;
}
@media (min-width: 48em) {
  .navigationBar .navigationBar__right {
      font-size: 16px;
  }
}
.navigationBar .navigationBar__right {
    font-size: .875em;
    white-space: nowrap;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 1em;
    align-self: center;
    height: 3.125em;
}
.btn-group, .btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.navigationBar .navigationBar__right>div {
    display: inline-block;
}
.button.-icon__square:not(.-clear).-large {
    padding: 0.5em;
}
.button.-icon__square {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: unset;
}
@media only screen and (min-width: 640px) {
  .flipgridLogo.-centered img {
      width: 12em;
      height: 6.75em;
  }
  .flipgridLogo.-centered {
      margin-top: 0.8em;
  }
}
.flipgridLogo {
    z-index: 3;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.175);
    will-change: transform;
}
@media only screen and (min-width: 768px) {
  .navigationBar {
      height: 4.0625em;
      padding: 0 1.5625em;
  }    
}
.navigationBar {
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    background-color: var(--nav-background, #fff);
    position: fixed;
    height: 3.625em;
    z-index: 10;
    padding: 0 .75em;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ebebeb;
    border-bottom: 1px solid var(--nav-border, #ebebeb);
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
}
.navigationBar__left {
    position: absolute;
    left: .75em;
    display: flex;
    align-items: center;
    height: 100%;
}
.codeModal .codeModal__text {
  display: inline-block;
    max-width: 4.25em;
    margin-left: 2px;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis !important;
    text-decoration: underline;
    color: #016fc8;
    color: var(--nav-icons, #016fc8);
    font-family: "geomanist-bold",Helvetica,sans-serif;
    transition: color 0.1s linear;
}
.navigationBar .navigationBar__left .codeModal {
    margin-left: 0;
    transform: none;
    padding: 0.5rem !important;
    min-width: 0;
}
.button:not(.-clear) {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: auto;
    min-width: 5.25rem;
    padding: 0.625rem 1rem;
    line-height: 1rem;
    white-space: nowrap;
    text-align: center;
    user-select: none;
    border: 2px solid transparent;
    border-radius: 8px;
    font-size: .9375rem;
    font-family: "geomanist-bold",Helvetica,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.button.-transparent {
    background-color: transparent;
    color: #222;
}
  .navigationBar__msftLogo{
    height: 24px;
  }
  .navigationBar__leftSpacer {
    border-right: 1px solid #c9c5c5;
    margin-left: calc(0.5rem + 2px);
    height: 30px;
    width: 0;
  }
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
