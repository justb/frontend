var a = [0, 1, 2, 3, 4]

const b = new Promise((res)=>setTimeout(() => {
    res('111')
}, 1000))

for (let i = 0; i < 5; i++) {
    // setTimeout(() => console.log(i), 1000)
    b.then(r=>console.log(i))
}

// a.map(x => setTimeout(() => console.log(x), x * 1000))

for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 1000)
    })(i)
}