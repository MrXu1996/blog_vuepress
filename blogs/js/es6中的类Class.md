---
title: es6的类Class
date: 2020-12-15
categories:
 - Javascript
tags: 
 - JS
---

​	es相关语法  let const等。。

 ```js
// function Person (){
    //   this.name='建林'
    //   this.age=18
    //   this.say=function(){
    //     console.log('say方法')
    //   }
    // }

    class Person {
        constructor(){
           this.name='建林'
           this.age=18
        }

        say() {
          console.log('say方法')
        }
    }

    class Teacher extends Person {
        constructor(){
            super();// 继承必须写super 他就是父类 上面的那个 constructor
           
            this.name='思聪'
        }

        eat(){
          console.log('eat')
        }

    }

    let t1=new Teacher()
    console.log(t1)
 ```

### 