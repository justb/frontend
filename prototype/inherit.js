function Father() {
  // 添加name属性.  默认直接赋值了。当然也可以通过构造函数传递过来
  this.name = '马云'
}
//给Father的原型添加giveMoney方法
Father.prototype.giveMoney = function() {
  console.log('我是Father原型中定义的方法')
}
//再定义一个构造函数。
function Son() {
  //添加age属性
  this.age = 18
}
//关键地方：把Son构造方法的原型替换成Father的对象。
Son.prototype = new Father()
//给Son的原型添加getMoney方法
Son.prototype.getMoney = function() {
  console.log('我是Son的原型中定义的方法')
}
//创建Son类型的对象
var son1 = new Son()
console.log(son1.age)
//发现不仅可以访问Son中定义属性和Son原型中定义的方法，也可以访问Father中定义的属性和Father原型中的方法。
//这样就通过继承完成了类型之间的继承。
// Son继承了Father中的属性和方法，当然还有Father原型中的属性和方法。
son1.giveMoney()
son1.getMoney()
console.log('Father定义的属性：' + son1.name)
console.log('Son中定义的属性：' + son1.age)
// console.log(age)
////
function Father(name, age) {
  this.name = name
  this.age = age
}
//这样直接调用，那么father中的this只的是 window。 因为其实这样调用的： window.father("李四", 20)
// name 和age 属性就添加到了window属性上
Father('李四', 20)
console.log('name:' + name + ' age:' + age)

//使用call方法调用，则可以改变this的指向
function Son(name, age, sex) {
  this.sex = sex
  //调用Father方法(看成普通方法)，第一个参数传入一个对象this，则this(Son类型的对象)就成为了Father中的this
  Father.call(this, name, age)
}
var son = new Son('张三', 30, '男')
console.log('name:' + son.name + ' age:' + son.age + ' sex:' + son.sex)
console.log(son instanceof Father) //false

function Car(name,color) {
  this.name = name
  this.color = color
  Car.prototype.run = function() {
    console.log('i can run')
  }
}

function Bwm(name,color) {
  Car.call(this,name,color)
  Bwm.prototype.run2 = function() {
    console.log('i can run faster')
  }
}

Bwm.prototype = Car.prototype

console.log(Bwm.prototype.constructor)

var bwm = new Bwm('宝马','蓝色')

console.log(bwm.name,bwm.color)
bwm.run()
