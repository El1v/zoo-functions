const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  let retorno = { };
  if (typeof animal === 'undefined') {
    retorno = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return retorno;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  return species.find((element) => element.name === animal.specie)
    .residents.filter((element) => element.sex === animal.sex).length;
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
