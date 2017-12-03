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