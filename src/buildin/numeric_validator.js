import {EachValidator} from '../each_validator.js'
import {ValidationError} from '../validation_error.js'

export class NumericValidator extends EachValidator {
  static validateEach(params, key, value, options) {
    if(isNaN(value)) {
      return {key: 'numeric'}
    }
    
    const parsedValue = parseFloat(value)
    
    if(opt["ge"] && parsedValue < opt["ge"]) {
      return new ValidationError('numeric_ge', key, value, {value: opt["ge"]})
    }
    
    if(opt["gt"] && parsedValue <= opt["gt"]) {
      return new ValidationError('numeric_gt', key, value, {value: opt["gt"]})
    }
    
    if(opt["lt"] && opt["lt"] <= parsedValue) {
      return new ValidationError('numeric_lt', key, value, {value: opt["lt"]})
    }
    
    if(opt["le"] && parsedValue > opt["le"]) {
      return new ValidationError('numeric_le', key, value, {value: opt["le"]})
    }
    return null
  }
}
