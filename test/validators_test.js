import assert from 'power-assert'
import {Validators} from '../src/index.js'

describe('Validators', () => {
  it('rule', () => {
    const target = (new Validators()).rule('required', ['noop'], {})
    assert(target.rules.length === 1)
    const target2 = (new Validators()).rule('required', ['noop'], {}).rule('required', ['foo'], {})
    assert(target2.rules.length === 2)
  })
  
  it('validate', () => {
    const validators = (new Validators())
      .rule('foo', [{type:'required'}])
      .rule('bar', [{type: 'numeric', options: {ge: 5}}])
    const params = {
      foo: '',
      bar: 4,
      baz: 'value'
    }
    const errors = validators.validate(params)
    // TODO
    assert(errors.foo !== null)
    assert(errors.bar !== null)
    assert(errors.baz === undefined)
  })
})
