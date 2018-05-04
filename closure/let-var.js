//最小公倍数=两值相乘/最大公约数
function gcd(a, b) {
    if (b == 0) {
        return a
    }
    var r = parseInt(a % b)
    return gcd(b, r)
}
console.log(9 * 6 / gcd(6, 9))

var data = []
for (let i = 0; i < 5; i++) {
    data[i] = function() {
        console.log(i)
    }
}
data[1]()

var data = []
for (var i = 0; i < 5; i++) {
    data[i] = function() {
        console.log(i)
    }
}
data[1]()

