const filterObjectByKeys = (inputObject: any, targetKeys: Array<String>) => {
  if (inputObject === null) {
    return {}
  }

  return Object.keys(inputObject).reduce((output: any, key: string) => {
    if (targetKeys.includes(key)) {
      output[key] = inputObject[key]
    }
    return output;
  }, {})
}

export default filterObjectByKeys;