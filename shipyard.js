/*jshint esversion: 6*/
let Spaceship = require("./Spaceship");
let CrewMember = require("./CrewMember");
let rocket = require("./Rocket");

let ourShip = new Spaceship("Space Cadets");
let crewNames = ["Will", "Suzi", "Ruhita", "Lily", "Aimee", "Nick", "Nadia", "Matt", "Jonathan", "Eamonn"];
let trainedCrew = [];




let countdown = (number, ship) => {
  if (number !== 0 ){
    setTimeout (() => {
      console.log(`${number}...`);
      number--;
      countdown(number, ship);
    }, 1000);

  } else {
    console.log("Blast off!");
    ship.takeoff();
  }
};


let launchpad = (ship, trainedCrew, rocket) => {
  console.log("Team Rocket is blasting off again!");
  console.log(`We are riding in a ship named ${ship.name}!`);
  ship.loadCrew(trainedCrew);
  console.log(`This flight's captain will be ${ship.captain().name}!`);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(999);
  countdown(10, ship);
};

let trainCrew = (crewNames) => {

  crewNames.forEach ((name) => {
    let crewMember = new CrewMember(name);
    crewMember.trained = true;
    trainedCrew.push(crewMember);
  });

};

trainCrew(crewNames);
// console.log(trainedCrew);

launchpad(ourShip, trainedCrew, rocket);
