import assert from 'power-assert'
import {RequiredValidator} from '../../src/buildin/required_validator.js'

describe('RequiredValidator', () => {
  it('validation', () => {
    const noop = 'noop'
    const testTarget = {foo: 'foo value', bar: '', baz: null}
    const validator = new RequiredValidator()
    assert(validator.validateEach(testTarget, 'foo', noop) === null)
    assert(validator.validateEach(testTarget, 'bar', noop) !== null)
    assert(validator.validateEach(testTarget, 'baz', noop) !== null)
    assert(validator.validateEach(testTarget, 'undef', noop) !== null)
  })
})
