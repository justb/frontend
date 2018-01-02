var isPalindrome = function(x) {
  var a = x.toString().split('')
  console.log(a)
  for (var i = 0; i < a.length / 2; i++) {
    if (a[i] !== a[a.length - 1 - i]) {
      return false
    }
  }
  return true
}
console.log(isPalindrome(-2147483648))