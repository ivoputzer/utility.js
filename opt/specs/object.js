require('../../utility.js')

describe('Object', function() {

  describe('.keys(obj)', function() {
    it('returns an array containing object keys', function(){
      var arr = {a: 1, b: 2, c: 3}
      Object.keys(arr).should.be.eql(['a','b','c'])
    })
  })

  describe('.values(obj)', function() {
    it('returns an array containing object values', function(){
      var arr = {a: 1, b: 2, c: 3}
      Object.values(arr).should.be.eql([1,2,3])
    })
  })

})