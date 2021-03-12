<template>
  <div>
    <div class='sectionTitle' >Privacy Protection For Any Device</div>
    <div class='privacyFlex' >
      <div class='block'>
        <img src='../assets/extension.svg'>
        <div class='title'>Privacy for Chrome</div>
        <div class='text'>Browse as usual, and we'll take care of the rest. Get bundled private search, tracker blocking, and site encryption, all in one download, for major browsers.</div>
      </div>
      <div class='block'>
        <img src='../assets/search.svg'>
        <div class='title'>Privacy Search Engine</div>
        <div class='text'>Search privately with our app or extension, add private web search to your favorite browser, or search directly at polypolygo.com</div>
      </div>
      <div class='block'>
        <img src='../assets/app.svg'>
        <div class='title'>Privacy Browser App</div>
        <div class='text'>Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforce, and more. Available on iOS & Android.</div>
      </div>
      <img src='../assets/littleDude.svg'>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'privacyBlock'
  }
</script>

<style scoped>
  .privacyFlex {
    display: flex;
    margin-top: 1em;
  }

  @media (max-width: 1000px) {
    .privacyFlex {
      display: block;
    }
  }

  .block {
    margin-right: 1em;
    margin-bottom: 1em;
    padding: 1em;
    flex: 1 1 0px;
    background-color: white;
    text-align: center;
  }

  .title {
    font-size: 1.5em;
    font-weight: bold;
  }

  .text {
    font-size: 1em;
    font-weight: 500;
    margin-top: 1em;
  }
</style>