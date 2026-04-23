const { sumar } = require('./app');

describe('Función sumar', () => {
  test('suma 2 + 3 debe ser 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('suma 0 + 0 debe ser 0', () => {
    expect(sumar(0, 0)).toBe(0);
  });

  test('suma números negativos: -1 + 1 debe ser 0', () => {
    expect(sumar(-1, 1)).toBe(0);
  });
});
