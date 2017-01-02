import {EachValidator} from '../each_validator.js'
import {ValidationError} from '../validation_error.js'

export class LengthValidator extends EachValidator {
  validateEach(params, key, value, options) {
    if(options['min'] && value.length < parseInt(options['min'], 10)) {
      return new ValidationError('length_min', key, value, {value: options['min']})
    }
    
    if(options['max'] && parseInt(options['max'], 10) < value.length) {
      return new ValidationError('length_max', key, value, {value: options['max']})
    }
    
    if(options['is'] && parseInt(options['is'], 10) !== value.length) {
      return new ValidationError('length_is', key, value, {value: options['is']})
    }
    return null
  }
}
