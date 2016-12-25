import assert from 'power-assert'
import {Validators} from '../src/validators.js'

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
    assert(errors.foo.length === 1)
    assert(errors.bar.length === 1)
    assert(errors.baz === undefined)
  })
  
  it('validate mulpiple', () => {
    const validators = (new Validators())
      .rule('foo', [{type: 'length', options: {min: 5}}])
      .rule('foo', [{type: 'format', options: {regex: /\d{5-6}/}}])
    const params = {
      foo: 'aa'
    }
    const errors = validators.validate(params)
    assert(errors.foo.length === 2)
  })
  
  
  it('validate single options', () => {
    const validators = (new Validators())
      .rule('foo', {type:'required'})
    const params = {
      foo: ''
    }
    const errors = validators.validate(params)
    assert(errors.foo.length === 1)
  })
})
