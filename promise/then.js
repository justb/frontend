const p = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(123)
    }, 1000);
})
console.log(0)
p().then(r => {
        console.log(1)
        p().then(r => console.log(2))
    }).then(r => console.log(1))
    .then(r => console.log(1))
    .catch(e => console.log(e))
