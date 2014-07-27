# Vim使用入门

*************************
## 大纲

* 基本操作: `vimtutor`
* 打开文件
* 基本配置
* 常用编辑命令
* 插件安装
* 常用插件
* 扩展阅读

*************************
## 基本操作

30分钟完成`vimtutor`教程, 熟练基本操作.

重点强调几个映射:

* `gg`
* `G`
* `<C-O>` `<C-I>`
* `%`
* `u` `<C-R>`
* `:help xxx` `:h xxx`

*************************
## 打开文件

* `<C-O>` `<C-I>` `:ju` 打开最近编辑的文件
* `:ls` `:bXXX` `<C-6>` 切换文件
* `:Ex path` `:e path` 内置文件浏览插件
* `gf` 光标处文件跳转
* `:vimgrep` `:vim` 搜索

*************************
## 基本配置

* `~/.vimrc` `~/.vim`
* 基本配置内容
        
        sy on
        set hls
        set helplang=cn
        set backspace=indent,eol,start
        "内码使用utf8，优先以utf8尝试解码
        set encoding=utf8
        set fencs=utf8,cp936
        set termencoding=utf-8
        "通用的一些样式
        set laststatus=2
        set statusline=%F\ [%{&fenc}\ %{&ff}\ L%l/%L\ C%c]\ %=%{strftime('%Y-%m-%d\ %H:%M')}
        "设置viminfo
        set viminfo='50,<1000,s100,:100,n~/.viminfo
        "缩进使用的空白数
        set shiftwidth=4
        "文件中的tab代表的空格数
        set tabstop=4
        "插入tab时使用合适数量的空格
        set expandtab
        "开启新行时使用智能自动缩进
        set autoindent
        set smartindent
        set foldmethod=marker
        set number
        "set cursorline
        "下面这句是为了让较长的行显示
        set display=lastline
        "较长的行可以行中上下移动
        map <down> gj
        map <up> gk

*************************
## 常用编辑命令

* `C` `S` `D` `o` `O` 仅次于`hjkl`的映射
* `:h text-objects` 一个理由让你选择vim而非其他编辑器
* `m{a-zA-Z}` 书签
* `<C-X><C-O>` `<C-N>` `:h usr_24.tx` 快速补全
* `=` 缩进

*************************
## 插件安装

* `:h vimfiles` 一般去[vim.org](http://www.vim.org/)搜索并放到相应目录
* `bundler.vim` 推荐使用
* 演示安装`matchit`插件

*************************
## 常用插件

    Plugin 'gmarik/vundle' "插件管理
    Plugin 'plasticboy/vim-markdown' 
    Plugin 'The-NERD-Commenter' "代码注释
    Plugin 'snipMate' "代码片段管理
    Plugin 'editorconfig-vim'
    Plugin 'junegunn/vim-easy-align' "代码对齐
    Plugin 'tpope/vim-fugitive' "Git包装
    Plugin 'pangloss/vim-javascript' "javascript缩进等
    Plugin 'matchit.zip' "扩展%能力
    Plugin 'tomasr/molokai' "主题
    Plugin 'SingleCompile' "单文件编译
    Plugin 'PDV--phpDocumentor-for-Vim' "快速生成php注释
    Plugin 'mattn/emmet-vim' "zen-coding
    Plugin 'taglist.vim' 
    Plugin 'The-NERD-tree' "文件管理
    Plugin 'L9' 
    Plugin 'FuzzyFinder' "强大的文件搜索

*************************
## 扩展阅读

* `:help`
* [vim.org](http://www.vim.org/)
* [Vim Tip Wiki](http://vim.wikia.com/wiki/Vim_Tips_Wiki)
* [Vim Awesome](http://vimawesome.com/)
* [vim-bundler](https://github.com/tpope/vim-bundler)

