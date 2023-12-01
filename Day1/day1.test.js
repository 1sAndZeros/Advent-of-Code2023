const {dayOnePartOne, dayOnePartTwo} = require('./day1');

const testInput = `five2two7hstbbqzrninegbtwo2
eightfblzpmhs4
fbbdeightzzsdffh8jbjzxkclj
seveneight7dsvqnjsjsqlkeightwovzt
3nine6five1`;

describe('part 1', () => {
  test('input should return 262', () => {
    expect(dayOnePartOne(testInput)).toBe(262);
  });
});

describe('part 2', () => {
  test('input should return 327', () => {
    expect(dayOnePartTwo(testInput)).toBe(327);
  });
});
