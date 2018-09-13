var throttle = (fn,...args)=>{
    var timer
    return ()=>{
        clearTimeout(timer)
        timer=setTimeout(()=>
            fn(...args)
        ,100)
    }
}

function a(a,b){
    console.log(a,b)
}

setInterval(throttle(a,1,2),99)