const data = require('../data/zoo_data');

const { species, hours } = data;

function weekDays(day) {
  let exhibition = '';
  let officeHour = '';
  if (day === 'Monday') {
    exhibition = 'The zoo will be closed!';
    officeHour = 'CLOSED';
  } else {
    exhibition = species.filter((element) => element.availability
      .includes(day)).map((element) => element.name);
    officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  }
  const result = {
    officeHour,
    exhibition,
  };
  return result;
}

function getSchedule(scheduleTarget) {
  const scheduleDay = {};
  const days = Object.keys(hours);
  const animals = species.map((element) => element.name);
  if (days.includes(scheduleTarget)) {
    scheduleDay[scheduleTarget] = weekDays(scheduleTarget);
    return scheduleDay;
  }
  if (scheduleTarget === undefined || !animals.includes(scheduleTarget)) {
    days.reduce((acc, curr) => {
      scheduleDay[curr] = weekDays(curr);
      return scheduleDay;
    }, {});
    return scheduleDay;
  }
  return species.find((element) => element.name === scheduleTarget).availability;
}

// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('penguins'));
// console.log(getSchedule('batata'));
// console.log(getSchedule());

module.exports = getSchedule;
