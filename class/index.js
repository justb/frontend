var name = '2'
const myclass = class {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let my = new myclass('111')
console.log(my.getName())

class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger()
const { print } = logger
console.log(print)
// printName() // TypeError: Cannot read property 'print' of undefined

class BlueLogger extends Logger{
    constructor(a) {
        super(a)
    }
}

new BlueLogger().print(123)