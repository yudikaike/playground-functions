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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
