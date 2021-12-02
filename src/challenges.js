// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  const splitedSentence = sentence.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(nameArray) {
  const name = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  const points = (3 * wins) + ties;
  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let highestNumberRepeat = 0;
  for (let number of numberArray) {
    if (number > highestNumber) {
      highestNumberRepeat = 0;
      highestNumber = number;
    }
    if (number === highestNumber) {
      highestNumberRepeat += 1;
    }
  }
  return highestNumberRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1Mouse = Math.abs(mouse - cat1);
  const distanceCat2Mouse = Math.abs(mouse - cat2);
  if (distanceCat1Mouse > distanceCat2Mouse) {
    return 'cat2';
  }
  if (distanceCat1Mouse === distanceCat2Mouse) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(numberArray) {
  const fizzBuzzList = [];
  for (let number of numberArray) {
    let result = 'bug!';
    if (number % 15 === 0) {
      result = 'fizzBuzz';
    } else if (number % 3 === 0) {
      result = 'fizz';
    } else if (number % 5 === 0) {
      result = 'buzz';
    }
    fizzBuzzList.push(result);
  }
  return fizzBuzzList;
}

// Desafio 9
function encode(sentence) {
  const letters = sentence.split('');
  const encoded = [];
  const code = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let letter of letters) {
    if (code[letter]) {
      encoded.push(code[letter]);
    } else {
      encoded.push(letter);
    }
  }
  return encoded.join('');
}

function decode(sentence) {
  const letters = sentence.split('');
  const decoded = [];
  const code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let letter of letters) {
    if (code[letter]) {
      decoded.push(code[letter]);
    } else {
      decoded.push(letter);
    }
  }
  return decoded.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
