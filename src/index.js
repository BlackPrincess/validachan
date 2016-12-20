export class ValidationRules {
  // TODO
  static required(params, keys, options = {}) {
    const opt = this.defaultOptions(options)
    
    if(!opt['if'](params)) return
    if(opt['unless'](params)) return
  
    const errors = {}
    keys.forEach(key => {
      errors[key] = []
    })
    
    keys.map(key => {
      if(!params[key]) {
        errors[key].push({key: 'required'})
      }
    })
    return errors
  }
  
  static numeric(params, keys, options = {}) {
    const opt = this.defaultOptions(options)
    
    if(!opt['if'](params)) return
    if(opt['unless'](params)) return
    
    const errors = {}
    keys.forEach(key => {
      errors[key] = []
    })
    
    
    keys.map(key => {
      if(!params[key]) return
      if(isNaN(params[key])) {
        
        errors[key].push({key: 'numeric'})
        return
      }
      
      const value = parseFloat(params[key])
      
      if(opt["ge"] && value < opt["ge"]) {
        errors[key].push({key: 'numeric_ge', value: opt["ge"]})
        return
      }
      
      if(opt["gt"] && value <= opt["gt"]) {
        errors[key].push({key: 'numeric_gt', value: opt["gt"]})
        return
      }
      
      if(opt["lt"] && opt["lt"] <= value) {
        errors[key].push({key: 'numeric_lt', value: opt["lt"]})
        return
      }
      
      if(opt["le"] && value > opt["le"]) {
        errors[key].push({key: 'numeric_le', value: opt["le"]})
        return
      }
    })
    return errors
  }
  
  
  static format(params, keys, options = {}) {
    const opt = this.defaultOptions(options)
    
    if(!opt['if'](params)) return
    if(opt['unless'](params)) return
    if(!opt['not']) {
      opt['not'] = false
    }
    
    const errors = {}
    keys.forEach(key => {
      errors[key] = []
    })
    
    keys.map(key => {
      if(!params[key]) return
      const value = params[key]
      if(opt['not'] ^ !opt['regex'].test(value)) {
        const error_key = !opt['not'] ? 'regex' : 'regex_not'
        errors[key].push({key: error_key, regex: opt["regex"].toString()})
        return
      }
    })
    return errors
  }
  
  static defaultOptions(option) {
    if(!option['if']) option['if'] = function() { return true; }
    if(!option['unless']) option['unless'] = function() { return false; }
    return option
  }
  
  static length(params, keys, options = {}) {
    const opt = this.defaultOptions(options)
    
    if(!opt['if'](params)) return
    if(opt['unless'](params)) return
  
    
    const errors = {}
    keys.forEach(key => {
      errors[key] = []
    })
    
    keys.map(key => {
      if(!params[key]) return
      const value = params[key]
      if(opt['min'] && value.length < parseInt(opt['min'], 10)) {
        errors[key].push({key: 'length_min', value: opt['min']})
        return
      }
      
      if(opt['max'] && parseInt(opt['max'], 10) < value.length) {
        errors[key].push({key: 'length_max', value: opt['min']})
        return
      }
      
      if(opt['is'] && parseInt(opt['is'], 10) !== value.length) {
        errors[key].push({key: 'length_is', value: opt['min']})
        return
      }

    })
    return errors
  }
  
  // presence ???
  // inclusion
  // exclusion
}

export function validate(params, validationType, keys, options = {}) {
  return ValidationRules[validationType](params, keys, options)
}
