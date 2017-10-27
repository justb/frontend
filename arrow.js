let [a, b, c] = [1, 2, 3];
// console.log(a);

let [foo, [[bar], baz]] = [1, [[2], 3]];


let [ , , third] = ["foo", "bar", "baz"];

let [m, , n] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];

let [x, y, ...z] = ['a'];

let A=[1,2,3,undefined];

function log(x, y = 'World') {
  console.log(x, y);
}

function fetch(url, { method = 'GET' } = {}) {
  console.log(method);
}

fetch('http://example.com')