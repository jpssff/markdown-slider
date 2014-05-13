module.exports = function (grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({

        meta: {
            pkg: pkg,
            version: pkg.version
        },

        tmpl: {
            build:{
                files:[
                    {
                        expand: true,
                        src: './text/*.md',
                        cwd: './',
                        filter: 'isFile',
                    }
                ]
            }
        }
    });

    //将文件作为模板处理
    grunt.registerMultiTask('tmpl', 'process file as a template using meta data', function(){
        var path = require('path');
        this.files.forEach(function(file){
            file.src.forEach(function(filePath){
                var tpl = grunt.file.read('./template/default.html'),
                    content = grunt.file.read(filePath),
                    title = path.basename(filePath, '.md'),
                    html = grunt.util._.template(tpl, {title:title, content:content}),
                    htmlPath = './slide/' + title + '.html';
                grunt.file.write(htmlPath, html);
                grunt.log.writeln('tmpl: ' + htmlPath);
            });
        });
    });


    grunt.registerTask('default', ['tmpl']);

};
