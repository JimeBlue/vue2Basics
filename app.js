new Vue({
  el: '#vue-app',
  data: {
    name: 'Jime',
    job: 'ninja',
  },
  //   EXPLANATION: inside the instance object, we can also have the property "methods", which is an object where we can store all the methods (functions) we´re going to use in this instance
  // EXAMPLE:the method greet below outputs a greeting to the dom when the function is called in <div id="vue-app>". When the function is called we passed a parameter, which we received and use inside the greet function. That parameter is time. We also use in the greet function a variable that is stored in the data object (this.name). To access data stored in an instance we use the word "this" to refer to this particular instance
  methods: {
    greet(time) {
      return `god ${time} ${this.name}`;
    },
  },
});
