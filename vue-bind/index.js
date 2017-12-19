var a = { }

Object.defineProperty(a, 'key', {
  get() {
    console.log('get')
  },
  set: function(v) {
    console.log(v)
  }
})

a.key = 1
a.key = 2
console.log(a.key)

var b = [1,2,3,4]
var c=Object.keys(b)
Object.defineProperty(b, '1', {
    get() {
      console.log('get')
    },
    set: function(v) {
      console.log(v)
    }
  })
console.log(c)
console.log(b[1])

var d = Object.assign({},b)
for(let i in d){
    console.log(i)
}