var a = (function(root) {
    var _name = {}
    var fn = function(a) {
        console.log(a)
    }
    return fn.call(root)

}(root))

a("123")