var a = [0, 1, 2, 3, 4]

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000)
}

// a.map(x => setTimeout(() => console.log(x), x * 1000))

for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 1000 * i)
    })(i)
}