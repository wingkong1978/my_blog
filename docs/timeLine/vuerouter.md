---
title: Vue Router Uncaught in Promise  
date: 2019-10-23
tags:
- vue 
---

# Vue Router issue Uncaught (in Promise)
对Router原型链上的push、replace方法进行重写，这样就不用每次调用方法都要加上catch。

```
import Router from 'vue-router'
 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
```


