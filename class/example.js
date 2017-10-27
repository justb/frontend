class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

Object.assign(Point.prototype, {
    toString2() {},
    toValue() {}
})

var p = new Point(1, 2);

console.log(Object.getOwnPropertyNames(Point.prototype))

console.log(Object.keys(Point.prototype))


class Foo {
    constructor() {
        return Object.create(null);
    }
}



console.log(new Foo() instanceof Foo)

//定义类
class Point2 {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point2(2, 3);

point.toString() // (2, 3)

console.log(point.hasOwnProperty('x'), // true
    point.hasOwnProperty('y'), // true
    point.hasOwnProperty('toString'), // false
    point.__proto__.hasOwnProperty('toString')) // true)

class Logger {
    constructor() {
        // this.printName = this.printName.bind(this);

    }
    printName(name = 'there') {
        var that = this
        that.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const {
    printName
} = logger;
console.log(logger)
// class MyClass {
//   static myStaticProp = 42;

//   constructor() {
//     console.log(MyClass.myStaticProp); // 42
//   }
// }