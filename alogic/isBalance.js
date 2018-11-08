var expression = "{{}}{}{}"
var expressionFalse = "{{}{{{}}}}";

function isBalance(expression) {
    const expressionArray = expression.split('')
    function removeBalance(expressionArray) {
        if (!expressionArray.length ) {
            return false
        } else if (expressionArray.length %2) {
            return true
        } else {
            for (let index = 0; index < expressionArray.length - 1; index++) {
                if (expressionArray[index] === '{' && expressionArray[index + 1] === "}") {
                    expressionArray[index] = expressionArray[index + 1] = ''
                }
            }
        }
        const expressionArrayBalanced = expressionArray.filter(item=>item)
        if(expressionArrayBalanced.length===expressionArray.length){
            return true
        }
        removeBalance(expressionArrayBalanced)
    }
    return !removeBalance(expressionArray)
}

function isBalanced(expression) {
    var checkString = expression;
    var stack = [];
  
    // If empty, parentheses are technically balanced
    if (checkString.length <= 0) return true;
  
    for (var i = 0; i < checkString.length; i++) {
      if(checkString[i] === '{') {
        stack.push(checkString[i]);
      } else if (checkString[i] === '}') {
        // Pop on an empty array is undefined
        if (stack.length > 0) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    // If the array is not empty, it is not balanced
    if (stack.pop()) return false;
    return true;
  }

console.log(isBalanced(expressionFalse))