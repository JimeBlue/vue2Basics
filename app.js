new Vue({
  el: "#vue-app",
  data: {
    a: 0,
    b: 0,
    age: 20,
  },
  /* COMPUTED PROPOERTIES: is a way to define a data property inside our components 
  which depends on other data that we have inside that component. 
  EXAMPLE: we may want to create an array called filtered books. 
  The  filtered books would depend on the books array that we already have. 
  SEE EXAMPLE IN REPO MY FIRST VIEW BRANCH COMPUTED PROPERTIES
  So if our books array changes so will change our filtered books array */
  /* EXPLANATION: it is more efficient to use computed properties than mothods, because if we had 
methods, both will run and be updated even though I only call on. With computed properties only the 
method I call runs */

  computed: {
    addToA() {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB() {
      console.log("addToB");
      return this.b + this.age;
    },
  },
});
