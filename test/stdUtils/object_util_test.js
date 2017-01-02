import assert from 'power-assert'
import {ObjectUtil} from '../../src/std_utils/object_util.js'

describe('ObjectUtil', () => {
  it('tuplesToArray', () => {
    const tuples = [
      ['a', 1],
      ['b', 2]
    ]
    
    const actual = ObjectUtil.tuplesToObject(tuples)
    assert(actual['a'] === 1)
    assert(actual['b'] === 2)
  })
  
})
