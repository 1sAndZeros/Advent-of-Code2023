const input = require('./input');

function dayOnePartOne(input = '') {
  const lines = input.split('\n');
  let total = 0;
  lines.forEach((line) => {
    const [gameId, game] = line.substring(5).split(': ');
    const rounds = game.split('; ');
    let valid = true;
    rounds.forEach((round) => {
      round.split(', ').forEach((s) => {
        const [count, color] = s.split(' ');
        if (color === 'red' && parseInt(count) > 12) valid = false;
        if (color === 'green' && parseInt(count) > 13) valid = false;
        if (color === 'blue' && parseInt(count) > 14) valid = false;
      });
    });
    if (valid) total += parseInt(gameId);
  });
  return total;
}

function dayOnePartTwo(input = '') {
  const lines = input.split('\n');
  let total = 0;
  lines.forEach((line) => {
    const rounds = line.substring(8).split('; ');
    let redCount = 0,
      greenCount = 0,
      blueCount = 0;
    rounds.forEach((round) => {
      round.split(', ').forEach((s) => {
        const [count, color] = s.split(' ');
        if (color === 'red' && parseInt(count) > redCount)
          redCount = parseInt(count);
        if (color === 'green' && parseInt(count) > greenCount)
          greenCount = parseInt(count);
        if (color === 'blue' && parseInt(count) > blueCount)
          blueCount = parseInt(count);
      });
    });
    total += redCount * greenCount * blueCount;
  });
  return total;
}

const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

console.log(dayOnePartTwo(input));

module.exports = { dayOnePartOne, dayOnePartTwo };
