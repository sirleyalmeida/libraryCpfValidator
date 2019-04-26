let chai = require('chai');
let expect = chai.expect;
let cpfValidatorTest = require('../index');

describe('Cpf validator', () => {
  describe('validate input', () => {
    it('input is empty', () => {
      expect(cpfValidatorTest.cpfValidator('')).to.be.false;
    });
    it('input is different to eleven numbers', () => {
      expect(cpfValidatorTest.cpfValidator('123456789101')).to.be.false;
    });
    it('input is repeated numbers', () => {
      expect(cpfValidatorTest.cpfValidator('11111111111')).to.be.false;
    });
    it('input has strings type', () => {
      expect(cpfValidatorTest.cpfValidator('1a3d4f44444')).to.be.false;
    });
    it('input is equal to numbers valid', () => {
      expect(cpfValidatorTest.cpfValidator('12345678909')).to.be.true;
    });
  });
});