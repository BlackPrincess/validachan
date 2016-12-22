import assert from 'power-assert'
import {LengthValidator} from '../../src/buildin/length_validator.js'

describe('LengthValidator', () => {
  it('validation min', () => {
    const noop = 'noop'
    const testTarget = {}
    assert(LengthValidator.validateEach(testTarget, noop, 'value', {min: 5}) === null)
    assert(LengthValidator.validateEach(testTarget, noop, 'value', {min: 6}) !== null)
  })
  
  it('validation max', () => {
    const noop = 'noop'
    const testTarget = {}
    assert(LengthValidator.validateEach(testTarget, noop, 'value', {max: 5}) === null)
    assert(LengthValidator.validateEach(testTarget, noop, 'value', {max: 4}) !== null)
  })
  
  it('validation is', () => {
    const noop = 'noop'
    const testTarget = {}
    assert(LengthValidator.validateEach(testTarget, noop, 'value', {is: 5}) === null)
    assert(LengthValidator.validateEach(testTarget, noop, 'value', {is: 6}) !== null)
    
  })
})
