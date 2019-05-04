/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const cpfValidatorTest = require('../index');

describe('Cpf validator', () => {
  describe('validate input', () => {
    it('input is empty', () => {
      expect(cpfValidatorTest('')).to.be.false;
    });
    it('input is bigger than eleven numbers', () => {
      expect(cpfValidatorTest('123456789101')).to.be.false;
    });
    it('input is less than to eleven numbers', () => {
      expect(cpfValidatorTest('123456789')).to.be.false;
    });
    it('input is repeated numbers', () => {
      expect(cpfValidatorTest('11111111111')).to.be.false;
    });
    it('input has strings type letters', () => {
      expect(cpfValidatorTest('aaaaaaaaaaa')).to.be.false;
    });
    it('input has number type', () => {
      expect(cpfValidatorTest(12345678909)).to.be.true;
    });
    it('input has number type and special characters', () => {
      expect(cpfValidatorTest('123.456.789-09')).to.be.true;
    });
    it('input is a valid cpf', () => {
      expect(cpfValidatorTest('12345678909')).to.be.true;
    });
  });
});
