new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    // To keep track of whether or not the game ended
    ended: false,
  },

  methods: {
    // Every time we punch the bag its health reduces 10%
    punch() {
      this.health -= 10;
      // Check the value of health and if it´s 0 set ended to true
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    // When btn restart is clicked reset health to 100
    restart() {
      this.health = 100;
      // When health is 100 reset ended to be false so that we can play again
      this.ended = false;
    },
  },
  computed: {},
});
