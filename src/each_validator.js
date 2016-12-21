export class EachValidator {
  static defaultOptions(option) {
    if(!option['if']) option['if'] = function() { return true; }
    if(!option['unless']) option['unless'] = function() { return false; }
    if(!option['apply_undef']) option['apply_undef'] = false
    return option
  }
  
  static isApply(params, options) {
    if(!options['if'](params)) return false
    if(options['unless'](params)) return false
    return true;
  }
  
  static validateEach(params, key, value, options) {
    return {}
  }
  
  static validate(params, keys, options = {}) {
    const opt = this.defaultOptions(options)
    
    if(!this.isApply(params, opt)) return
    
    const errors = {}
    keys.forEach(key => {
      errors[key] = []
    })
    
    keys.map(key => {
      if(!opt['apply_undef'] && !params[key]) return
      const value = params[key]
      const error = this.validateEach(params, key, value, options)
      if(error !== null) {
        errors[key].push(error)
      }
    })
    return errors
  }
}
