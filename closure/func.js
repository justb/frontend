var f = function () {
    return true
};
var g = function () {
    return false
};
(
    function () {
        if (g() && [] !== []) {
            f = function () {
                return false
            }

            function g() {
                return true
            }
        }
    }
)()

console.log(f())
console.log(g())