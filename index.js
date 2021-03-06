const treatingStrCpf = (cpf) => String(cpf).replace(/\.|\-|\/|\(|\)| \D+/g, '');
const isRepeatingNumbers = (cpf) => treatingStrCpf(cpf).split('').every((elem) => elem === treatingStrCpf(cpf)[0]);
const numbersCpf = (cpf) => Array.from(treatingStrCpf(cpf));

const calculateChecker = (cpf, multiply) => {
  const multiCalc = numbersCpf(cpf).slice(0, (multiply - 1)).map(number => number * (multiply--));
  const restCalc = multiCalc.reduce((a, b) => (a + b)) * 10 % 11;
  return restCalc;
};

const digitChecker = (rest) => {
  return (rest === 10 || rest === 11) ? 0 : rest;
};

const checkerIsTrueOrFalse = (cpf) => {
  let firstChecker = calculateChecker(cpf, 10);
  firstChecker = digitChecker(firstChecker);

  let lastChecker = calculateChecker(cpf, 11);
  lastChecker = digitChecker(lastChecker);

  return (firstChecker !== parseInt(numbersCpf(cpf)[9]) || lastChecker !== parseInt(numbersCpf(cpf)[10])) ? false : true;
};

function cpfValidator(cpf) {
  return (isRepeatingNumbers(cpf)) ? false : checkerIsTrueOrFalse(cpf);
}

module.exports = cpfValidator;