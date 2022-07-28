const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let retorno = false;
  return employees.reduce((acc, curr) => {
    if (curr.managers.some((element) => element === id)) {
      retorno = true;
      return retorno;
    }
    return acc;
  }, false);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.reduce((acc, curr) => {
      if (curr.managers.some((element) => element === managerId)) {
        acc.push(`${curr.firstName} ${curr.lastName}`);
        return acc;
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
