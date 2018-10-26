const p = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(123)
    }, 1000);
})


try{
    p()
    // .then(r => {
    //     console.log(1)
    //     p().then(r => console.log(2))
    // },e => {
    //     // throw Error(123)
    // }).then(r => console.log(1))
    // .then(r => console.log(1))
    // .catch(e => console.log('error:'+e))
    // .then(r => console.log(1111))
}catch(e){
  console.log('catch:'+e)  
}
