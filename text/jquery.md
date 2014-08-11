# jQuery实践

fengweifeng@baidu.com

*************************
## 大纲

* 简介
* jQuery精华
* 最佳实践
* 模板应用
* 新奇
* 扩展阅读

*************************
## 简介

* [介绍](http://jquery.com/)
* 相关
  * [api](http://api.jquery.com/)
  * [插件](http://plugins.jquery.com/)
  * [jQuery UI](http://jqueryui.com/)
  * [Sizzle](http://sizzlejs.com/)
  * [qUnit](http://qunitjs.com/)
  * [jQuery Mobile](http://jquerymobile.com/)
* 最新版本: v1.11.1 / v2.1.1

*************************
## jQuery精华

* 集合操作
* 链式调用(选择器, dom操作, Deferred)
* set/get接口合并, 多种参数组合
* get fisrt, set all
* dom ready

*************************
## 最佳实践

* 高效选择器
* 缓存对象
* dom ready后操作
* 不要混用jQuery和原生dom对象
  * 一个函数中只用一种类型
  * jQuery对象命名推荐`$`开头
* [代码组织](http://learn.jquery.com/code-organization/)
  * 封装
  * 避免重复
  * dom处理和逻辑处理分离(MVC)

*************************
## 模板应用

* A.setup中使用jQuery
* 事件命名空间, 代理
* 使用$.extend
* 插件
  * 保持链式
  * 闭包, 并把$作为jQuery别名
  * 接口风格和jQuery代码一致
  * 使用$.each和实例each方法处理合集
  * 使用$.extend处理参数, 并保留最佳默认值
  * 高性能

*************************
## 新奇

* 动画用`.animate()`方法
* 使用`$.Deferred`完成异步和任务队列
* 使用`$.Callbacks()`管理事件
* 使用`.addBack()`减少代码
* 使用`:xxx`选择器
* 扩展选择器`$.extend($.expr[':'], {})`
* 扩展jQuery方法, 实例方法

*************************
## 扩展阅读

* [Advanced Plugin Concepts](http://learn.jquery.com/plugins/advanced-plugin-concepts/)
* [Performance](http://learn.jquery.com/performance/)
* [Style Guide](http://learn.jquery.com/style-guide/)
