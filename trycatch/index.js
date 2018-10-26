// //throw后面的语句不会执行和return一样
// function a(){
//     try{
//         throw 123
//         return 1
//     }catch(e){
//         console.log(e)
//     }
// }
// console.log(a())




const p = e=>
    new Promise((res,rej)=>setTimeout(() => {
        console.log('res')
        rej(1000)
    }, 1000))

async function t(){
    try{
        const c = await p()
        console.log('after await')
    }catch(e){
        console.log(e)
    }
}

t();
// // p().then(r=>{throw '456'},e=>{throw '123'}).catch(e=>console.log(e)).then(r=>console.log(r)).catch(r=>console.log(r))

// //代码执行到await会太跳出当前函数
// (async function (){
//     async function a(){
//         c=await p()
//     }
//     a()
//     console.log(123)
// })()

(function(){
    async function a(){
        for (let index = 0; index < 3000000000; index++) {
        
        
        }
    }
    a()
    console.log(123)
})()