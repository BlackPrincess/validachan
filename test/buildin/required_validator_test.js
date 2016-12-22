import assert from 'power-assert'
import {RequiredValidator} from '../../src/buildin/required_validator.js'

describe('RequiredValidator', () => {
  it('validation', () => {
    const noop = 'noop'
    const testTarget = {foo: 'foo value', bar: '', baz: null}
    assert(RequiredValidator.validateEach(testTarget, 'foo', noop) === null)
    assert(RequiredValidator.validateEach(testTarget, 'bar', noop) !== null)
    assert(RequiredValidator.validateEach(testTarget, 'baz', noop) !== null)
    assert(RequiredValidator.validateEach(testTarget, 'undef', noop) !== null)
  })
})
