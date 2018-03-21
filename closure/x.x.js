function test(a){
    this.x = a
    return this
}

var x = test(5)
var y = test(6)

console.log(x)
console.log(y.x)
console.log(x)