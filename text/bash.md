# Bash Shell 基础

<fengweifeng@baidu.com>

*************************
## 大纲

* 开始
* 命令
* 变量
* 复合命令
* Shell扩展
* 标准输入/输出/错误
* 常用命令
* sed, awk
* 扩展阅读

*************************

## 开始

* `~/.bash_profile` `~/.bash_logout` `~/.bashrc`
* `$PATH`
* `which`

### 获取帮助

* `xxx --help`
* `man xxx` 
* `info xxx` 
* `man bash` `man info`

*************************

## 命令

* `名称 参数`
* `[time] 命令1 [| 命令2 ..]`
* 返回值 `0`正确 `其他`错误
* `0`是true, `其他`false

*************************
## 变量1

    x="f e n    g" (=号两边没有空白,为什么?)
    echo $x
    echo "$x"
    echo '$x'
    echo \$x
    echo "\$x"
    echo '\$x'

*************************
## 变量2
    
    x="weifeng"
    echo ${x}
    echo ${#x}
    echo ${x##*e}
    echo ${x#*e}
    echo ${x%%e*}
    echo ${x%e*}
    echo ${x:3}
    echo ${x:3:2}
    echo ${x/wei/i am wei}

*************************
## 复合命令

* 循环
* 条件结构
* 命令组合
* 命令队列


*************************
## 循环

语法:

    until 测试命令; do 命令块; done
    while 测试命令; do 命令块; done
    for 变量 [in 单词]; do 命令块; done
    for ((表达式1; 表达式2; 表达式3)); do 命令块; done

示例:

    while read line; do
        echo $line
    done < file

    for name in `ls`; do
        echo $name
    done

*************************
## 条件控制1

语法:

    if 测试命令一 ; then
        命令块1;
    [elif 测试命令二 ; then
        命令块2;] ..
    [else
        命令块3; ]
    fi

    case 单词 in
        (模式一 | 模式二 ...)
            命令块;;
    esac

    select 名称 [in 单词表]; do 命令块; done

*************************
## 条件控制2

示例:

如果脚本存在且可执行则执行:

    if [ -x "~/feng.sh" ]
    then
        . ~/feng.sh
    fi

case:

    echo -n "输入动物名称:"
    read name
    case $name in
        (dog | pig) echo -n "4";;
        children) echo -n "2";;
        *) echo -n "不知道多少";;
    esac
    echo "条腿"

select:

    user="fengweifeng"
    select host in {fe,fedev}.baidu.com
    do
        echo "ssh $user@$host"
        break;
    done
    ssh $user@$host
            

*************************
## 命令队列

    命令1 && 命令2

    命令1 || 命令2

*************************
## 函数

    function fn1
    {
        echo '--fn1 start'
        echo '$0' $0 # 脚本名
        echo '$#' $# # 参数个数
        echo '$*' $* # 参数列表
        echo '$@' $@
        echo '--fn end'
    }

    echo '$_' $_ # 启动shell的路径
    echo '$*' $* # 命令行的参数
    echo '$$' $$ # 进程号
    fn1 1 2 3 4 a b c d # 函数调用
    echo '$?' $?  # 函数返回值
    sleep 100

*************************
## Shell扩展

* 大括号扩展 `echo a{x,y,z}b`
* 波浪号扩展 `echo ~ ~+ ~-`
* 参数和变量扩展 `${filename/.sh/.bash}`
* 命令替换 `sort $(ls)` 或者用反引号
* 算术扩展 `$(( 表达式 ))`
* 单词拆分 
* 文件名扩展 `*` `?` `[...]`

*************************
## 标准输入/输出/错误

* `/dev/stdin` 描述符`0`
* `/dev/stdout` 描述符`1`
* `/dev/stderr` 描述符`2`

### 重定向
    
    touch x
    chomod 000 x
    cat x > y 2>&1
    cat x 2>&1 > y

`&>x` `>&x` `>x 2>&1` 等价
*************************
## 常用命令

* ls, cd, cp, rm, mv, diff, ln, pwd, mkdir, rmdir, cat
* `find`, locate
* `grep`, `sed`, `awk`
* more, less, tail, head, wc
* date, df, free, du, top, vmstat, ps, pstree, kill, nestat, ssh, scp
* su, who, whoami
* wget, crontab, jobs, fg, bg
* `expect`


*************************
## sed, awk

都是文本处理的神级软件, 一般简易文本处理两者都可以胜任,awk对于多列数据/复杂场景更具优势.

参考文档:

* `man sed` 
* `man awk`
* [相同的需求使用sed/awk分别实现](http://wenku.baidu.com/view/35521b06cc175527072208b5.html)
* [sed学习笔记](http://man.lupaworld.com/content/manage/ringkee/sed.htm)
* [awk学习笔记](http://man.lupaworld.com/content/manage/ringkee/awk.htm)

*************************
## 示例

* 查找替换线下地址(sed)
* 快速添加到svn(svn+awk)
* 查找文件并进行操作(find)
* 日志过滤(tail+grep)
* 定时同步模板(crontab+except+ssh+scp)


*************************
## 延伸阅读

* `man bash`
* [高级Bash脚本编程指南](http://wenku.baidu.com/view/0562449f51e79b896802261f.html)
* [Bash it](https://github.com/revans/bash-it)
* 使用zsh代替bash[Oh-my-zsh](http://ohmyz.sh/)
* windows下使用bash, 下载[babun](http://projects.reficio.org/babun/babun-dist.zip)
