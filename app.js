new Vue({
  el: '#vue-app',
  data: {
    name: 'Jime',
    job: 'ninja',
  },

  methods: {
    greet(time) {
      return `god ${time} ${this.name}`;
    },
  },
});
