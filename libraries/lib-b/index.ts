function prettyPrint(data: any) {
  return JSON.stringify(data, null, 2)
}

function stringify(data: any) {
  return JSON.stringify(data)
}

export {
  prettyPrint,
  stringify
}