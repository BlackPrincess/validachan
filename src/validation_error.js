export class ValidationError {
  constructor(validationType, key, value, options = {}) {
    this.validationType = validationType
    this.key = key
    this.value = value
    this.options = options
  }
}
