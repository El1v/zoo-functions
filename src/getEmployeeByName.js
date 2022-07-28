const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.reduce((acc, curr) =>
    (curr.firstName === employeeName || curr.lastName === employeeName ? curr : acc), {});
}

console.log(getEmployeeByName('Elser'));
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
