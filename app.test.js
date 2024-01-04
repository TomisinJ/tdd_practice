const additionCalculation = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(additionCalculation(1, 2)).toBe(3);
});