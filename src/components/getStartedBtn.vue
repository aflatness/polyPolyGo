<template>
  <div>
    <div v-if='disabled'><button class='btn-disabled'>{{ text }}</button></div>
  <div v-else>
    <router-link to='/signup'><button class='btn-getStarted' @click='renderSignUp()'>{{ text }}</button></router-link>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'getStarted',
    props: ['text', 'disabled'],
    methods: {
      renderSignUp: () => {
        console.log('signing up')
      }
    }
  }
</script>

<style>
  .btn-getStarted, .btn-disabled {
    margin-top: 1em;
    margin-bottom: 1em;
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

  @media (max-width: 800px) {
    .btn-getStarted {
      width: 100%;
    }
  }

  .btn-getStarted:hover {
    color: black;
    background-color: white;
  }

  .btn-disabled {
    background-color: #9798a6;
    color: #5b5c69;
    cursor: default;
  }

</style>
