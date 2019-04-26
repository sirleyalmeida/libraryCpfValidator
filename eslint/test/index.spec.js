let chai = require('chai');
let expect = chai.expect;
let cpfValidatorTest = require('../index');

describe('Cpf validator', () => {
  describe('validate input', () => {
    it('input is different to eleven numbers', () => {
      expect(cpfValidatorTest.cpfValidator('strCpf', '123456789101')).to.equal(false);
    });
    it('input is repeated numbers', () => {
      expect(cpfValidatorTest.cpfValidator('strCpf', '11111111111')).to.equal(false);
    });
    it('input has strings type', () => {
      expect(cpfValidatorTest.cpfValidator('strCpf', '1a3d4f44444')).to.equal(false);
    });
  });
});