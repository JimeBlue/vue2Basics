new Vue({
  el: "#vue-app",
  data: {
    /* N°2) Crate the variable available and set it to false */
    available: false,
    /* N°2) Crate the variable nearby and set it to false */
    nearby: false,
  },

  methods: {},
  computed: {
    // N°7) This object set the value of the variables available and nearby to the values assigned to that variables
    // in the data object. It is important to understand that that value changes on click
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});
