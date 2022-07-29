const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const childCount = entrants.filter((element) => element.age < 18).length;
  const adultCount = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const seniorCount = entrants.filter((element) => element.age >= 50).length;
  return {
    child: childCount,
    adult: adultCount,
    senior: seniorCount,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const count = countEntrants(entrants);
  return (count.adult * prices.adult) + (count.senior * prices.senior)
   + (count.child * prices.child);
}

// console.log(calculateEntry());
// console.log(calculateEntry({}));
// console.log(calculateEntry([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

// console.log(countEntrants([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

module.exports = { calculateEntry, countEntrants };
