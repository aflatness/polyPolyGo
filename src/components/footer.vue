<template>
  <div id='footer'>
    <div id='footer_email'>
      <a href='mailto:aflatness@gmail.com'>
        <img class='email_Icon' src='src/assets/email.svg' />
        <div id='email_address'>aflatness@gmail.com</div>
      </a>
    </div>
    <div id='footer_copyright'>Copyright <span> &#169; 2021</span> Alec Flatness</div>
  </div>
</template>

<script>
  export default {
    name: 'footer_section'
  }
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  #footer {
    background-color: white;
    line-height: 24px;
    padding: 1.5em 7%;
    letter-spacing: .1em;
    text-align: center;
  }
  img {
    text-align: center;
  }

  #footer>* {
    margin-top: 1em;
  }

  @media (min-width: 800.1px) {
    #footer_email {
      position: absolute;
      right: 0;
      margin-right: 7%;
    }

    #footer {
      text-align: left;
    }

    #footer>* {
      margin-top: 0;
    }
    img {
      float: right;
      margin-left: .2em;
    }

    #email_address {
      display: inline-block;
    }
  }


</style>