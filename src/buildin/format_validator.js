import {EachValidator} from '../each_validator.js'

export class FormatValidator extends EachValidator {
  static defaultOptions(option) {
    const _option = super.defaultOptions(option)
    if(!_option['not']) _option['not'] = false
    
    return _option
  }
  
  static validateEach(params, key, value, options) {
    if(options['not'] ^ !options['regex'].test(value)) {
      const error_key = !options['not'] ? 'regex' : 'regex_not'
      return {key: error_key, regex: options["regex"].toString()}
    }
    return {}
  }
}
