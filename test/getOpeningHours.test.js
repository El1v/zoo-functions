const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Ao nao receber nenhum argumento deve retornar o objeto com todos dias da semana e horarios', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('Ao receber Monday e 09:00-AM como parametro deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Ao receber Tuesday e 09:00-AM como parametro deve retornar a string The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Ao receber Wednesday e 09:00-PM como parametro deve retornar a string The zoo is open', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Ao receber Wednesday e 09:00-GM como parametro deve lancar um erro', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-GM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Ao receber Friday e 13:00-PM como parametro deve lancar um erro', () => {
    expect(() => getOpeningHours('Friday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Ao receber Friday e 12:61-PM como parametro deve lancar um erro', () => {
    expect(() => getOpeningHours('Friday', '12:61-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Ao receber Wed e 12:00-AM como parametro deve lancar um erro', () => {
    expect(() => getOpeningHours('Wec', '12:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Ao receber Tuesday e 1X:00-AM como parametro deve lancar um erro', () => {
    expect(() => getOpeningHours('Tuesday', '1X:00-AM')).toThrow('The hour should represent a number');
  });
});
