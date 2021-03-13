<template>
  <div id='signup'>
    <div class='guests'>
      <img src='src/assets/large-polygon-dude.svg'>
    </div>
    <div id='questionaire'>
      <div class='question_title'>{{ title }}</div>
      <div id='question_content'>
        <div v-if="section === 'intro'" class='intro_card'>Let's get you started with a free consultation.</div>
        <div v-if="section === 'who'">
          <v-btn-toggle
          >
            <v-btn
              v-for='(option, i) in options'
              :key='i'
              @click='enableBtn()'
              class='who_btn'
              height='5em'
              width='11em'
              outlined
              color="blue"
              x-large
            >{{ option }}
            </v-btn>
          </v-btn-toggle>
        </div>
        <div v-if="section === 'contact'">

        </div>
      </div>
      <div @click='changePage()'><GetStartedBtn text='Continue' :disabled='disabled' /></div>
      <div class='counter'>{{ count }}<div class='counter_total'>/3</div></div>
    </div>
    <div class='guests'>
      <img src='src/assets/polygon-dudette.svg'>
    </div>
  </div>
</template>

<script>
  import GetStartedBtn from './getStartedBtn'

  let titles = ['Hello!', 'Who\'s this assessment for?', 'How can we contact you?']
  let title = titles[0];
  let count = 1;
  let sections = ['intro', 'who', 'contact']
  let section = sections[0];
  let disabled = false;

  let options = ['Myself', 'My child', 'Someone else']

  export default {
    name: 'signup',
    components: {
      GetStartedBtn
    },
    data: () => ({
      title, count, section, titles, sections, disabled, options
    }),
    methods: {
      changePage: function () {
        if (!this.disabled) {
          this.disabled = this.count === 1 ? true : false
          this.count++;
          this.section = this.sections[this.count - 1];
          this.title = this.titles[this.count - 1];
        }
      },
      enableBtn: function () {
        this.disabled = false;
      }
    }
  }
</script>

<style>
  #signup {
    display: flex;
    width: 100%;
    /* margin: 1em 7%; */
  }
  #signup>* {
    height: 100%;
    width: 33%;
    padding: 1em 3em;
  }
  .guests {
    height: 100vh;
    text-align: center;
  }
  #questionaire {
    text-align: center;
  }

  .question_title {
    font-size: 3em;
    font-weight: bold;
  }

  #question_content {
    margin: 2em 0;
    font-size: 1.5em;
    padding: 1em 1em;
    position: relative;
  }

  .intro_card:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    transform: rotate( -3deg);
    pointer-events: none;
  }

  .counter {
    font-size: 2em;
    font-weight: bold;
  }

  .counter_total {
    color: grey;
    display: inline-block;
  }

  .v-btn-toggle {
    display: block;
  }

  .who_btn {
    margin: 1em 0;
    border: 1px solid black;
  }
</style>