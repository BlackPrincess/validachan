import {EachValidator} from '../each_validator.js'

export class LengthValidator extends EachValidator {
  static validateEach(params, key, value, options) {
    if(options['min'] && value.length < parseInt(options['min'], 10)) {
      return {key: 'length_min', value: options['min']}
    }
    
    if(options['max'] && parseInt(options['max'], 10) < value.length) {
      return {key: 'length_max', value: options['min']}
    }
    
    if(options['is'] && parseInt(options['is'], 10) !== value.length) {
      return {key: 'length_is', value: options['min']}
    }
    return {}
  }
}
