---
title: vue-router传参
date: 2020-12-28
categories:
 - VUE
tags: 
 - vue基础
---

## vue-router传参

> 分析:考查vue-router的传值方式
>
> **`解析`**  vue-router 传值 可以通过 地址传值
>
> 最简单的就是url传值, url传值又两种, params 和 query参数传值
>
> params传值 是指的动态路由传值 
>
> ```vue
> {  path: '/user/:id' }  // 定义一个路由参数
> <router-link to="/user/123"></router-link>  // 传值
> this.$route.params.id   // 取值
> 
> ```
>
> query传值,指通过?后面的拼接参数传值
>
> ```vue
> <router-link to="/user?id=123"></router-link>  // 传值
> this.$route.query.id   // 取值
> ```

