const foo=()=>{
    console.log(123)
}

@testable({foo})
class MyTestableClass {
    // ...
    foo(){
        console.log('foo')
    }
}

function testable(...list) {
    console.log(...list)
    return function(target){
        list.forEach(item=>{
            if(!target.prototype[Object.keys(item)[0]]){
                console.log(Object.keys(item)[0])

                Object.assign(target.prototype, ...list)
            }
        })
    }
}

let obj = new MyTestableClass()



obj.foo()