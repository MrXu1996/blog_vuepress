---
title: 页面刷新了之后vuex中的数据消失怎么解决
date: 2020-12-26
categories:
 - VUE
tags: 
 - vue基础
---

## 页面刷新了之后vuex中的数据消失怎么解决

分析:此题考查 如果将vuex数据进行本地持久化

**`解析`**: vuex数据位于内存, 页面的刷新重置会导致数据的**`归零`**,也就是所谓的消失,  本地持久化可以解决这个问题.本地持久化用到的技术也就是 本次存储 sesstionStorage 或者 localStorage ,  

如果需要保持的更长久 ,浏览器关掉 再打开依然存有数据,需要使用后者 

实施方案:  state的持久化 也就是分别需要在 state数据初始化 /更新 的时候 进行读取和设置本地存储操作

代码如下 

```js
export default new Vuex.store({
state: {
   user: localStorge.getItem('user')  // 初始化时读取 本地存储
},
mutations: {
   updateUser (state, payload) {
       state.user = payload.user
       localStoregae.setItem('user',payload.user) // 数据更新时 设置本地存储
   }
}
})
```

