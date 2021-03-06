---
title: Vue中的watch
date: 2020-12-24
categories:
 - VUE
tags: 
 - vue基础
---

## Vue中的watch如何深度监听某个对象

> 分析: 此题考查Vue的选项watch的应用方式
>
> 解析:  watch最基本的用法是 
>
> ```js
> export default {
>  data () {
>      return {
>          name: '张三'
>      }
>  },
>  watch: {
>      name (newValue, oldValue) {
> 
>      }
>  }
> }
> ```
>
> 上面代码中: 有个原则监听谁,写谁的名字,然后是对应的执行函数, 第一个参数为最新的改变值,第二个值为上一次改变的值, 注意: 除了监听 data,也可以监听**`计算属性`** 或者一个 函数的计算结果
>
> 那怎么深度监听对象 ,两种方式
>
> 1. 字符串嵌套方式
>
> ```js
> export default {
>     data () {
>         return {
>            a: {
>                b: {
>                    c :'张三'
>                }
>            }
>         }
>     },
>     watch: {
>         "a.b.c": function (newValue, oldValue) {
> 
>         }
>     }
> }
> ```
>
> 2. 启用深度监听方式
>
>    ```js
>    export default {
>        data () {
>            return {
>               a: {
>                   b: {
>                       c :'张三'
>                   }
>               }
>            }
>        },
>        watch: {
>            a: {
>                deep: true // deep 为true  意味着开启了深度监听 a对象里面任何数据变化都会触发handler函数,
>                handler(){
>                   // handler是一个固定写法
>                }
>            }
>        }
>    }
>    ```

## 