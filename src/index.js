import {RequiredValidator} from './buildin/required_validator'
import {LengthValidator} from './buildin/length_validator'
import {NumericValidator} from './buildin/numeric_validator'
import {FormatValidator} from './buildin/format_validator'

export class ValidationRules {
  static required(params, key, options = {}) {
    return RequiredValidator.validate(params, key, options)
  }
  
  static numeric(params, key, options = {}) {
    return NumericValidator.validate(params, key, options)
  }
  
  
  static format(params, key, options = {}) {
    return FormatValidator.validate(params, key, options)
  }
  
  static length(params, key, options = {}) {
    return LengthValidator.validate(params, key, options)
  }
  
  // presence ???
  // inclusion
  // exclusion
}

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

export function rule(key, validations) {
  return (new Validators()).rule(key, validations)
}

export function validate(params, key, validationType, options = {}) {
  return ValidationRules[validationType](params, key, options)
}
