<template>
  <div id='signup'>
    <div class='guests'>
      <img src='src/assets/large-polygon-dude.svg'>
    </div>
    <div id='questionaire'>
      <div class='question_title'>{{ title }}</div>
      <div id='question_content'>
        <div v-if="section === 'intro'" class='intro_card'>Let's get you started with a free consultation.</div>
        <v-app>
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
                color="black"
                x-large
              >{{ option }}
              </v-btn>
            </v-btn-toggle>
          </div>
          <div v-if="section === 'contact'">
            <v-form>
              <div class='label'>Full Name</div>
              <v-text-field
                outlined
                placeholder='Full Name'
                :rules='[rules.required]'
                v-on:change="changeName"
                ></v-text-field>
              <div class='label'>State</div>
              <v-select
                outlined
                :items='items'
                :rules='[rules.required]'
                v-on:change="changeState"
              ></v-select>
              <div class='label'>Phone Number</div>
              <v-text-field
                outlined
                :rules='[rules.required, rules.counter]'
                placeholder='Phone number'
                v-on:change="changeNum"
              ></v-text-field>
              <div class='label'>E-mail</div>
              <v-text-field
                outlined
                :rules='[rules.required, rules.email]'
                placeholder='Email Address'
                v-on:change="changeEmail"
              ></v-text-field>
            </v-form>
          </div>
        </v-app>
        <div v-if="section === 'done'" class='intro_card'>A referral specialist will contact you shortly.</div>
      </div>
      <div @click='changePage()'><GetStartedBtn :text='btn_text' :disabled='disabled' /></div>
      <div v-if="section !== 'done'" class='counter'>{{ count }}<div class='counter_total'>/3</div></div>
    </div>
    <div class='guests'>
      <img src='src/assets/polygon-dudette.svg'>
    </div>
  </div>
</template>

<script>
  import GetStartedBtn from './getStartedBtn'

  let titles = ['Hello!', 'Who\'s this assessment for?', 'How can we contact you?', 'You\'re all set!']
  let title = titles[0];
  let count = 1;
  let sections = ['intro', 'who', 'contact', 'done']
  let section = sections[0];
  let disabled = false;

  let items = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

  let options = ['Myself', 'My child', 'Someone else'];

  let rules = {
    required: val => !!val || 'Required',
    counter: val => val ? val.length >= 10 || 'Proper phone number' : true,
    email: val => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(val) || 'Proper email address'
    }
  }
  let name, email, state, number = '';
  let btn_text = 'Continue'

  export default {
    name: 'signup',
    components: {
      GetStartedBtn
    },
    data: () => ({
      title, count, section, titles,
      sections, disabled, options, items, rules,
      name, email, state, number, btn_text
    }),
    methods: {
      changePage: function () {
        if (!this.disabled && this.count < 3) {
          this.disabled = this.count <= 2 ? true : false
          this.count++;
          this.section = this.sections[this.count - 1];
          this.title = this.titles[this.count - 1];
        }
        if (!this.disabled && this.count === 3) {
          this.btn_text = 'Done'
          this.title = this.titles[3];
          this.section = this.sections[3];
        }
      },
      enableBtn: function () {
        this.disabled = false;
      },
      checkStatus: function () {
        if (this.name && this.state && this.email && this.number) {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      },
      changeName: function (val) {
        this.name = val
        this.checkStatus();
        },
      changeState: function (val) {
        this.state = val
        this.checkStatus();
        },
      changeNum: function (val) {
        this.number = val
        this.checkStatus();
        },
      changeEmail: function (val) {
        this.email = val
        this.checkStatus();
        },
    }
  }
</script>

<style>
  .v-application--wrap {
    min-height: 0 !important;
  }
  #signup {
    display: flex;
    width: 100%;
    /* margin: 1em 7%; */
    align-items: bottom;
  }
  #signup>* {
    height: 100%;
    padding: 1em 3em;
  }
  .guests {
    height: 100vh;
    width: 30%;
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
    margin: 1em 0 .5em 0;
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
    margin-top: 1.5em;
    border: 1px solid black;
  }

  .label {
    font-size: .8em;
    color: grey;
    text-align: left;
    margin-bottom: .5em;
  }

  .btn-getStarted, .btn-disabled {
    font-size: 1.5em !important;
    width: 100%;
  }
</style>