---
title: fetch与axios
date: 2020-12-12
categories:
 - 浏览器相关
tags: 
 - 网络请求
---

## fetch与axios

### 题意分析

fetch与axios的定位认识。fetch是浏览器提供的api，axios是社区封装的一个组件。

### **fetch**  

是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装。多年来，`XMLHttpRequest`一直是web开发者的亲密助手。无论是直接的，还是间接的， 当我们谈及Ajax技术的时候，通常意思就是基于`XMLHttpRequest`的Ajax，它是一种能够有效改进页面通信的技术。 Ajax的兴起是由于Google的Gmail所带动的，随后被广泛的应用到众多的Web产品（应用）中，可以认为， 开发者已经默认将`XMLHttpRequest`作为了当前Web应用与远程资源进行通信的基础。 而本文将要介绍的内容则是`XMLHttpRequest`的最新替代技术——[Fetch API](https://fetch.spec.whatwg.org/)， 它是W3C的正式标准，本文将会介绍Fetch API的相关知识，以及探讨它所能使用的场景和能解决的问题。

一、fetch优势：

1. 语法简洁，更加语义化

2. 基于标准 Promise 实现，支持 async/await 

3. 更加底层，提供的API丰富（request, response）

4. 脱离了XHR，是ES规范里新的实现方式

   

二、fetch存在问题
fetch是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装。

1. fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
2. fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
3. fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
4. fetch没有办法原生监测请求的进度，而XHR可以

```js
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
```





### **axios** 

是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：

1. 从浏览器中创建 XMLHttpRequest
2. 支持 Promise API
3. 客户端支持防止CSRF
4. 提供了一些并发请求的接口（重要，方便了很多的操作）
5. 从 node.js 创建 http 请求
6. 拦截请求和响应
7. 转换请求和响应数据
8. 取消请求
9. 自动转换JSON数据

```js
// axios举例
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



总结：axios既提供了并发的封装，也没有fetch的各种问题，而且体积也较小，当之无愧现在最应该选用的请求的方式。

### 明确考察点

1. fetch是规范底层api
2. axios是封装
3. fetch和axios的优缺点

### 回答思路

首先明确fetch和axios分别是个啥？然后阐述fetch和axios的优缺点

### 相关扩展

1. [axios的github仓库地址](https://github.com/axios/axios)
2. [axios的api文档说明](http://www.axios-js.com/zh-cn/docs/)
3. [fetch的api规范MDN社区说明](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
4. [w3c和whatwg](https://www.infoq.cn/article/bsvFxt96DOh-SBZphBwJ?utm_source=tuicool&utm_medium=referral)