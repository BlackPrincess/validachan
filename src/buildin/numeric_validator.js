import {EachValidator} from '../each_validator.js'
import {ValidationError} from '../validation_error.js'

export class NumericValidator extends EachValidator {
  validateEach(params, key, value, options) {
    if(isNaN(value)) {
      return {key: 'numeric'}
    }
    
    const parsedValue = parseFloat(value)
    
    if(options["ge"] && parsedValue < options["ge"]) {
      return new ValidationError('numeric_ge', key, value, {value: options["ge"]})
    }
    
    if(options["gt"] && parsedValue <= options["gt"]) {
      return new ValidationError('numeric_gt', key, value, {value: options["gt"]})
    }
    
    if(options["lt"] && options["lt"] <= parsedValue) {
      return new ValidationError('numeric_lt', key, value, {value: options["lt"]})
    }
    
    if(options["le"] && parsedValue > options["le"]) {
      return new ValidationError('numeric_le', key, value, {value: options["le"]})
    }
    return null
  }
}
