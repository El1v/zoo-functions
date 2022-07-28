const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao receber o argumento count deve retornar o numero inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });

  it('Ao receber o argumento averageAge deve retornar um numero proximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('Ao nao receber nenhum argumento deve retornar undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBeUndefined(expected);
  });

  it('Ao receber um parametro que nao seja uma string deve retornar => Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants(10);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento popularity deve retornar 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it('Ao receber uma string vazia deve retornar null', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
