'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var notify = require('gulp-notify');
var jshint = require("gulp-jshint");
var clean = require('gulp-clean');

var path = {
    src:"public/",
    css:"public/css/",
    js:"public/js/",
    less:"mill/less/",
    img:"public/img/",
    build:"build/"
};

//编译less
gulp.task('less',function(){
    gulp.src(path.less+'**/*.less')
        .pipe(plumber({errorHandler:notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(gulp.dest(path.src + 'css'))
        .pipe(notify({message:'less compile done!'}))
    ;
});

//js检查
gulp.task('lint', function() {
    gulp.src(['./build/**/*.js', '!./build/bower_components/**'])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

//编译js dev mode
gulp.task('js', function(){
    return gulp.src(path.js + "**/*.js")
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build + 'scripts'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(uglify())
        //.pipe(gulp.dest(path.build +'/scripts'))
        .pipe(notify({message : 'Scripts task complete'}))
        ;
});

//清理
gulp.task('clean', function() {
    return gulp.src(['./build'], {read: false})
        .pipe(clean({force:true}));
});

//watch
gulp.task('watch',function(){
    gulp.watch(path.less+'**/*.less',['less']);
});

gulp.task('default', ['browser-sync','watch'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
    var port = process.env.PORT || 5000;
    browserSync.init(null, {
        proxy: "http://localhost:"+port,
        files: ["public/**/*.*"],
        //browser: "google chrome",
        browser: "firefox",
        //reloadDelay:1000,
        port: 3000
    });
});

gulp.task('nodemon', function (cb) {
    // We use this `called` variable to make sure the callback is only executed once
    var called = false;
    return nodemon({
        script: './bin/www',
        watch: ['app.js','sockets.js', 'routes/**/*.*']
    })
        .once('start', function onStart() {
            if (!called) {
                cb();
            }
            called = true;
        })
        .on('restart', function onRestart() {
            // Also reload the browsers after a slight delay
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, 3000);
        });
});