new Vue({
  el: "#vue-app",
  data: {
    /*  EXPLANATION: the values of the variables have to be blank ´cause it´s Vue which fills in and
    updates the values */
    name: "",
    age: "",
  },

  methods: {
    logName() {
      console.log("you enter your name");
    },
    logAge() {
      console.log("you enter your age");
    },
  },
});
