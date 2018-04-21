var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    gulp.src('../src/sass/*.scss') 
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('../src/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// gulp.task('watchSass',function(){
//     gulp.watch('../src/sass/*.scss',['compileSass'])
// });



var browserSync = require('browser-sync');

// 静态服务器
gulp.task('server',function(){
    browserSync({
        // 服务器路径
        // server:'./src/',

        // 代理服务器
        proxy:'http://localhost:6066',

        // 端口
        port:6066,

        // 监听文件修改，自动刷新
        files:['../src/**/*.html','../src/css/*.css','../src/api/*.php']
    });

    // 监听sass文件修改，并自动编译
    gulp.watch('../src/sass/*.scss',['compileSass'])
})
