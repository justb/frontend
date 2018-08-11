const arr = [ 3,7,5,2,6,9,1 ]
console.log(arr.sort((a,b)=>{
    console.log(a,b)
    if(a===6||b===6) return
    return a-b
}))