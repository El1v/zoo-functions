const data = require('../data/zoo_data');

const { species, employees } = data;

function getSpecies(idAnimal) {
  const animal = species.find((element) => element.id === idAnimal);
  return {
    species: animal.name,
    locations: animal.location,
  };
}

const getEmplooyeeById = (id) => employees.find((element) => element.id === id);
const getEmplooyeeByName = (name) => employees.find((element) =>
  element.firstName === name || element.lastName === name);

const getEmployee = (employee) => {
  const speciesList = employee.responsibleFor.map((getSpecies));
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesList.map((element) => element.species),
    locations: speciesList.map((element) => element.locations),
  };
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return employees.map(getEmployee);
  }
  if (getEmplooyeeById(obj.id) === undefined && getEmplooyeeByName(obj.name) === undefined) {
    throw new Error('Informações inválidas');
  }
  const employee = obj.name ? getEmplooyeeByName(obj.name) : getEmplooyeeById(obj.id);
  return getEmployee(employee);
}

module.exports = getEmployeesCoverage;
