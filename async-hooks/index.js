const async_hooks = require('async_hooks');
const fs = require('fs');
const util = require('util');

class MyAsyncCallbacks {
    init(asyncId, type, triggerAsyncId, resource) {}
    destroy(asyncId) {}
}

class MyAddedCallbacks extends MyAsyncCallbacks {
    before(asyncId) {}
    after(asyncId) {}
}

// const asyncHook = async_hooks.createHook(new MyAddedCallbacks());


// const hook = async_hooks.createHook(new Promise(resolve => {
//     setTimeout(() => {
//         resolve()
//     }, 1000);
// })).enable();


var fd=fs.openSync('./async-hooks/log','w')

const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        fs.writeSync(fd, `init: asyncId-${asyncId},type-${type},triggerAsyncId-${triggerAsyncId}\n`);
    },
    before(asyncId) {
        fs.writeSync(fd, `before: asyncId-${asyncId}\n`);
    },
    after(asyncId) {
        fs.writeSync(fd, `after: asyncId-${asyncId}\n`);
    },
    destroy(asyncId) {
        fs.writeSync(fd, `destroy: asyncId-${asyncId}\n`);
    }
});

hook.enable();
// setTimeout(() => {
//     console.log('hello');
// }, 0);

var obj = {};  
// console.log(obj);  
obj.foo = 'bar';  
fs.writeSync(fd, obj);


// console.log(async_hooks.executionAsyncId())

// require('net').createServer(() => {}).listen(8080, () => {
//   // Let's wait 10ms before logging the server started.
//   setTimeout(() => {
//     console.log('>>>', async_hooks.executionAsyncId());
//   }, 10);
// });