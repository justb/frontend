let obj = {};
let song = '发如雪';
obj.singer = '周杰伦';
function Dep() {
    // 一个数组(存放函数的事件池)
    this.subs = [];
}
Dep.prototype = {
    addSub(sub) {
        this.subs.push(sub);    
    },
    notify(vm) {
        // 绑定的方法，都有一个update方法
        this.subs.forEach(sub => sub.update());
    }
};

function observe(obj) {
    let dep = new Dep();
    let data = obj
    for (key in data) {
        console.log(key)
        let value = data[key]
        if (typeof value !== 'object') {
            Object.defineProperty(data, key, {
                // 1. value: '七里香',
                configurable: true, // 2. 可以配置对象，删除属性
                // writable: true,         // 3. 可以修改对象
                enumerable: true, // 4. 可以枚举
                // ☆ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
                get() { // 5. 获取obj.music的时候就会调用get方法
                    // return song;
                    Dep.target && dep.addSub(Dep.target); // 将watcher添加到订阅事件中 [watcher]
                    return value
                },
                set(val) { // 6. 将修改的值重新赋给song
                    console.log(val)
                    value = val;
                    dep.notify();
                }
            });
        } else {
            observe(value)
        }

    }
    return obj
}


function complie(vm, element) {
    let el = document.querySelector(element)
    let fragment = document.createDocumentFragment();

    while (child = el.firstChild) {
        fragment.appendChild(child); // 此时将el中的内容放入内存中
    }
    // 对el里面的内容进行替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g; // 正则匹配{{}}

            if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
                console.log(RegExp.$1); // 匹配到的第一个分组 如： a.b, c
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(key => {
                    val = val[key]; // 如this.a.b
                });
                // 用trim方法去除一下首尾空格
                node.textContent = txt.replace(reg, val).trim();

                new Watcher(vm, RegExp.$1, newVal => {
                    console.log(node.textContent)
                    node.textContent = txt.replace(reg, newVal).trim();
                });
            }
            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }
    replace(fragment); // 替换内容

    el.appendChild(fragment); // 再将文档碎片放入el中
}

function Watcher(vm, exp, fn) {
    this.fn = fn;
    console.log(exp)
    this.vm = vm;
    this.exp = exp;
    // 添加一个事件
    // 这里我们先定义一个属性
    Dep.target = this;
    let arr = exp.split('.');
    let val = vm;
    arr.forEach(key => { // 取值
        val = val[key]; // 获取到this.a.b，默认就会调用get方法
    });
    Dep.target = null;
}

Watcher.prototype.update = function() {
    // notify的时候值已经更改了
    // 再通过vm, exp来获取新的值
   let arr = this.exp.split('.');
   let val = this.vm;
   arr.forEach(key => {    
       val = val[key];   // 通过get获取到新的值
   });
    this.fn(val);   // 将每次拿到的新值去替换{{}}的内容即可
};

new Watcher('','123123')