---
title: 理解Promise
date: 2021-01-01
categories:
 - Javascript
tags: 
 - ES6
---

## 理解promise

**【问题分析】**

怎么理解 promise ？ 写出指定代码的输出内容？



**【答题思路】**

关于 promise 通常会有三种题型。第一种就是问概念；第二种就是 给一段代码让说出他的输出；第三种 就是让你自己实现一个 promise ，来考察你对 promise 的理解和编程能力。（第三种一般是针对中高级的程序员）

本节我们先回顾一下 promise的概念，然后一起来做两个题。

### 1.promise 概念

**promise 定义**A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred)

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

https://promisesaplus.com/implementations



### 2.promise 题目1

```js
数字打印的顺序
const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });
 
}));
 
first().then((arg) => {
    console.log(arg);
});
console.log(4);


//1.同步的代码（最高）
//3
//7
//4

//2. 微任务的异步代码（次高，then）

//1
//2


//3. 宏任务的异步代码（最低，setTimeout）
//5

//6 不执行
```



### 3.promise 题目2（理解 then 的第二回调函数和 catch）

```js
// 画出以下异步函数执行的可能的路线。
// https://developers.google.com/web/fundamentals/primers/promises
// 蓝线表示执行的 promise 路径，红路表示拒绝的 promise 路径。
// https://developers.google.com/web/fundamentals/primers/imgs/promise-flow.svg
asyncThing1()
  .then(function() {
    return asyncThing2();
  })
  .then(function() {
    return asyncThing3();
  })
  .catch(function(err) {
    return asyncRecovery1();
  })
  .then(
    function() {
      return asyncThing4();
    },
    function(err) {
      return asyncRecovery2();
    }
  )
  .catch(function(err) {
    console.log("Don't worry about it");
  })
  .then(function() {
    console.log("All done!");
  });
```



![image-20200215153639230](https://tva1.sinaimg.cn/large/0082zybpgy1gbx4j86yaaj30oi0mdwn1.jpg)



## promise 实践

**【问题分析】**

如何把大象🐘放到冰箱里？



**【答题思路】**

开门/装大象/关门 都是异步的操作。

通过本题加强对 promise 的理解，理解 promise 解决的核心问题是什么。

```js
/////////////////方法1  callback//////////////////
//1. 准备函数 openDoor putIn closeDoor done
//2. 执行函数

console.time()

const openDoor=(cb)=>{
  setTimeout(cb,1000)
}
const putIn=(cb)=>{
  setTimeout(cb,3*1000)
}
const closeDoor=(cb)=>{
  setTimeout(cb,1000)
}
const done=()=>{
   console.timeEnd();
  console.log('done');
}


openDoor(()=> putIn(()=> closeDoor(done)  ));


//////
//const openDoor = cb => {
//   setTimeout(cb, 1000);
// };

// const promise = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, 1000);
//   });
// };

/////////////////vs/////////////////////
/////////////////方法1  promise//////////////////
//1. 准备promise函数 openDoor putIn closeDoor done
//2. 执行函数

console.time()

const openDoor=()=>new Promise(res=>{
  setTimeout(res,1000)
})
const putIn=()=>new Promise(res=>{
  setTimeout(res,1000*3)
})
const closeDoor=()=>new Promise(res=>{
  setTimeout(res,1000)
})
const done=()=>new Promise(res=>{
      console.timeEnd();
  console.log('done2');
  res();
})


openDoor()
  .then(putIn)
  .then(closeDoor)
  .then(done)

```



## 如何实现链式调用

**【问题分析】**

类似 `b.then().then().then()` 的链式调用是如何实现的？



**【答题思路】**

因为要不断的调用，所以一定是返回自己，或者返回一个 和自己类似的结构。

后续实现 Promise 的时候，会用得上！



面试就心里强大一点就行；出给我的题 面试官如果不知提前知道答案也  可能答不出来

```js
  
class Test1{

  then(){
    console.log(6666);
    return this;
  }
}

var a= new Test1();
a.then().then().then()

class Test2{
  then(){
    console.log(77777);
    return new Test2();
  }
}

var b= new Test2();
b.then().then().then()
```



## promise 单元测试

### 1.准备测试框架

 参考[jest](https://jestjs.io/docs/en/getting-started) 官网

```shell
# 1.初始化项目
npm init

# 2.安装 jest
yarn add --dev jest
#npm install --save-dev jest

# 3. 支持 es2015+ 和 ts
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest


# 4. 添加 文件 babel.config.js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
     '@babel/preset-typescript',
  ],
};

# 5.配置命令
    "test": "jest",
    "test:watch": "jest --watchAll"
```



### 2.为了检查 Promise 实现的正确性，我们提前准备好单元测试

```js
  
import MyPromise from "./index";

// 1
test("1.promise 参数函数会立即执行", function() {
  var string;

  new MyPromise(function() {
    string = "foo";
  });

  expect(string).toBe("foo");

},500);


it("2. promise 在 then 的回调函数中可以拿到 resolve 的数据。", function(done) {
  var testString = "foo";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve(testString);
    }, 20);
  });

  promise.then(function(string) {
    expect(string).toBe(testString);
    done();
  });
},500);

// 3
it("promise 可以有多个 then，并且会依次执行", function(done) {
  var testString = "foo";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve(testString);
    }, 20);
  });

  promise.then(function(string) {
    expect(string).toBe(testString);
  });

  promise.then(function(string) {
    expect(string).toBe(testString);
    done();
  });
},500);


it("4.promise 可以嵌套多个 then，then的回调中可以返回 promise ", function(done) {
  var testString = "foo";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, 20);
  });

  promise
    .then(function() {
      return new MyPromise(function(resolve) {
        setTimeout(function() {
          resolve(testString);
        }, 20);
      });
    })
    .then(function(string) {
      expect(string).toBe(testString);
      done();
    });
},500);

// 5
it("5.promise 可以嵌套多个 then，then的回调中可以返回 一个普通值", function(done) {
  var testString = "foo";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, 20);
  });

  promise
    .then(function() {
      return testString;
    })
    .then(function(string) {
      expect(string).toBe(testString);
      done();
    });
},500);

// 6
it("6.resolved 状态的promise ，如果调用 then 方法会立即执行", function(done) {
  var testString = "foo";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve(testString);
    }, 20);
  });

  setTimeout(function() {
    promise.then(function(value) {
      expect(value).toBe(testString);
      done();
    });
  }, 200);

},500);


it("7. 二次调用 resolve 不会产生影响。", function(done) {
  var testString = "foo";
  var testString2 = "bar";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve(testString);
      resolve(testString2);
    }, 20);
  });

  promise.then(function(value) {
    expect(value).toBe(testString);
  });

  setTimeout(function() {
    promise.then(function(value) {
      expect(value).toBe(testString);
      done();
    });
  }, 50);

},500);
```



## promise 源码

**【问题分析】**

如何实现一个 Promise ？



**【答题思路】**

promise 是一个对象，一般是通过 new Promise （）来实例化的；所以这里我要实现 Promise 类！

promise 的 then 是可以链式调用的，所以可能会用到上面提到的，链式调用的实现。

根据逐个单元测试的要求来实现 Promise

主要实现 Promise 的构造方法和 then 方法； 后面会以链接的方式给出完整的实现。

**【解题代码】**

```ts
const State = {
  pending: "pending",
  resolved: "rejected",
  rejected: "rejected"
};

const noop = () => {};

class MyPromise {
  constructor(exclutor) {
    exclutor(this._resolve.bind(this), this._reject);
  }
  _state = State.pending;
  _value;
  _resolve(val) {
    if (this._state === State.pending) {
      this._value = val;
      this._state = State.resolved;

      this._runResolveArray();
    }
  }
  _reject() {}
  _runResolveArray() {
    //执行 then 传入进来的 onRes
    this._resArray.forEach(item => {
      // const item
      const result = item.handle(this._value);
      const nextPromise = item.promise;

      if (result instanceof MyPromise) {
        result.then(val => item.promise._resolve(val));
      } else {
        item.promise._resolve(result);
      }
    });
  }

  _resArray = [];

  then(onRes, onRej = noop) {
    // if (this._state === State.pending) {
    const newPromise = new MyPromise(() => {});
    const item = { promise: newPromise, handle: onRes };
    this._resArray.push(item);

    // }
    if (this._state === State.resolved) {
      this._runResolveArray();
    }
    return newPromise;
  }
}

export default MyPromise;


```



【问题延伸】

几种Promise 的实现

https://github.com/ericyang89/my-promise

https://github.com/vividbytes/implementing-promises

https://github.com/iam91/zpromise/blob/master/src/zpromise.js

