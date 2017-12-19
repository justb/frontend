function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms).catch(() => {
        console.log(123)
    });
    console.log(value);
}

asyncPrint('hello world', 0).catch(function(e) {
    console.log(e)
});


// async function timeout(ms) {
//     await new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint('hello world', 1000); //await后面必须跟一个promise，等待promise返回才会执行下面的语句，async函数本质上也是一个promise，里面通常会有await关键字