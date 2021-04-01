---
title: api请求模块封装
date: 2021-01-02
categories:
 - Javascript
tags: 
 - ES6
---

## api请求模块封装

**【题目分析】**

你项目中的网络/api 请求模块是如何封装的？

**【答题思路】**

1. 接口请求一般是异步的，可以返回 promise 更加清晰。
2. 网络请求url 的公共部分可以单独配置到 网络请求内部。
3. 针对所有的接口可以进行统一的处理。这也是面向切面编程的一个实践。
4. 可以借助第三方库 axios 快速的封装 网络请求模块。

**【解题步骤｜代码】**

```ts
import axios from "axios";
import constant from "../constant";
import reactNavigationHelper from "./reactNavigationHelper";
import commonToast from "./commonToast";

//配置请求url 的公共部分及超时时间
const commonHttp = axios.create({
  baseURL: constant.baseUri,
  timeout: 10 * 1000
});

commonHttp.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    //针对所有接口统一处理登录过期的问题
    if (error.response.status === 401) {
      commonToast.show("登录过期");
      reactNavigationHelper.navigate("Login");
    }
    return Promise.reject(error);
  }
);

export default commonHttp;
```

