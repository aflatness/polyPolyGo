<template>
  <div id='faq'>
    <div class='sectionTitle'>Frequently Asked Questions</div>
    <v-slide-group
      v-model='model'
      show-arrows
      >
      <v-slide-item
        v-for='(question, i) in questions'
        :key='i'
      >
        <v-card
          width='300'
          class='faqCard'
        >
          <v-card-title class='card-title'><h3>{{ question.title }}</h3></v-card-title>
          <v-card-text><div>{{ question.text }}</div></v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <div class='btnDiv' @click='change'><GetStartedBtn text='Get started'/></div>
  </div>
</template>

<script>
  const questions = [
    {
      title: 'How does PolyPolyGo make money?',
      text: 'We make our money from private ads on our search engine. On other search engines, ads are based on profiles compiled about you using your personal information like search, browsing, and purchase history. Since we don’t collect that information, search ads on PolyPolyGo are based on the search results page you are viewing, not on you as a person. For example, if you search for cars, we’ll show you ads about cars. Learn more.'
    },
    {
      title: 'What does Google know about me?',
      text: 'Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with PolyPolyGo!). And that’s just the tip of the iceberg. Learn more.'
    },
    {
      title: 'Why use PolyPolyGo instead of Google?',
      text: 'Ever notice ads constantly following you around? That’s in part because Google tracks your searches and hides trackers on millions of websites. By contrast, our private search engine doesn’t track your searches and our PolyPolyGo browser extension and mobile app block Google’s (and many other companies’) trackers across the Internet, helping to keep your browsing history more private, as it should be. And that’s just the beginning — by using PolyPolyGo you also escape the manipulation of the filter bubble and can use the Internet faster (after all that tracking code is disabled). Learn more.'
    },
    {
      title: 'How do PolyPolyGo search results compare to Google\'s?',
      text: 'PolyPolyGo search gives you truly private search results without tradeoffs in result quality. We have everything you’ve come to expect in an online search experience, and a few bonus features that make searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no search history on PolyPolyGo, you escape the filter bubble of manipulated results. Learn more.'
    },
    {
      title: 'What\'s the difference between using PolyPolyGo and Incognito mode?',
      text: 'It is a myth that you can’t be tracked while using so-called “Incognito” mode. In fact, Incognito mode mainly just deletes information on your computer and does nothing to stop Google from saving your searches, nor does it stop companies, Internet service providers, or governments from being able to track you across the Internet. By contrast, PolyPolyGo search is completely anonymous and if you add our app & extension on top, we help keep you private when browsing off of search results. Learn more.'
    },
    {
      title: 'How popular is PolyPolyGo?',
      text: 'We don’t track our users, so it’s actually impossible for us to know how many users in total are using our products. However, we are able to make an estimate based on the number of searches we get per month, which we make public. Our best guess — over 50 million people! Learn more.'
    },
    {
      title: 'How does the PolyPolyGo app & extension work?',
      text: 'The PolyPolyGo Privacy Browser mobile app and Privacy Essentials desktop extension both come with our best-in-class tracker blocker, encryption enforcer, and private search engine – all in one simple package. This gives you all the key privacy protection tools to search and browse privately, curbing the constant monitoring of your Internet activity by companies like Google and Facebook. Learn more.'
    }
  ]
  import GetStartedBtn from './getStartedBtn'
  export default {
    name: 'FAQ',
    components: {
      GetStartedBtn
    },
    data: () => ({
      questions
    }),
    methods: {
      change: function () {this.$emit(`change`)}
    }
  }
</script>

<style scoped>
  .faqCard {
    margin: 1em 1em;
  }

  .card-title {
    word-break: break-word;
  }

  .btnDiv {
    text-align: center;
    font-size: 2em;
  }
</style>