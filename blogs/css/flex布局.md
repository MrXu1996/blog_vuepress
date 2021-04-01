---
title: flex布局
date: 2020-12-18
categories:
 - CSS
tags: 
 布局
---

## flex布局

### 1.1 问题分析

flex布局考察

### 1.2 核心问题讲解

flex相关属性  记住常用的就行



### 1.3 问题扩展

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

**flex-grow ：**flex-grow属性定义盒子的**放大**比例，默认为0 不放大  其他数字按比例放大

**flex-shrink：**如果所有项目的flex-shrink属性都为1，当空间不足时，都将**等比例缩小**。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者**0的不缩小 其他缩小**

**flex-basis**属性定义了在分配多余空间之前，项目占据的主轴空间（main size）提前写的宽高大小。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。可以写px

.item{

​	flex:none|[<'flex-grow'><'flex-shrink'>?||<'flex-basis'>]

 }

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### 1.4  结合项目中使用

 ![img](./img/flex.png)

 盒子 高 125px

图片 35px