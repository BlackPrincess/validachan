import assert from 'power-assert'
import {ValidationRules} from '../src/validation_rules.js'

describe('Validators', () => {
  it('get', () => {
    assert(ValidationRules.get('required') !== undefined)
    assert(ValidationRules.get('numeric') !== undefined)
    assert(ValidationRules.get('format') !== undefined)
    assert(ValidationRules.get('length') !== undefined)
  })

})
