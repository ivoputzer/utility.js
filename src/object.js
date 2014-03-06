Object.values = function(object) {
  return Object.keys(object).map(function(key) {
    return object[key]
  })
}

Object.defineProperty(Object.prototype, 'extend', {
  enumerable: false,
  value: function(o) {
    Object.getOwnPropertyNames(o).forEach(function(p) {
        Object.defineProperty(this, p, Object.getOwnPropertyDescriptor(o, p))
    }.bind(this))
    return this
  }
})