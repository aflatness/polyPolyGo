<template>
  <div id="app">
    <div id='header' >
      <img src="./assets/polygon-dude.svg">
      <router-link to='#privacy' ><h1 id='polyLogo'>{{ title }} <div class='blu-dot' ></div></h1></router-link>
      <div id='navbar_container'>
        <div id='navbar'>
          <div class='nav_link'></div>
          <router-link to='#intro'><div class='nav_link' @click='scrollToIntro()'>Who we are</div></router-link>
          <router-link to='#privacy'><div class='nav_link' @click='scrollToPrivacy()'>Privacy</div></router-link>
          <router-link to='#FAQ'><div class='nav_link' @click='scrollToFAQ()'>FAQ's</div></router-link>
        </div>
      </div>
      <div id='srchBox'>
        <v-col cols="12" sm="7">
          <v-text-field
            placeholder='Search the web without being tracked'
            outlined
          ></v-text-field>
        </v-col>
      </div>
    </div>
    <main>
      <Intro />
      <br/>
      <br/>
      <PrivacyBlock />
      <br/>
      <FAQ />
    </main>
    <Footer />
  </div>
</template>

<script>
import 'vue-router'
import Intro from './components/intro'
import PrivacyBlock from './components/privacyBlock'
import Footer from './components/footer'
import FAQ from './components/faq'

const findPos = (el) => {
  var curtop = 0;
  if (el.offsetParent) {
    do {
      curtop += el.offsetTop;
    } while (el = el.offsetParent);
  }
  return curtop - 203.97;
}
export default {
  name: 'app',
  components: {
    PrivacyBlock, Intro, FAQ, Footer
  },
  data () {
    return {
      title: 'PolyPolyGo'
    }
  },
  methods: {
    scrollToIntro: () => {
      window.scroll(0, findPos(document.getElementById('intro')));
    },
    scrollToPrivacy: () => {
      window.scroll(0, findPos(document.getElementById('privacy')));
    },
    scrollToFAQ: () => {
      window.scroll(0, findPos(document.getElementById('faq')));
    }
  }
}
</script>

<style>
html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: rgb(249, 249, 249);
  margin: 0;
}

#header {
  padding: 1em 1em 0 1em;
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 0 5% 1em 5%;
  padding-top: 13em;
  z-index: 2
}

@keyframes logoFadeIn {
  from {
    opacity: 0
  }
}

#polyLogo {
  display: inline-block;
  margin-left: .5em;
  opacity: 1;
  animation: logoFadeIn 1s ease-in;
}

.blu-dot {
  position: relative;
  display: inline-block;
  margin-left: -.1em;
  height: .3em;
  width: .3em;
  background-color: #2196f3;
  border: 0 transparent white;
  border-radius: .05em;
}

#navbar_container {
  display: inline-block;
}

#navbar {
  display: flex;
}

#navbar a {
  text-decoration: none;
}

.nav_link {
  margin: 0 1em;
  color: black;
  font-size: 1.5em;
  font-weight: bold;
}

.nav_link:hover {
  color: #82b1ff
}
</style>
