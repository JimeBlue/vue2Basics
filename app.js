new Vue({
  el: "#vue-app",
  data: {
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
