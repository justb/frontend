//Object.is
console.log(+0 === -0 //true
,NaN === NaN // false
,Object.is(+0, -0) // false
,Object.is(NaN, NaN) )// true)

//Object.assign 合并对象
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target) // {a:1, b:2, c:3}

var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
console.log(Object.values(obj) ); // { "0": "a", "1": "b", "2": "c" }

var obj = { foo: 123 };

//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))