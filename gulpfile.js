/*---引入包---*/
var gulp = require('gulp');
/*---引入CSS压缩插件---*/
var cleanCss = require('gulp-clean-css');
/*---引入JS压缩插件---*/
var uglify = require('gulp-uglify');
/*---引入文件合并插件---*/
var concat = require('gulp-concat');
/*---引入自动刷新插件---*/
var connect = require('gulp-connect');
/*---引入sass插件---*/
var sass = require('gulp-ruby-sass');
/*---引入images压缩插件---*/
var imagemin = require('gulp-imagemin');
/*-------引入压缩html插件------*/
var htmlmin = require('gulp-htmlmin');
/*---压缩css---*/
// gulp.task('minifyCss', function () {
// 	/*---指定操作的文件/压缩/存储路径---*/
// 	return gulp.src('./src/style/*.css').pipe(cleanCss()).pipe(concat('all.css')).pipe(gulp.dest('./dist/css/'));
// });
/*---操作SASS---*/
gulp.task('sass', function () {
	return sass('./src/sass/*.scss', {
		style: 'compressed'
	}).pipe(concat('index.css')).pipe(gulp.dest('./dist/css'))
});
/*---压缩js---*/
gulp.task('minifyJs', function () {
	// gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/js/'));
	gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/js/'));
});
/*---压缩image---*/
gulp.task('minifyImg', function () {
	return gulp.src('./src/images/*.*').pipe(imagemin([
	    imagemin.svgo({plugins: [{removeViewBox: true}]})
		], {verbose: true})).pipe(gulp.dest('./dist/images/'));
});
/*---压缩html---*/
gulp.task('minifyHtml', function () {
    var options = {
        collapseWhitespace: true,//压缩HTML
        minifyJS: true,//压缩页面JS
        minifyCSS: true,//压缩页面CSS
        
    };
    gulp.src('./activity.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist/html/'));
});
/*---新建刷新任务---*/
gulp.task('reload', ['sass', 'minifyJs', 'minifyImg'], function () {
	gulp.src('./index.html').pipe(connect.reload());
});
/*---新建默认的任务---*/
gulp.task('default', ['sass', 'minifyJs', 'minifyImg'], function () {
	// 开启服务器
	connect.server({
		livereload: true,
		port: 8081
	});

	// 监听命令
	gulp.watch(['./src/sass/*.scss', './src/js/*.js', './src/images/',], ['reload']);
});