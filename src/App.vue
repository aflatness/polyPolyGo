<template>
  <div id="app">
    <div id='header' >
      <img src="./assets/polygon-dude.svg">
      <h1 id='polyLogo' @click='changeView(`home`)'>{{ title }} <div class='blu-dot' ></div></h1>
      <div v-if='home' id='navbar_container'>
        <div id='navbar'>
          <div class='nav_link'></div>
          <router-link to='#intro'><div class='nav_link' @click='scrollToIntro()'>Who we are</div></router-link>
          <router-link to='#privacy'><div class='nav_link' @click='scrollToPrivacy()'>Privacy</div></router-link>
          <router-link to='#FAQ'><div class='nav_link' @click='scrollToFAQ()'>FAQ's</div></router-link>
        </div>
      </div>
      <div v-if='home' id='srchBox'>
        <v-col cols="12" sm="7">
          <v-text-field
            placeholder='Search the web without being tracked'
            outlined
          ></v-text-field>
        </v-col>
      </div>
    </div>
    <div v-if='home'>
      <main>
        <Intro @change='changeView(`signUp`)'/>
        <br/>
        <br/>
        <PrivacyBlock @change='changeView(`signUp`)'/>
        <br/>
        <FAQ @change='changeView(`signUp`)'/>
      </main>
      <Footer />
    </div>
    <div v-else>
      <main>
        <SignUp @done='changeView(`done`)'/>
      </main>
    </div>
  </div>
</template>

<script>
import 'vue-router'
import Intro from './components/intro'
import GetStartedBtn from './components/getStartedBtn'
import PrivacyBlock from './components/privacyBlock'
import Footer from './components/footer'
import FAQ from './components/faq'
import SignUp from './components/signup'

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
    PrivacyBlock, Intro, FAQ, Footer, GetStartedBtn, SignUp
  },
  data () {
    return {
      title: 'PolyPolyGo',
      home: true
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
    },
    changeView: function (val) {
      console.log('changing view', val);
      if (val === 'signUp') {
        this.home = false
      }
      if (val === 'done' || val === 'home') {
        this.home = true;
      }
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
  cursor: pointer;
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

#navbar_container{
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

.nav_link:hover, #polyLogo:hover {
  color: #82b1ff;
}
</style>
