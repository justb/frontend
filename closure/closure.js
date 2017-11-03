function foo() {
  var local = 1
  function bar() {
    var c = local
    return c
  }
  return bar()
  // return bar
}

foo()
// console.log(c)

global.name = "The Window";
　　var object = {
  　　　　name: "My Object",
  　　　　getNameFunc: function () {
    　　　　　　return function () {
      　　　　　　　　return this.name;
    　　　　　　};
  　　　　}
　　};
console.log(object.getNameFunc()());
var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
console.log(object.getNameFunc()());