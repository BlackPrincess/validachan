import {Validators} from './validators'
import {ValidationRules} from './validation_rules'

export function rule(key, validations) {
  return (new Validators()).rule(key, validations)
}

export function validate(params, key, validationType, options = {}) {
  return ValidationRules[validationType](params, key, options)
}
