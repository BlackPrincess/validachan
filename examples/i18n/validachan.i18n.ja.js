class ValidationMessage {
  translate(error) {
    return this.getMessage(error.validationType, error.options)
  }
  t(args) {
    return this.translate(args)
  }
  
  getMessage(key, opt)  {
    return key
  }
}

class ValidationMessageJa extends ValidationMessage {
  getMessage(key, opt)  {
    switch(key) {
      case 'required':
        return '入力してください'
      case 'numeric':
        return '数字を入力してください'
      case 'numeric_ge':
        return `${opt['value']}以上で入力してください`
      case 'numeric_gt':
        return `${opt['value']}より大きい数字で入力してください`
      case 'numeric_lt':
        return `${opt['value']}未満で入力してください`
      case 'numeric_le':
        return `${opt['value']}以下で入力してください`
      case 'regex':
        return 'フォーマットが正しくありません'
      case 'regex_not':
        return 'フォーマットが正しくありません'
      default:
        return opt
    }
  }
}
