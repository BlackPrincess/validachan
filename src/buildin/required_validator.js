import {EachValidator} from '../each_validator.js'
import {ValidationError} from '../validation_error.js'

export class RequiredValidator extends EachValidator {
  static defaultOptions(option) {
    const _option = super.defaultOptions(option)
    _option['apply_undef'] = true
    return _option
  }
  
  static validateEach(params, key, value, options) {
    if(!params[key]) {
      return new ValidationError('required', key, value)
    }
    return null
  }
}
