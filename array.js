//扩展运算符
console.log(Math.max.apply(null, [14, 3, 77]))
console.log(...[1, 2, 3,4,5,5])
// console.log([...['a', 'b'].values()])
console.log([...'hello'])
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.values()]; // [1, 2, 3]
console.log(arr)

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = Array.prototype.slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1)

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

//Array.from 将类似数组的对象转化成数组
//Array.of 将数值转化为数组

for (let elem of ['a', 'b'].keys()) {
  console.log(['a', 'b'][elem]);
}