define(function(require){
    var markdown = require('markdown');
    var $ = require('jquery');

    var slider = {};
    var pages = [], 
    currIndex = 0, 
    $container,
    activePage;

    var Page = function(text){
        text = (text || '').trim();
        markdown.converter();
        this.text = markdown.makeHtml(text);
        this.$dom = $('<div>').addClass('slider-page').html(this.text);
        this.$dom.find('a[href]').attr('target', '_blank');
    };

    slider.init = function(text, element){
        if(!element) element = $('<div>').appendTo('body');
        $container = $(element).eq(0).addClass('slider-container slider');
        slider.updateLayout();
        if(text){
            slider.initPages(text);
        }else{
            var md = window.location.search.replace(/^\?file=/, '');
            if(md){
                $.get(md).done(function(data){
                    slider.initPages(data.trim());
                }).error(function(){
                    alert('加载错误');
                });
            }
        }
    };

    slider.initPages = function(text){
        var list = text.split(/\n\s*\*{3,}(?=\r?\n)/);
        list.forEach(function(item){
            pages.push(new Page(item));
        });
        pages.forEach(function(page){
            slider.addPage(page);
        });
        slider.checkHashChanged();
        slider.update();
    };

    slider.checkHashChanged = function(){
        var hash = window.location.hash.replace(/^#/, '');
        if(hash && !isNaN((hash = parseInt(hash)))){
            var index = hash;
            if(index > -1 && index < pages.length){
                currIndex = index;
            }
        }
    };

    slider.updateLayout = function(){
        var a = 4 / 3, $win = $(window), 
            screenWidth = $win.width(),
            screenHeight = $win.height(),
            sa = screenWidth / screenHeight,
            width;
        if(sa >= a) {
            width = screenHeight * a;
            if(width < 640) width = 640;
            $container.width(width);
        } 
    };


    slider.addPage = function(page){
        $container.append(page.$dom);
    };

    slider.nextPage = function(){
        if(currIndex == pages.length -1){
            slider.alertEnd();
            return;
        }
        currIndex ++;
        slider.update();
    };

    slider.prevPage = function(){
        if(currIndex == 0) {
            slider.alertStart();
            return;
        }
        currIndex --;
        slider.update();
    };

    slider.gotoPage = function(index){
        if(currIndex == index) return;
        if(index < 0 || index > pages.length -1) return;
        currIndex = index;
        slider.update();
    };

    //更新显示
    slider.update = function(){
        var page = pages[currIndex];
        if(activePage == page) return;
        if(activePage){
            activePage.$dom.hide(200);
        }
        activePage = page;
        activePage.$dom.show(200);
        window.location.hash = currIndex;
    };

    slider.alertEnd = function(){
        console.log('最后一张了');
    };

    slider.alertStart = function(){
        console.log('前面没有了');
    };

    $(document).keydown(function(e){
        if(e.keyCode == 39 || e.keyCode == 40){
            slider.nextPage();
        }
        else if (e.keyCode == 37 || e.keyCode == 38){
            slider.prevPage();
        }
    });

    $(window).resize(function(){
        slider.updateLayout();
    }).on('hashchange', function(){
        slider.checkHashChanged();
        slider.update();
    });


    return slider;
});
