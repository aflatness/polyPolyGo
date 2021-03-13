<template>
  <div id='intro'>
    <div id='introFlex'>
      <div>
        <div class='sectionTitle'>Tired of being tracked online? We can help.</div>
        <div class='sectionInfo'>
          <div>We don't store your personal info. We don't follow you around with ads.</div>
          <br/>
          <div>We don't track you. Ever.</div>
          <GetStartedBtn text='Get started'/>
        </div>
      </div>
      <v-img src='src/assets/people.svg' aspect-ratio='1.2' contain></v-img>
    </div>
  </div>
</template>

<script>
  import GetStartedBtn from './getStartedBtn'
  export default {
    name: 'intro',
    components: {
      GetStartedBtn
    }
  }
</script>

<style>
  #intro {
    margin-top: 2em;
  }

  @media (min-width: 800px) {
    #introFlex {
      display: flex;
    }

    #introFlex>* {
      flex: 1 1 0px;
      width: 50%;
      padding-right: 1em;
    }
  }

  .sectionTitle {
    font-size: 3em;
    font-weight: bold;
  }

  .sectionInfo {
    margin-top: 1em;
    font-size: 1.5em;
  }
</style>