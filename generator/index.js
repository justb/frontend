function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next())

function* gen() {
    yield 123 + 456;
}
console.log(gen().next())

function* demo() {

    console.log('Hello' + (yield gen().next(true))); // OK
    console.log('Hello' + (yield 123)); // OK
}

// console.log(demo().next())
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (let v of foo()) {
    console.log(v);
}

const g = function*(x, y) {
    let result = yield x + y;
    return result;
};

const genc = g(1, 2);
console.log(genc.next(2, 3)); // Object {value: 3, done: false}

console.log(genc.next(1)); // Object {value: 1, done: true}

console.log(genc.next(1));