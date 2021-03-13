<template>
  <button class='btn-getStarted'>Get Started</button>
</template>

<script>
  export default {
    name: 'getStarted'
  }
</script>

<style>
  .btn-getStarted {
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
</style>
