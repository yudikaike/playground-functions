// Desafio 10
function techList(technologies, personName) {
  const technologyList = [];
  const sortedTechnologies = technologies.sort();
  if (sortedTechnologies.length === 0) {
    return 'Vazio!';
  }
  for (let technology of sortedTechnologies) {
    const object = {
      tech: technology,
      name: personName,
    };
    technologyList.push(object);
  }
  return technologyList;
}

// Desafio 11
function validatePhoneSize(numbers) {
  if (numbers.length !== 11) {
    return false;
  }
  return true;
}

function validateNumberRange(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function validateNumberRepetition(numbers) {
  const numberRepetitions = {};
  for (let number of numbers) {
    if (!numberRepetitions[number]) {
      numberRepetitions[number] = 0;
    }
    numberRepetitions[number] += 1;
    if (numberRepetitions[number] >= 3) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(numbers) {
  const sizeErrorMessage = 'Array com tamanho incorreto.';
  const invalidNumbersErrorMessage = 'não é possível gerar um número de telefone com esses valores';
  if (!validatePhoneSize(numbers)) {
    return sizeErrorMessage;
  }
  if (!validateNumberRange(numbers) || !validateNumberRepetition(numbers)) {
    return invalidNumbersErrorMessage;
  }
  const string = numbers.join('');
  const phoneNumber = `(${string.slice(0, 2)}) ${string.slice(2, 7)}-${string.slice(7, 11)}`;
  return phoneNumber;
}

// Desafio 12
function lessThanSumSides(lineA, lineB, lineC) {
  const sumSidesBC = lineB + lineC;
  const sumSidesAC = lineA + lineC;
  const sumSidesAB = lineA + lineB;
  if (lineA < sumSidesBC && lineB < sumSidesAC && lineC < sumSidesAB) {
    return true;
  }
  return false;
}

function greaterThanAbsValue(lineA, lineB, lineC) {
  const absValueBC = Math.abs(lineB - lineC);
  const absValueAC = Math.abs(lineA - lineC);
  const absValueAB = Math.abs(lineA - lineB);
  if (lineA > absValueBC && lineB > absValueAC && lineC > absValueAB) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (lessThanSumSides(lineA, lineB, lineC) && greaterThanAbsValue(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(order) {
  const orderItems = order.split(' ');
  let quantity = 0;
  for (let item of orderItems) {
    const quantityNumber = parseInt(item, 10);
    if (quantityNumber) {
      quantity += quantityNumber;
    }
  }
  if (quantity === 1) {
    return `${quantity} copo de água`;
  }
  return `${quantity} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
