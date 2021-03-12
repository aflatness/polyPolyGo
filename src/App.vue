<template>
  <div id="app">
    <div id='header' >
      <img src="./assets/polygon-dude.svg">
      <h1 id='polyLogo' >{{ title }} <div class='blu-dot' ></div></h1>
      <div id='srchBox'>
        <input v-model='searchBox' placeholder="  Search the web without being tracked">
      </div>
    </div>
    <main>
      <Intro />
      <br/>
      <br/>
      <PrivacyBlock />
    </main>
  </div>
</template>

<script>
import Intro from './components/intro'
import PrivacyBlock from './components/privacyBlock'

export default {
  name: 'app',
  components: {
    PrivacyBlock, Intro
  },
  data () {
    return {
      title: 'PolyPolyGo'
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
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 1em 5%;
}

#polyLogo {
  display: inline-block;
  margin-left: .5em;
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

#srchBox {
  float: right;
  margin-top: 2.8em;
}

#srchBox input {
  width: 25em;
  height: 1.8em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: .2em;
}


</style>
