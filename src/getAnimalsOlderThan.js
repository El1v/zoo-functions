const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species
    .find((element) => element.name === animal)
    .residents.every((animals) => animals.age >= age);
}

// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
