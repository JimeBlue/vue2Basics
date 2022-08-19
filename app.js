new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    // These variables are used in the updateXY method below
    x: 0,
    y: 0,
  },
  // EXPLANATION: the methods add and subtract are called from the html file with the on click event.
  // They accept parameters that are passed when the methods are called
  methods: {
    add(inc) {
      this.age += inc;
    },
    subtract(dec) {
      this.age -= dec;
    },
    // EXPLANATION: this method is fired by the on mouse move event in html. Here we have access to
    // the event object that comes by default with the mouse event listener
    updateXY(event) {
      // offsetX and offsetY are properties of the event object
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
