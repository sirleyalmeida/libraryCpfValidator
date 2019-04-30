const treatingStrCpf = (cpf) => String(cpf).replace(/\-|\.|\/|\(|\)| \D+/g, '');
const isRepeatingNumbers = (cpf) => treatingStrCpf(cpf).split('').every((elem) => elem === treatingStrCpf(cpf)[0]);
const numbersCpf = (cpf) => Array.from(treatingStrCpf(cpf));

const cpfValidatorFirstChecker = (cpf) => {
  let cpfFirstNineNumbers = numbersCpf(cpf).slice(0, 9);
  let ten = 10;
  let cpfValidatorFirstPart = cpfFirstNineNumbers.map(number => number * (ten--));
  let calculateFirstPart = cpfValidatorFirstPart.reduce((a, b) => (a + b)) * 10 % 11;
  return calculateFirstPart;
};

const cpfValidatorSecondChecker = (cpf) => {
  let eleven = 11;
  let cpfFirstTenNumbers = numbersCpf(cpf).slice(0, 10);
  let cpfValidatorSecondPart = cpfFirstTenNumbers.map(number => number * (eleven--));
  let calculateSecondPart = cpfValidatorSecondPart.reduce((a, b) => (a + b)) * 10 % 11;
  return calculateSecondPart;
};

const validatorFirstCheckerIsTrueOrFalse = (cpf) => {
  let rest;
  const firstChecker = numbersCpf(cpf)[9];
  const lastChecker = numbersCpf(cpf)[10];
  let restFirstChecker = cpfValidatorFirstChecker(cpf);
  let restSecondChecker = cpfValidatorSecondChecker(cpf);

  if (restFirstChecker === 10 ||
    restFirstChecker === 11 ||
    restSecondChecker === 10 ||
    restSecondChecker === 10) {
    rest = 0;
  }

  if (restFirstChecker !== parseInt(firstChecker) && rest !== parseInt(firstChecker)) {
    return false;
  }

  if (restSecondChecker !== parseInt(lastChecker) && rest !== parseInt(lastChecker)) {
    return false;
  }
  return true;
};

function cpfValidator(cpf) {
  if (isRepeatingNumbers(cpf)) {
    return false;
  }
  return validatorFirstCheckerIsTrueOrFalse(cpf);
}

module.exports.cpfValidator = cpfValidator;

// function cpfValidatorConditions(strCpf) {
//   if (strCpf.length !== 11 ||
//     strCpf === '00000000000' ||
//     strCpf === '11111111111' ||
//     strCpf === '22222222222' ||
//     strCpf === '33333333333' ||
//     strCpf === '44444444444' ||
//     strCpf === '55555555555' ||
//     strCpf === '66666666666' ||
//     strCpf === '77777777777' ||
//     strCpf === '88888888888' ||
//     strCpf === '99999999999') {
//     return false;
//   }
//   return true;
// }

// function inputTypeOfNumbers(strCpf) {
//   if (typeof strCpf === Number) {
//     return toString(strCpf);
//   }
// }

// function cpfValidator(strCpf) {
//   if (cpfValidatorConditions(strCpf) {
//     let rest;
//     let numbersCpf = Array.from(strCpf);
//     let cpfFirstNineNumbers = numbersCpf.slice(0, 9);
//     let ten = 10;
//     let cpfValidatorFirstPart = cpfFirstNineNumbers.map(number => number * (ten--));
//     let sumFirstPart = cpfValidatorFirstPart.reduce((a, b) => a + b);
//     let restFirstPart = (sumFirstPart * 10) % 11;
//     let firstChecker = numbersCpf[9];

//     if (restFirstPart === 10 || restFirstPart === 11) {
//       rest = 0;
//     }

//     if (restFirstPart !== parseInt(firstChecker) && rest !== parseInt(firstChecker)) {
//       return false;
//     }

//     let eleven = 11;
//     let cpfFirstTenNumbers = numbersCpf.slice(0, 10);
//     let cpfValidatorSecondPart = cpfFirstTenNumbers.map(number => number * (eleven--));
//     let sumSecondPart = cpfValidatorSecondPart.reduce((a, b) => a + b);
//     let restSecondPart = (sumSecondPart * 10) % 11;
//     let lastChecker = numbersCpf[10];

//     if (restSecondPart !== parseInt(lastChecker) && rest !== parseInt(lastChecker)) {
//       return false;
//     }
//     return true;
//   }
//   return false;
// }

