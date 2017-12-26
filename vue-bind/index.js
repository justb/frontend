var a = { }

Object.defineProperty(a, 'key', {
  get() {
    console.log('get')
  },
  set: function(v) {
    console.log(v)
  }
})

a.key = 1
a.key = 2
console.log(a.key)

var b = [1,2,3,4]
var c=Object.keys(b)
Object.defineProperty(b, '1', {
    get() {
      console.log('get')
    },
    set: function(v) {
      console.log(v)
    }
  })
console.log(c)
console.log(b[1])

var d = Object.assign({},b)
for(let i in d){
    console.log(i)
}

// var f = Object.create(b,{a:1})
// console.log(f)

// Shape - superclass
function Shape() {
  this.x = -1;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.'+this.x+this.y);
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}
console.log(Shape.prototype)
// subclass extends superclass

// Rectangle = Object.create(Shape);
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

function aa(){

}
console.log(aa.constructor)
var bb = new aa()