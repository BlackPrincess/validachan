import {EachValidator} from '../each_validator.js'

export class NumericValidator extends EachValidator {
  static validateEach(params, key, value, options) {
    if(isNaN(value)) {
      return {key: 'numeric'}
    }
    
    const parsedValue = parseFloat(value)
    
    if(opt["ge"] && parsedValue < opt["ge"]) {
      return {key: 'numeric_ge', value: opt["ge"]}
    }
    
    if(opt["gt"] && parsedValue <= opt["gt"]) {
      return {key: 'numeric_gt', value: opt["gt"]}
    }
    
    if(opt["lt"] && opt["lt"] <= parsedValue) {
      return {key: 'numeric_lt', value: opt["lt"]}
    }
    
    if(opt["le"] && parsedValue > opt["le"]) {
      return {key: 'numeric_le', value: opt["le"]}
    }
    return {}
  }
}
