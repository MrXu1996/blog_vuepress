---
title: 对async、await的理解
date: 2020-12-16
categories:
 - Javascript
tags: 
 - JS
---

## 对async、await的理解，内部原理

### 1.1 问题分析

​		考察 地狱回调  Promise  async 与await

### 1. 2 核心问题讲解-有代码

`async`函数返回一个 Promise 对象，可以使用`then`方法添加回调函数。当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

[阮老师文档](http://es6.ruanyifeng.com/#docs/async)

### 1.3 问题扩展

**内部原理**

async 函数是什么？一句话，它就是 Generator 函数的语法糖。

Generator 函数可以返回一系列的值，因为可以有任意多个yield。

```
 	  const fs = require('fs');

      const readFile = function (fileName) {
        return new Promise(function (resolve, reject) {
          fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
          });
        });
      };

      const gen = function* () {
        const f1 = yield readFile('/etc/fstab');
        const f2 = yield readFile('/etc/shells');
        console.log(f1.toString());
        console.log(f2.toString());
      };
      改造

      const asyncReadFile = async function () {
      const f1 = await readFile('/etc/fstab');
      const f2 = await readFile('/etc/shells');
      console.log(f1.toString());
      console.log(f2.toString());
    };
```

### 1.4  结合项目中使用

 axios 请求 配合 async await  拿到数据