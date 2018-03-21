let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 1000);
})

async function b() {
    await a
    console.log("back")
}
b()