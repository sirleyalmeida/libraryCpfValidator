function cpfValidatorConditions(strCpf) {
  if (strCpf.length !== 11 ||
    strCpf === '00000000000' ||
    strCpf === '11111111111' ||
    strCpf === '22222222222' ||
    strCpf === '33333333333' ||
    strCpf === '44444444444' ||
    strCpf === '55555555555' ||
    strCpf === '66666666666' ||
    strCpf === '77777777777' ||
    strCpf === '88888888888' ||
    strCpf === '99999999999') {
    return false;
  }
  return true;
}

function cpfValidator(strCpf) {
  if (cpfValidatorConditions(strCpf)) {
    let rest;
    let numbersCpf = Array.from(strCpf);
    let cpfFirstNineNumbers = numbersCpf.slice(0, 9);
    let ten = 10;
    let cpfValidatorFirstPart = cpfFirstNineNumbers.map(number => number * (ten--));
    let sumFirstPart = cpfValidatorFirstPart.reduce((a, b) => a + b);
    let restFirstPart = (sumFirstPart * 10) % 11;
    let firstChecker = numbersCpf[9];

    if (restFirstPart === 10 || restFirstPart === 11) {
      rest = 0;
    }

    if (restFirstPart !== parseInt(firstChecker) && rest !== parseInt(firstChecker)) {
      return false;
    }

    let eleven = 11;
    let cpfFirstTenNumbers = numbersCpf.slice(0, 10);
    let cpfValidatorSecondPart = cpfFirstTenNumbers.map(number => number * (eleven--));
    let sumSecondPart = cpfValidatorSecondPart.reduce((a, b) => a + b);
    let restSecondPart = (sumSecondPart * 10) % 11;
    let lastChecker = numbersCpf[10];

    if (restSecondPart !== parseInt(lastChecker) && rest !== parseInt(lastChecker)) {
      return false;
    }
    return true;
  }
  return false;
}

module.exports.cpfValidator = cpfValidator;