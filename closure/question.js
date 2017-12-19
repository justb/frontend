function a() {
    var array = []

    for (var i = 0; i < 3; i++) {
        var a = i
        array.push(
            (function(i) {
                console.log(i)
            })(i)
        )
    }

    return array
}

var b = a()
console.log(b[1])
b[0]()
b[1]()
b[2]()