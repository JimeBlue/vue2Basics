new Vue({
  // EXPLANATION: data binding essentialy refers to binding any data we have in our instance to any htlm attribute. To do that we use the directive v-bind: in front of the desired attribute. The shorthand is simple colon (:href)
  el: '#vue-app',
  data: {
    name: 'Jime',
    job: 'ninja',
    // EXAMPLE: we are going to use the variable website as the href attribute of an anchor in html and the variable name as the value of an input. See html file...
    website: 'https://github.com/JimeBlue',

    // EXPLANATION: we also have the v-html directive, which we use to output an html element we created in our data object.
    //  EXAMPLE: Below we create a property (websiteTag)whose value is an anchor tag including the href attribute. See html file to see how to output it
    websiteTag:
      '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
  },

  methods: {
    greet(time) {
      return `god ${time} ${this.name}`;
    },
  },
});
