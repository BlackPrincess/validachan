import {EachValidator} from '../each_validator.js'
import {ValidationError} from '../validation_error.js'

export class FormatValidator extends EachValidator {
  defaultOptions(option) {
    const _option = super.defaultOptions(option)
    if(!_option['not']) _option['not'] = false
    
    return _option
  }
  
  validateEach(params, key, value, options) {
    if(options['not'] ^ !options['regex'].test(value)) {
      const error_key = !options['not'] ? 'regex' : 'regex_not'
      return new ValidationError(error_key, key, value, {regex: options["regex"].toString()})
    }
    return null
  }
}
