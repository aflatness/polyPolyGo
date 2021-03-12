<template>
  <div id='intro'>
    <div id='introFlex'>
      <div>
        <div class='sectionTitle'>Tired of being tracked online? We can help.</div>
        <div class='sectionInfo'>
          <div>We don't store your personal info. We don't follow you around with ads.</div>
          <br/>
          <div>We don't track you. Ever.</div>
          <button class='btn-getStarted'>Get Started</button>
        </div>
      </div>
      <img src='../assets/people.svg' width='inherit' >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'intro'
  }
</script>

<style>
  #intro {
    margin-top: 2em;
  }

  @media (min-width: 1000px) {
    #introFlex {
      display: flex;
    }

    #introFlex>* {
      flex: 1 1 0px;
      width: 50%;
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

  .btn-getStarted {
    margin-top: 1em;
    padding: .5em 1em;
    font-size: 1em;
    font-family: 'Helvetica Neue';
    font-weight: bold;
    color: white;
    background-color: rgba(0, 0, 0, 0.87);
    border: 2px solid rgba(0, 0, 0, 0.87);
    border-radius: .2em;
    cursor: pointer;
    outline: none;
  }

  .btn-getStarted:hover {
    color: black;
    background-color: white;
  }
</style>