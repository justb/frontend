var a = {
    a:"a",
    get: function(){
        console.log(this.a)
    }
}

function run(fn){
    var a = 1123
    console.log(this.callee)
    fn()
}

run(a.get)

const obj = {
    hi: function(){
        const a = ()=>{
            console.log(1,this)
            function b(){
                console.log(this)
            }
            b()
        }
        a()
    }
}

obj.hi()

const {hi}  = obj
hi()