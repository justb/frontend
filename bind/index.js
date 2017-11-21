var num = 9; 
var mymodule = {
  num: 81,
  getNum: function() { return this.num; }
};

console.log(mymodule.getNum()); // 81

var getNum = mymodule.getNum;
console.log(getNum()); // 9, 因为在这个例子中，"this"指向全局对象

// 创建一个'this'绑定到module的函数
var boundGetNum = getNum.bind(module);
console.log(boundGetNum()); // 81