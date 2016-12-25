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
