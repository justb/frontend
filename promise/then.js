const p = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 1000);
})
console.log(new Date())
p().then(r => {
    console.log(new Date())
    p().then(r => console.log(new Date()))
}).then(r => console.log(new Date()))