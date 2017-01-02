import {validate} from './index'
import {ObjectUtil} from './std_utils/object_util'

export class Validators {
  constructor(rules = []) {
    this.rules = rules
  }
  
  rule(key, validations) {
    const _validations = Array.isArray(validations) ? validations : [validations]
    const validation = _validations.map((a) => {
      return {
        validationType: a.type, 
        key: key, 
        options: a.options
      }
    })
    return new Validators(this.rules.concat(validation))
  }
  
  validate(params) {
    return this.rules.reduce((errors, rule) => {
      // HACK
      const error = validate(params, rule.key, rule.validationType, rule.options)
      
      if(errors[rule.key]) {
        errors[rule.key] = errors[rule.key].concat(error)
      } else {
        errors[rule.key] = error
      }
      
      return errors;
    }, ObjectUtil.tuplesToObject(Object.keys(params).map((a) => [a, []])))
  }
}
