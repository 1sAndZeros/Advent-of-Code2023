const numbersMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const numbersMapReverse = {
  eno: 1,
  owt: 2,
  eerht: 3,
  ruof: 4,
  evif: 5,
  xis: 6,
  neves: 7,
  thgie: 8,
  enin: 9,
};

function dayOnePartOne(input='') {
  const lines = input.split('\n');
  return lines.reduce((acc, curr) => {
    const numbers = curr.match(/(\d)/g);
    if (numbers) {
      const first = numbers[0];
      const last = numbers[numbers.length - 1];
      return acc + parseInt(`${first}${last}`);
    }
  }, 0);
}

function dayOnePartTwo(input) {
  const lines = input.split('\n');
  return lines.reduce((acc, curr) => {
    const numbers = curr.match(
      /(one|two|three|four|five|six|seven|eight|nine|\d)/g,
    );
    const revNumbers = curr
      .split('')
      .reverse()
      .join('')
      .match(/(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/g);
    if (numbers) {
      const first = numbers[0];
      const last = revNumbers[0];
      const firstInt = numbersMap[first] || parseInt(first);
      const lastInt = numbersMapReverse[last] || parseInt(last);
      return acc + parseInt(`${firstInt}${lastInt}`);
    }
  }, 0);
}

module.exports = { dayOnePartOne, dayOnePartTwo };
