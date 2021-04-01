---
title: cookie
date: 2020-12-19
categories:
 - 浏览器相关
tags: 
 - 网络请求
---

## cookie

### 1.1 问题分析

locastorage  sessionstorage  我们学过存 token

​     考察 cookie存储

​	cookie放哪里，cookie能做的事情和存在的价值

### 1.2 核心问题讲解

cookie： cookie机制 客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。



cookie 做什么? 一般用来存储数据  比如 用户的登录状态  不过现在经常用token 和localStorage了

**HTTP协议本身是无状态的**。什么是无状态呢，即服务器无法判断用户身份。Cookie实际上是一小段的文本信息（key-value格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。**服务器检查该Cookie，以此来辨认用户等状态**。

### 1.3 问题扩展

前端可以直接操作cookie的

设置  document.cookie='key=value'

获取 document.cookie

```
function Setcookie (name, value)
 
{ 
 
    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";
 
   //即document.cookie= name+"="+value+";path=/";   时间可以不要，但路径(path)必须要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！~
```

网站怎么优化？1 精灵图 2 懒加载 3 减少http请求....  一定要答 一下 缓存

浏览器有缓存  现在h5 的manifest  也可以存一下 优化网站