new Vue({
  el: '#vue-app',
  data: {
    name: 'Jime',
    job: 'ninja',
    website: 'https://github.com/JimeBlue',
    websiteTag:
      '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
  },

  methods: {
    greet(time) {
      return `god ${time} ${this.name}`;
    },
  },
});
