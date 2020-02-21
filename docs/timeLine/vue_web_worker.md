---
title: Vue Web Worker Through worker-loader
date: 2019-11-24
categories: 
 - Vue.js
 - webpack
 - web worker 
 
tags:
 - Vue.js 
 - web worker
---

# Vue Worker Through Worker-loader

前言： 曾经尝试使用Vue-worker, 但在使用过程中发现func里面需要调用其他function的时候就不行了， 不知道怎么写进去，因为时间关系就没有继续研究下去。因此还是使用work loader 实现 web loader

安装worker-loader

npm i worker-loader -S

## 配置vue.config.js

在配置文件加上以下代码

```
//vue.config.js
    config.module
      .rule('worker')
      .test(/\.worker.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .options({ inline: true, name: 'workerName.[hash].js' })
      .end()
```


## 写worker 代码， 文件名为xxxx.worker.js
```
//test.worker.js
self.onmessage = ev => {
  const funName = ev.data.method
  if (self[funName]) {
    console.log('ev.data.params---->', ev.data)
    self[funName](ev.data.params)
  } else {
    console.warn(`方法${funName}未定义`)
  }
}

self.testFunc = function(params) {
  const {x,y} = params
  console.log(`x--->${x}, y--->${y}`)
}
```

## 使用worker

在需要调用 worker的component写下如下代码

```
// test.vue
import TestWorker from '@/worker/s.worker.js'
<script>
mounted(){
  this.worker = new TestWorker()
  this.worker.postMessage({method:'testFunc',params:{x:1,y:2}})
}
</script>

```

## 注意事项
worker.js的内容会被cache 起来，因此修改了xxx.worker.js重启都不能让修改的内容生效，暂时有两个方法可以暂时解决：
1. 可以通过删除 node_packages/.cache里面的内容清除cache,重启服务
2. 修改xxxx.worker.js的文件名
   

# Ref: 
* https://developer.mozilla.org/zh-CN/docs/Web/API/Worker
  
