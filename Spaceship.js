/*jshint esversion: 6*/
module.exports  = class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }

  mountPropulsion(rocket) {
    this.propulsion = rocket;
    console.log('Rockets have been mounted!');
  }

  loadCrew(trainedCrew) {
    trainedCrew.forEach((member) => {
      this.crew.push(member);
      console.log(`${member.name} has boarded the ship.`);
    });
  }

  captain() {
    let number = this.crew.length;
    let randomNumber = Math.floor(Math.random() * number);
    return this.crew[randomNumber];
  }

  takeoff() {
    if (this.propulsion.fire()) {
      console.log("WWWHRRRRRRRRRRRSSSSSSHHHHHHH~~~~!");
    } else {
      console.log("Whomp whomp.");
    }
  }
};
