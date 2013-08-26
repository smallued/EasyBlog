module.exports = function(grunt) {

    // 构建任务配置
    grunt.initConfig({
        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            //具体任务配置
            build: {
                //源文件
                src: ['src/js/main.js'],
                //目标文件
                dest: 'build/index-min.js'
            }
        },
        cssmin: {
            build: {
                src: ['src/css/normalize.css'],
                dest: 'build/all.min.css'
            }
        },
    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // 默认执行的任务
    grunt.registerTask('default', ['uglify', 'cssmin']);
};