const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const personResponsible = employees.find((element) => element.id === id).responsibleFor[0];
  const specieResidents = species.find((element) => element.id === personResponsible).residents;
  const oldestSpecieResident = specieResidents.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  });
  return [oldestSpecieResident.name, oldestSpecieResident.sex, oldestSpecieResident.age];
}

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
