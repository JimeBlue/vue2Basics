new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0,
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
