let chai = require('chai');
let expect = chai.expect;
let cpfValidatorTest = require('../index');

describe('Cpf validator', () => {
  describe('validate input', () => {
    it('input is empty', () => {
      expect(cpfValidatorTest.cpfValidator('')).to.be.false;
    });
    it('input is bigger than eleven numbers', () => {
      expect(cpfValidatorTest.cpfValidator('123456789101')).to.be.false;
    });
    it('input is less than to eleven numbers', () => {
      expect(cpfValidatorTest.cpfValidator('123456789')).to.be.false;
    });
    it('input is repeated numbers', () => {
      expect(cpfValidatorTest.cpfValidator('11111111111')).to.be.false;
    });
    it('input has strings type letters', () => {
      expect(cpfValidatorTest.cpfValidator('1a3d4f44444')).to.be.false;
    });
    it('input has number type', () => {
      expect(cpfValidatorTest.cpfValidator(12345678909)).to.be.true;
    });
    it('input has number type and special characters', () => {
      expect(cpfValidatorTest.cpfValidator('123.456.789-09')).to.be.true;
    });
    it('input is a valid cpf', () => {
      expect(cpfValidatorTest.cpfValidator('12345678909')).to.be.true;
    });
  });
});