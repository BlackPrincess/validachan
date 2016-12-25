import {validate} from './index'

export class Validators {
  constructor(rules = []) {
    this.rules = rules
  }
  
  rule(key, validations) {
    const validation = validations.map((a) => {
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
      if(errors[rule.key]) {
        errors[rule.key].concat(validate(params, rule.key, rule.validationType, rule.options))
      } else {
        errors[rule.key] = validate(params, rule.key, rule.validationType, rule.options)
      }
      
      return errors;
    }, {})
  }
}
