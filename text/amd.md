# AMD组件开发

<fengweifeng@baidu.com>

******************************************************
## 概述

* 安装git、nodejs、npm和简单介绍
* GitHub使用
* 开发前准备
* 开发一个组件
* 提交代码
* 线上配置
* nodejs调试代码

******************************************************

## 安装git、nodejs、npm

安装后查看以下命令确认：

    git -v
    node -v
    npm -v

因为“墙”，你可能需要设置代理：

    git config --global http.proxy http://172.19.1.2:9217
    git config --global https.proxy http://172.19.1.2:9217
    git config --global http.sslverify false

    npm config set proxy=http://172.19.1.2:9217


******************************************************

## git

### 优点

* 分布式（与svn对比）
* 分支切换更轻松
* github支持，fork、pull request

### 常用命令

    git clone git@github.com:ecomfe/moye.git
    git checkout ps
    git add file
    git commit -am "comment"
    git push origin ps

[推荐教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

******************************************************

## nodejs、npm

* nodejs 基于chrome js引擎、事件驱动、非阻塞I/O
* npm Node Packaged Modules

链接：

<http://nodejs.org/>

<https://www.npmjs.org/>


******************************************************

## GitHub 使用

1. <https://github.com/> 注册账号
2. 联系我加入组 <https://github.com/psfe>
3. 配置SSH Keys
4. fork项目 <https://github.com/ecomfe/moye>
5. 开发、提交代码
6. Pull Request
7. Release
8. 上线到www

习惯用命令行，推荐使用安装[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) 并启用git插件。

gui，可以使用`git gui citool`,简单够用。

******************************************************

## 开发前准备(1)

### 规范

* AMD[模块、加载器规范](https://github.com/ecomfe/spec/blob/master/module.md)、[目录规范](https://github.com/ecomfe/spec/blob/master/package.md)
* [js编码规范](https://github.com/ecomfe/spec/blob/master/javascript-code-style.md)
* [less编码规范](https://github.com/ecomfe/spec/blob/master/less-code-style.md)

### 工具

* [Less](http://lesscss.org/)
* [Less Lint](http://kevinsawicki.github.io/grunt-lesslint/)
* [CSS Lint](https://github.com/CSSLint/csslint)
* [JSLint](http://jslint.com/)
* [JSDoc](http://usejsdoc.org/)
* [Grunt](http://gruntjs.com/)
* [Jasmine](http://jasmine.github.io/)

******************************************************

## 开发前准备(2)

### 框架

www结果页已经包含的：

* [ESL](https://github.com/ecomfe/esl) 符合amd的加载器
* [jQuery](http://jquery.com/)

参考：

* [RequireJS](http://www.requirejs.org/) 业界最出名的amd加载器

******************************************************

## 开发前准备(3)

### npm基本使用

* npm init
* package.json
* npm install xxx --save/--save-dev
* npm help
* npm docs xxx

### 常用目录名 

* lib 类一般都放着
* bin 可执行代码目录
* man man文档
* doc markdown语法的文档
* example 示例

使用单数、常用缩写（src、img、html、css、swf、dep）

******************************************************

## 开发前准备(4)

### 准备代码

    git clone git@github.com:ecomfe/moye.git
    cd moye
    git checkout ps
    sudo npm install
    grunt --help
    grunt test-online

### 代码结构

    ├── CHANGELOG.md  
    ├── Gruntfile.js
    ├── README.md
    ├── SpecRunner.html
    ├── package.json
    ├── src
    │   ├── css
    │   └── ui
    ├── example
    │   ├── Calendar.html
    │   ├── CalendarExtension.html
    │   ├── ...
    ├── node_modules
    │   ├── grunt
    │   ├── grunt-contrib-clean
    │   ├── ...
    └── test
        ├── config.js
        ├── main.js
        ├── spec
        └── template

******************************************************
## 开发前准备(5)

### 配置编辑器

.editorconfig

    root = true

    [*]
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_style = space
    indent_size = 4

    [*.md]
    trim_trailing_whitespace = false


<http://editorconfig.org/>


******************************************************

## 开发一个组件(1)

### 开发代码

增加一个组件，一般需要增加如下文件：

    src/ui/Foo.js        组件js
    src/css/Foo.less     组件样式
    example/Foo.html     示例
    test/spec/FooSpec.js 单测

Foo.js:

    define(function (require) {
        // code ...
    });

Foo.less:

    @import "./config.less";
    @foo-prefix: e(%('%s-foo', @ui-prefix));

    .@{foo-prefix} xxx {
    }


******************************************************

## 开发一个组件(2)

Foo.html:

    (function () {

        require.config({
            baseUrl: '../src/moye/ui'
        });

        require(['lib', 'Foo'], function(lib, Foo){
            //示例代码
        });

    });

FooSpec.js

    define(function (require) {
        var config = require('ui/config');
        var Foo = require('ui/Foo');

        describe('测试基本接口', function(){
            it('显示和隐藏', function(){
                var isHidden = false;
                //...
                expect(isHidden).toBeTruthy();
            });
        });
    }):


******************************************************

## 开发一个组件(3)

### 运行单测

    grunt test

### 单测覆盖率

    grunt cover

单测覆盖率要求在70%以上。

### 编译上线

    grunt test-online


******************************************************

## 提交代码

    git status -s
    git commit -am 'xxx'
    git push origin master

提交到自己的项目后，发起`Pull Request`。


******************************************************

## 线上配置

### require.config

    require.config({
        'baseUrl' : 'http://s1.bdstatic.com/r/www/cache/biz',
        'paths': {
            'ui/lib': 'ui/Control',
            'ui/config': 'ui/Control'
        }
    });

### 解释

* lib、config、Control三个模块打包成一个，减少http请求
* 单个模块的css、js打包成一个js文件
* js、css使用`uglify2`压缩，减少体积

******************************************************

## nodejs代码调试

### node自带

    node debug script.js

### node-inspector

    npm install node-inspector
    node-debug script.js

******************************************************
## 相关链接

<https://travis-ci.org/ecomfe/moye>




******************************************************
再见
====

