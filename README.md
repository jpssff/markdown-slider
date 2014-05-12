markdown-slider
===============

使用Markdown语法写一个漂亮的演示文稿


## 使用方式

首先，将代码clone到本地：

    git clone https://github.com/jpssff/markdown-slider.git
  
安装依赖：
  
    cd markdown-slider
    npm install
  
使用`markdown`语法编写你的文档，并保存到`text`目录中，后缀名为`.md`，参考文件`text/amd.text`。

写完后，运行： 

    grunt
   
大功告成，看下演示效果吧：

    open slide/amd.html
  
或者点到目录中，使用浏览器打开对应的页面。


## api

    require(['slider'], function(slider){
        slider.init('markdown text', domElement);
    });
