import {RequiredValidator} from './buildin/required_validator'
import {LengthValidator} from './buildin/length_validator'
import {NumericValidator} from './buildin/numeric_validator'
import {FormatValidator} from './buildin/format_validator'




export class ValidationRules {
  static required(params, keys, options = {}) {
    return RequiredValidator.validate(params, keys, options)
  }
  
  static numeric(params, keys, options = {}) {
    return NumericValidator.validate(params, keys, options)
  }
  
  
  static format(params, keys, options = {}) {
    return FormatValidator.validate(params, keys, options)
  }
  
  static length(params, keys, options = {}) {
    return LengthValidator.validate(params, keys, options)
  }
  
  // presence ???
  // inclusion
  // exclusion
}


export function validate(params, validationType, keys, options = {}) {
  return ValidationRules[validationType](params, keys, options)
}
