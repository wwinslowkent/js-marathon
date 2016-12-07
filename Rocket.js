/*jshint esversion: 6*/
let rocket = {
  fuel: 0,
  addFuel(amount){
    this.fuel += amount;
    console.log(`There is this much fuel in our tank: ${this.fuel}`);
  },

  fire() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("The engines have been fired!");
      console.log(`After firing, there is this much fuel in our tank: ${this.fuel}`);
      return true;
    } else {
      console.log('The engines failed to fire. Oh nooooo!');
      return false;
    }
  }

};

module.exports = rocket;
